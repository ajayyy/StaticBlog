---
path: "/smooth-window-movement-and-manipulation-or-voster-coaster-or-vr-roller-coaster-building-and-tycoon-game-1535759087937"
date: "2018-08-31"
title: "Smooth Window Movement And Manipulation | Voster Coaster | VR Roller Coaster Building And Tycoon Game"
image: "https://img.youtube.com/vi/T4B0SE3am_k/0.jpg"
tags: '["utopian-io","development","gamedev","programming","vostercoaster"]'
---

#### Repository
https://github.com/ajayyy/VosterCoaster/

# Smooth Window Movement

https://www.youtube.com/watch?v=T4B0SE3am_k

Before, the window would just teleport to the new location necessary. Now it slowly moves over using Slerp  (spherical interpolation). It feels a lot better when dragging around the windows as they feel more realistic. Objects in real life do not teleport.

# Window Resizing

Another important feature of windowing system is resizing. I decided to use a pinch to zoom system to make this window resizing. By pointing at the window and pinching your controllers together, you make it smaller. When you move your controllers away from eachother, they grow (as shown in the video).

```c#
resizingCurrentHitLeft = gameController.leftWindowHit;
resizingCurrentHitRight = gameController.rightWindowHit;

Vector3 leftPosition = resizingCurrentHitLeft.point;
Vector3 rightPosition = resizingCurrentHitRight.point;

if (!gameController.leftWindowBHit) {
    leftPosition = gameController.leftControllerObject.transform.position + gameController.leftControllerObject.transform.forward * leftDistance;
} else {
    leftDistance = gameController.leftWindowDistanceAway;
}

if (!gameController.rightWindowBHit) {
    rightPosition = gameController.rightControllerObject.transform.position + gameController.rightControllerObject.transform.forward * rightDistance;
} else {
    rightDistance = gameController.rightWindowDistanceAway;
}

Vector3 newSize = (Vector3.Distance(leftPosition, rightPosition) / Vector3.Distance(resizingStartHitLeft.point, resizingStartHitRight.point)) * resizingStartSize;
```

The program takes the points that the raycast from the controller hit the window. These points are then compared to the points that were originally hit when the resizing process was started (the trigger button was pressed with both controllers pointing at the window)

# Smooth Resizing

Very similar to how the smooth movement works, resizing cannot be just teleporting to a new size. Using Slerp and a start and target size, these sizes can be interpolated.

```c#
//change size based on current animation
if (animatingResize) {
    transform.position = Vector3.Slerp(animatingStartPosition, animatingTargetPosition, (Time.time - animatingStartTime) * 20f);

    transform.localScale = Vector3.Slerp(animatingStartSize, animatingTargetSize, (Time.time - animatingStartTime) * 20f);

    transform.rotation = Quaternion.Slerp(animatingStartRotation, animatingTargetRotation, (Time.time - animatingStartTime) * 20f);

    if ((Time.time - animatingStartTime) * 20f >= 1) {
        animatingResize = false;
    }
}
```

# Movement While Resizing

In real life, if you grab a paper and are dragging your fingers along it, you expect moving your hand to move the entire Window. To make this seem more realistic, I made the position of the window while it was being resized be the average position between the two points (or a 0.5 interpolation).

```c#
animatingTargetPosition = Vector3.Lerp(leftPosition, rightPosition, 0.5f);
```

# Track Offset Issues

###### Partial Track Pieces Between Segements

One track segment is made up of many track pieces. The last piece on the track segment might not need to be full filled, so it ends up being a partial track piece. When a new track segment is created after, the rest of the partial track piece is used in the next track segment.

Before, the amount being used for that was being subtracted from the amount of curve tracks that were needed to be generated for the next segment, but that ended up not being correct. The correct way is to subtract it from the amount of tracks needed to be generated going from the end of the curve to the target.

###### Horizontal Offset

Each track piece is split up into 10 "bones". This is to make the track piece look curved. When a partial track piece is created, it might need to use only part of a bone.

Before, that bone's size was then shrunk accordingly, same with the angle it was at.

```c#
rails[i][r].transform.localPosition = ((percentageOfTrack - ((r - 1) / rollerCoaster.boneAmount)) * rollerCoaster.boneAmount) * defaultBonePosition;
rails[i][r].transform.localEulerAngles = ((percentageOfTrack - ((r - 1) / rollerCoaster.boneAmount)) * rollerCoaster.boneAmount) * currentAngle;
```

That turned out not to be accurate enough. Instead, that track piece has to just not exist, rounding down to the nearest bone.

```c#
rails[i][r].transform.localPosition = Vector3.zero;
rails[i][r].transform.localEulerAngles = Vector3.zero;
```

#### Pull Request
https://github.com/ajayyy/VosterCoaster/pull/18

#### GitHub Account
https://github.com/ajayyy