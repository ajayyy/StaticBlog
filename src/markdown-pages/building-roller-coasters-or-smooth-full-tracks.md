---
path: "/building-roller-coasters-or-smooth-full-tracks"
date: "2018-07-16"
title: "Building Roller Coasters | Smooth Full Tracks | Voster Coaster VR Game"
image: "https://ipfs.busy.org/ipfs/QmX6ECfwryqgBVLK5U9SNJzWZn2nQ3KV2pN3W2hP6UpnzR"
tags: '["utopian-io","development","programming","vostercoaster","fundition-rysv7vm2t"]'
---

![Added Smooth Tracks.gif](https://ipfs.busy.org/ipfs/QmX6ECfwryqgBVLK5U9SNJzWZn2nQ3KV2pN3W2hP6UpnzR)

### In VR

Sorry for the shakiness, that's just how shaky the human head is, I should probably try stabilizing it next time.

![smooth tracks vr.gif](https://ipfs.busy.org/ipfs/QmbJbRDG4gkNvUvY9LzbajBXeYUrqei5hxN9u2z3mFAAF1)

### What it looked like before

![image.gif](https://ipfs.busy.org/ipfs/QmYXqYkTuDU6w3YV1vp2HD3QNHPWognJXxyKUBSGZaU43S)

# Repository
https://github.com/ajayyy/VosterCoasterVR

# Fixed Curve Calculations

The curve calculations ended up having to be redone entirely.

I started having big issues with how the track curve was being calculated when an angle was above 135 degrees, and tried many different things to try to fix it, including even trying to calculate the error made because the tracks are not actually curves, they are actually shapes with 10 segments (bones). However, that turned out not to have a noticeable enough difference to matter, and the calculations required way too much time to be feasible to be run every frame.

#### The margin of error calculation

```c#
//because the track pieces are not actual circles and are made up of straight segments, the margin of error must be calculated
public float getDistanceForAngle(float adjustmentAngle, float currentDistance, int amount) {

    //total displacement on each axis
    float totalX = 0;
    float totalY = 0;

    for(int i = 0; i < amount; i++) {
        //calculate x value for this segment
        float x = Mathf.Sin(adjustmentAngle * (i + 1) * Mathf.Deg2Rad) * (currentDistance / Mathf.Sin(Mathf.PI / 2));
        //calculate y using x in the pythagorean formula
        float y = Mathf.Sqrt(Mathf.Pow(currentDistance, 2) - Mathf.Pow(x, 2));

        totalX += x;
        totalY += y;
    }

    float totalDisplacement = Mathf.Sqrt(Mathf.Pow(totalX, 2) + Mathf.Pow(totalY, 2));

    //find the factor of error this displacement has versus the ideal
    float differenceFactor = ((rollerCoaster.trackBoneSize / RollerCoaster.scale) * amount) / totalDisplacement;

    //multiply this error factor by the current distance and return it to be the real distance
    return currentDistance * differenceFactor;
}
```

This function calculates the length of each segment, then calculates the x and y displacement to get there. It then adds all these up and calculates the total displacement to be able to compare it with the perfect displacement (with a circle). This will fix the error, but it is not worth the extra computational time.

#### How the new curve calculations work

![thing 2.png](https://ipfs.busy.org/ipfs/QmZL7tZWNgZtoNw5Di8PR1DhrAXFkjc1ryx73NVBsCB1aP)

In this image, the line on the right represents the start angles (linear formulas), and the left line represents the target. The top red points on each line represent the positions (start and target). A line is created from the start point at the angle ```(180 - targetAngle) / 2``` (represented by angle A in the diagram). Using this line, the collision point between this line and the target line can be found (represented by the lower red dot on the target line in the diagram). This point and the start point are now two positions on the circle.

To calculate the radius, a ratio is calculation.

```c#
//y = rsinA, x = rcosA
//these are the positions of these angles on a circle with a radius of 1
float targetNormalX = Mathf.Cos((-targetAngle.y + 360) * Mathf.Deg2Rad);
float targetNormalY = Mathf.Sin((-targetAngle.y + 360) * Mathf.Deg2Rad);
float startNormalX = Mathf.Cos(startTrackAngleRelative.y * Mathf.Deg2Rad);
float startNormalY = Mathf.Sin(startTrackAngleRelative.y * Mathf.Deg2Rad);

//the radius would be equal to 1 for a circle like this. Find how much the distances between the points account for the radius of the circle
float percentageOfRadius = Mathf.Sqrt(Mathf.Pow(startNormalX - targetNormalX, 2) + Mathf.Pow(startNormalY - targetNormalY, 2));
```

This finds the ratio between the distance between these points, and the radius on a circle of radius 1 (to make it easier). This ratio can then be used to calculate the radius of the full circle.

```c#
//radius of the curve using the percentage calculations from above
float radius = Mathf.Sqrt(Mathf.Pow(circleStartX - targetPosition.x, 2) + Mathf.Pow(circleStartY - targetPosition.z, 2)) / percentageOfRadius;
```

Then, all that's left is to calculate how many tracks need to be drawn to create that curve, and how many to reach the target from that curve.

```c#
//calculate the cirumference of this circle multiplied by the amount this curve takes up of the whole circle
float curveLength = 2 * Mathf.PI * radius * (smallestAngleDifference.y / 360f);

curveTracksNeeded = (curveLength / (trackBoneSize * 10f));

startTracksNeeded = 0;

//Find difference between circleTarget and the target position
targetTracksNeeded = (Mathf.Sqrt(Mathf.Pow(circleTargetX - targetPosition.x, 2) + Mathf.Pow(circleTargetY - targetPosition.z, 2)) / (trackBoneSize * 10f));
```

Now the amount of tracks to create a curve and reach the target point are created.

This only applied if the tracks to the target needed is more than the tracks to the start needed. If more tracks are needed to reach the start, a similar process is done, except in the other way.

```c#
//find intersection between line to the start of curve from the end of curve
float endToStartCurveSlope = Mathf.Tan((((180 - targetAngle.y) / 2)) * Mathf.Deg2Rad);
//the b value (b = y - mx)
float endToStartCurveB = targetPosition.z - endToStartCurveSlope * targetPosition.x;

//find intersection between this line and the start line (x = (b2 - b1) / (m1 - m2))
//this position will be the second point on the circle of the curve (end point), the first is the target track
float circleStartX = (endToStartCurveB - startB) / (startSlope - endToStartCurveSlope);
float circleStartY = endToStartCurveSlope * circleStartX + endToStartCurveB;

//y = rsinA, x = rcosA
//these are the positions of these angles on a circle with a radius of 1
float targetNormalX = Mathf.Cos((-targetAngle.y + 360) * Mathf.Deg2Rad);
float targetNormalY = Mathf.Sin((-targetAngle.y + 360) * Mathf.Deg2Rad);
float startNormalX = Mathf.Cos(startTrackAngleRelative.y * Mathf.Deg2Rad);
float startNormalY = Mathf.Sin(startTrackAngleRelative.y * Mathf.Deg2Rad);

//the radius would be equal to 1 for a circle like this. Find how much the distances between the points account for the radius of the circle
float percentageOfRadius = Mathf.Sqrt(Mathf.Pow(startNormalX - targetNormalX, 2) + Mathf.Pow(startNormalY - targetNormalY, 2));

//radius of the curve using the percentage calculations from above
float radius = Mathf.Sqrt(Mathf.Pow(circleStartX - targetPosition.x, 2) + Mathf.Pow(circleStartY - targetPosition.z, 2)) / percentageOfRadius;

//calculate the cirumference of this circle multiplied by the amount this curve takes up of the whole circle
float curveLength = 2 * Mathf.PI * radius * (smallestAngleDifference.y / 360f);

curveTracksNeeded = (curveLength / (trackBoneSize * 10f));

//Find difference between circleTarget and the target position
startTracksNeeded = (Mathf.Sqrt(Mathf.Pow(circleStartX - startPosition.x, 2) + Mathf.Pow(circleStartY - startPosition.z, 2)) / (trackBoneSize * 10f));

targetTracksNeeded = 0;
```

# Creating a Smoothly Moving Track Segment

You can see in the old gif how choppy the translations move. This is because the track amounts are stored as integers, and full track pieces are placed each time. This does not produce a smooth or accurate track. To fix this, these numbers need to be saved as floats (number with decimals), and if necessary, only part of the track should be drawn. This makes the track more accurate to reach the target point, and makes the track movement very smooth.

To do this, the track has to be able to only draw a percentage of the track.

```c#
//cut this off to make sure it is only the percentageOfTrack
for (int i = 0; i < rails.Length; i++) {
    for (int r = 1; r < rails[i].Length; r++) {
        //if the curve start is normal, treat this normally, otherwise just use the start angle
        if (secondCurveStart == -1) {
            currentAngle = adjustmentAngle;
        } else {
            currentAngle = startAngle;
        }

        if ((r - 1) / boneAmount > percentageOfTrack && secondCurveStart != -1) {
            //if the curve start is not zero, treat the rest of the track as the upcomming angle instead of the start angle
            rails[i][r].transform.localPosition = defaultBonePosition;
            rails[i][r].transform.localEulerAngles = adjustmentAngle;
            rails[i][r].SetActive(true);
        } else if ((r - 1) / boneAmount > percentageOfTrack && secondCurveStart == -1) {
            //if the curve start is zero, then treat the rest of the track as if it does not exist
            rails[i][r].transform.localPosition = Vector3.zero;
            rails[i][r].transform.localEulerAngles = Vector3.zero;
            rails[i][r].SetActive(false);
        } else if ((r + 1 - 1) / boneAmount > percentageOfTrack && percentageOfTrack != 1) {
            rails[i][r].transform.localPosition = ((percentageOfTrack - ((r - 1) / boneAmount)) * boneAmount) * defaultBonePosition;
            rails[i][r].transform.localEulerAngles = ((percentageOfTrack - ((r - 1) / boneAmount)) * boneAmount) * currentAngle;
            rails[i][r].SetActive(true);
        }
    }
}
```

This code cuts the track off if it has passed the percentage needed to draw, and will only draw part of it if necessary.

This smooths it out a bit, but the way the track is drawn, there are three sections.
![image.png](https://ipfs.busy.org/ipfs/QmTB2MKMxxKxJ3t6Uz6BTfLmGAzSMwCrTY6a9KF6C5uX13)
![image.png](https://ipfs.busy.org/ipfs/Qmbe95XSn8MB4249gciu5yxjTteNuDHMnLhEBmmQfPojVj)

Between each of these, these partial tracks need to be merged into one. To do this, as seen in the above code snippet, a variable called ```secondCurveStart``` is used. This variable specifies where a second curve inside of the track can start. This makes it so that a track can start off curving in one direction, and finish off curving in another direction.

This same technique is used when combining two different track segments into one.

![image.png](https://ipfs.busy.org/ipfs/QmVp6L66wwCt2ggscN9Bsiq49nwhNpj6AXSx4BKzdCznQD)

As you can see, these merged areas are unnoticeable, which is exactly what is required to create a smooth looking track.

The angles are now checked to make sure they intersect properly to create a proper curve as well.

# Attaching a second track segement

To continue to do the same math as before, but with the start track at a different angle, all of the positions are rotated in the direction of the angle.

```c#
//rotate ppositions around the start angle
targetPosition = RotatePointAroundPivot(targetPosition, startPosition, -currentAngle);
targetAngle -= currentAngle;
startTrackAngleRelative = Vector3.zero;
```

When combining the track segments, the start track has to merge with the second track segment. This is not normal as the start track is not considered part of the track segment, so it needs to store data about it's previous positions and angles in case the new segment is removed or edited.

```c#
public Vector3 totalAngle = new Vector3(0, 0, 0);
//used when one track piece has mutliple angles on it
public Vector3 startAngle = new Vector3(0, 0, 0);
public float percentageOfTrack = 1;
public float secondCurveStart = -1;
//has this track piece been modified by the current incomplete track
public bool modified = false;
public Vector3 oldTotalAngle = Vector3.zero;
```

The modified variable is used to know that the track has been modified and is not in it's normal position. This is used when resetting the track position.

```c#
//reset last track back to normal if nessesary
if(totalTracksNeeded() == 0 && startTrack.GetComponent<TrackPiece>().modified) {
    TrackPiece trackPiece = startTrack.GetComponent<TrackPiece>();

    Vector3 oldPosition = trackPiece.transform.position;
    Vector3 oldAngles = trackPiece.transform.eulerAngles;

    //reset position and angle before adjusting the track
    trackPiece.transform.position = Vector3.zero;
    trackPiece.transform.localEulerAngles = Vector3.zero;

    //adjust the track back the how it was
    trackPiece.AdjustTrack(trackPiece.oldTotalAngle, Vector3.zero, trackPiece.percentageOfTrack, -1);

    //set it to what it was before
    trackPiece.transform.position = oldPosition;
    trackPiece.transform.localEulerAngles = oldAngles;

    startTrack.GetComponent<TrackPiece>().modified = false;
}
```

# Bonus

Here is a weird bug I found along the way.

![image.png](https://ipfs.busy.org/ipfs/QmRgrp54RZKYyNp2E2LKPCDPe6fq3xDxbaknACBrcs35g7)


# Pull Request
https://github.com/ajayyy/VosterCoasterVR/pull/10 (just cleanup)
https://github.com/ajayyy/VosterCoasterVR/pull/11 (redoing all bad curve calculations)
https://github.com/ajayyy/VosterCoasterVR/pull/12 (everything else)

You can see the full set of changes in the pull request. This post only includes an overview of major changes.

# GitHub Account
https://github.com/ajayyy