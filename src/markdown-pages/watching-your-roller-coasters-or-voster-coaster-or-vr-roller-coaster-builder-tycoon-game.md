---
path: "/watching-your-roller-coasters-or-voster-coaster-or-vr-roller-coaster-builder-tycoon-game"
date: "2018-07-30"
title: "Watching Your Roller Coasters | Voster Coaster | VR Roller Coaster Builder Tycoon Game"
image: "./images/50_caption_QmeBMht5zypqDnSw7V2bQZMLLjNcr9rhK7KD3jPHAN6Hct"
tags: '["utopian-io","development","programming","gamedev","vostercoaster"]'
---

![track preview.gif](./images/QmeBMht5zypqDnSw7V2bQZMLLjNcr9rhK7KD3jPHAN6Hct)

# Repository
https://github.com/ajayyy/VosterCoasterVR

# Watching your roller coasters

After finishing the ability to build roller coasters, I set out to allow the roller coasters to be run. I wanted this to be as realistic as possible so that I can later use the data to gather g-forces to know the intensity of roller coasters that are created.

# Physical approach

When I first was thinking of ways to create a preview of your roller coaster, I thought of using the default physics engine. I would create meshes on each track and try to slide a box across the whole thing.

This started looking like it was going to work perfectly, but sadly it did not because of a small issue in the physics engine. Whenever it got to a crease between the one track pieces collision mesh and another's, there was a chance it would suddenly jump upward.

This drove me nuts trying to find what was causing this problem. I tried many things to try to fix this.

### Smooth out the meshes

Because of how curves work, the size of the collider might have to be slightly different for each track piece. At first, I thought this was the issue, but fixing sizes did nothing.

### Wheels

In real life, wheels do not slide across a surface, they roll.

I then attempted to create a rolling ball down the tracks.

Sadly, the same jumping issue remained.

### Even more realism

![image.png](./images/QmS1uK893oUJvqeTfm8pBTHo4U5JVzzBsGb7DeSp32uiAf)

I tried recreating a real roller coaster's wheel system by having wheels above and below the track.

![image.png](./images/QmcmD8ZRqs6MXhi4KFjYaPo885F3WWDFs3RNoy6XtJNP9x)

This still had the same issues and it was boggling my mind.

### Multiple meshes

After more research, I discovered that the issue probably stems from the fact that multiple colliders are being used. Combining the colliders will surely help!

To do this, I created many planes where the colliders before used to be and merged them into one.

```c#
//Create cubes and offset them based on each bone's position
for (int b = 0; b < bones.Count; b++) {
    float size;

    if (b + 1 >= bones.Count || (b + 1) % rollerCoaster.boneAmount == 0) {
        //if there is no next position, use the last position instead
        size = lastSize;
    } else {
        Vector3 nextPosition = bones[b + 1].position;
        size = Vector3.Distance(bones[b].position, nextPosition) / GameController.instance.scale;
    }

    cubes[b] = CreatePlane(offset + bones[b].position / GameController.instance.scale, new Vector3(1, 1, size), bones[b].rotation);

    lastSize = size;
}
```

This still was having jumping issues, which made no sense.

### Simplifying mesh

I concluded that this must be because each track is still being treated as a seperate mesh, even though it is all combined into one. I tried using resources to simplify the mesh with no luck.

After all this, I learned that this physics engine is not practical to make a realistic roller coaster simulation with.

# Custom Approach

Time and time again, I learn how much making a custom system works better than trying to use many other systems together to do something it was never designed for.

I also learned how making custom physics will help me so much in the future when I will need to calculate the g-forces of the roller coasters to determine intensity and other statistics.

To do this, I thought of the track as a straight line, and made the position variable just be specifying the position on that straight line.

Each frame, the velocity must be added to the position (divided by the physics frame rate)

```c#
position += velocity / 60f;
```

And each frame, the acceleration must be added to the velocity. But how is the acceleration calculated? This is calculated based on gravity on an inclined plane.

```c#
//calculate the force downward (divided by 60 fps)
float forceDown = (-9.81f) / 60f;

//calculate the amount of that force used on an incline of the angle (same as acceleration)
float gravityAcceleration = Mathf.Sin(inclineAngleOfTrack * Mathf.Deg2Rad) * forceDown;
```

![image.png](./images/QmccqpLXSurc931HpFTdm5BwKRbHPQPxWyy3H5BRzzqf1J)

The blue arrow is the downward force and the red arrow is what we are trying to find. The green arrow would be found if you use cosine instead.

After finding the acceleration, it can be added it to the velocity.

```c#
//calculate the new movements
velocity += gravityAcceleration;
```

Friction can also be added.
```c#
if (velocity > 0) {
    velocity -= friction;
    if (velocity < 0) {
        velocity = 0;
    }
} else {
    velocity += friction;
    if (velocity > 0) {
        velocity = 0;
    }
}
```

### Displaying the results

To display the results, the new position on the track line can then be calculated.

```c#
Transform finalBone = GetCurrentBone(true);
```

However, in this game, everything is stored in bones, which are 1/10th of a track. Yes, that area is pretty small, but not small enough, so the difference between this bone and the next bone needs to be calculated to see how much farther from the current bone of the current track piece the cart should be placed.

```c#
Vector3 extraAmount = new Vector3(0, 0, 1) * (distanceToNextBone * (boneNum - (int)boneNum));
transform.position = finalBone.position + MathHelper.RotatePointAroundPivot(offsetAmount, Vector3.zero, finalBone.rotation) - MathHelper.RotatePointAroundPivot(extraAmount, Vector3.zero, finalBone.rotation);
```

This same thing can be used with the rotation.

```c#
Vector3 angleDifference = nextBone.eulerAngles - finalBone.eulerAngles;
Vector3 extraRotation = angleDifference * (boneNum - (int)boneNum);
transform.eulerAngles = finalBone.eulerAngles + extraRotation;
```

# Pull Request

https://github.com/ajayyy/VosterCoaster/pull/15

# GitHub Account
https://github.com/ajayyy