---
path: "/track-snapping-voster-coaster-vr-roller-coaster-builder-and-theme-park-builder"
date: "2018-03-14"
title: "Track Snapping - Voster Coaster - VR Roller Coaster Builder and Theme Park Builder"
image: "/images/72_caption_gztp2taqnxzvkrt0vycn.png"
tags: '["utopian-io","gamedev","vr","unity3d","vr-gamedev"]'
---


# Placement

![image.png](/images/gztp2taqnxzvkrt0vycn.png)


Before, in my proof of concept build, you could drop a full roller coaster in mid-air, and it would fall to the ground. Now, I have changed that entirely.

You now have pieces of a roller coaster, that are placed on the ground below you. They always are on the ground, and it does not rely on the physics to drop it down. 

This is done by creating a raycast (a ray that is cast in a direction to find objects) toward the ground to find the nearest ground.

``` c#
RaycastHit hit;
if (Physics.Raycast(rightController.transform.position, Vector3.down, out hit)) {
        Vector3 spawnPosition = hit.point;
}
```
The raycast collision point is then recorded, and used to figure out where to spawn the track. This point will be the nearest ground from the controller's position.

# Issues with the Raycast

The raycast will not work perfectly because it is a ray (line) that is cast straight from the controller position (this made it so that it only snapped if the middle of the track was on that level of ground), but the track is a certain width. To fix this, I decided to use a box cast instead. A box cast can have a set size, and will find the first object (closest object) within that radius.

``` C#
RaycastHit groundHit;

bool groundBoxCastCollided = Physics.BoxCast(rightController.transform.position, (options[currentCoaster].GetComponent<BoxCollider>()).size * options[currentCoaster].transform.localScale.x / 2, Vector3.down, out groundHit, Quaternion.Euler(new Vector3(180, 0, 0)));
```

This grabs makes a box cast downward, from the right controller's position, with the sizeof the current coaster options boxcollider multiplied by it's scale (as everything is scaled down).

# Track Snapping

![image.png](/images/qivvfypgytelpkpkuvfj.png)


Another feature I added was the ability for tracks to snap together. If you attempt to place a track on another track, it will snap it beside it, to the closest side. This takes the boxraycast and checks if there is a game object with the tag "Track" under it. If so, it can calculate the position necessary to spawn it.

``` C#
if (groundHit.collider.gameObject.tag == "Track") {

                        Vector3 spawnPositionForward = groundHit.collider.gameObject.transform.position + (groundHit.collider.gameObject.transform.forward * ((BoxCollider)groundHit.collider).size.z) * groundHit.collider.gameObject.transform.localScale.x;
                        Vector3 spawnPositionBackward = groundHit.collider.gameObject.transform.position + ((-groundHit.collider.gameObject.transform.forward) * ((BoxCollider)groundHit.collider).size.z) * groundHit.collider.gameObject.transform.localScale.x;

                        float distForward = Vector3.Distance(currentThumbnail.transform.position, spawnPositionForward);
                        float distBackward = Vector3.Distance(currentThumbnail.transform.position, spawnPositionBackward);

                        if(distForward < distBackward) {
                            spawnPosition = spawnPositionForward;
                        } else {
                            spawnPosition = spawnPositionBackward;
                        }

                        spawnRotation = groundHit.collider.gameObject.transform.eulerAngles.y;
}
```

This takes advantage of the BoxCast as it can now snap even when only part of the track is touching the other.

# Other changes

I also added some other miscellaneous changes to prepare for future features, like the spline based roller coaster creator.

# Next Steps

My next plan is to add the ability to customize the steepness of each track piece. This will help lead to the eventual ability to just select different points and have the program automatically make a track between them.

These features to rely less on the physics engine and do more manually help reach that goal, and make the overall experience more consistent and less processor intensive.

# Thanks for the models!

Thank you so much everyone for making such awesome models, I plan to add them all in once I'm done the basic roller coaster building.

