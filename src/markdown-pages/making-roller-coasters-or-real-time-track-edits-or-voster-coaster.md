---
path: "/making-roller-coasters-or-real-time-track-edits-or-voster-coaster"
date: "2018-06-15"
title: "Real-Time Track Edits | Building Roller Coasters | Voster Coaster"
image: "/images/63_caption_QmeuuCo7wJTEjyNeCryeov4hjzc2uykULPeSsJ6nvVEdes"
tags: '["utopian-io","development","programming","gamedev","vostercoaster"]'
---

# Repository
https://github.com/ajayyy/VosterCoasterVR/

# What is Voster Coaster?

Voster Coaster is a VR game where you build roller coasters. I plan on making it a theme park tycoon game in the future as well.

# Made the height of track pieces uniform for turns

Before, the inside turn would be scaled to the correct height:
![image.png](./images/QmeuuCo7wJTEjyNeCryeov4hjzc2uykULPeSsJ6nvVEdes)


Now, the outside turn is:
![image.png](./images/QmRp48ztumVnzZcP8U75EGdCccxGnyxhm6Mu8Bbw8DXYjg)

This is much more useful, as it makes the total height uniform, and will help when combining turn pieces with normal pieces.

# Fixed issue with track pieces becoming misaligned at certain angles

For angle of 27 degrees before the change:

![image.png](./images/QmSUcue2ank4XotBdYvfQmkRrVJcrXbdzE7rLwBCxyoVh6)

After:
![image.png](./images/QmZgKCQSAa8jZuAwNDj4efa8nSpNNb6KL1fptZatvVg6zV)

### How?

To fix this, I had to think of the track piece as one section of a full circle
![image.png](./images/QmbW8eRouaZVRH7VDEr7QMxqMr5arpTJ319kzBArik9L2h)

Then, I can use SOH CAH TOA to know that the Cos of the angle B (in this case 90 - 27 as shown in the diagram above), is equal to the adjacent divided by the hypotenuse.

This means sinB = O/H, cosB = A/H, tanB = O/A (These are the lengths of the sides, Opposite and Adjacent of the angle, and the Hypotenuse).

The angle is determined from the total angle of this track piece, but then it has to be `90 - that angle`, as shown in the image above. The known angle is angle A, and angle A is equal to `90 - B`.

The hypotenuse side is the radius of the circle.

```c#
//calculate the full angle this track piece gets to
float totalAngle = 90 - adjustmentAngle.y * 9f;

 //radius of the outside circle (SOH CAH TOA, cosA = a/h, h = a/cosA)
float radius1 = Mathf.Abs(sizes[i]) / Mathf.Cos(totalAngle * Mathf.Deg2Rad);
```

Now, the proper radius is calculated instead of just assuming that the full height is the radius (as that would only work for a 90 degree turn).

# Real-time track adjustment
![realtime-track-adjustment.gif](./images/QmUCVTC8ThpKmspCERk8mPaNQ2qBJwVB2nT2XBRfYkHxR8)

This was [done](https://github.com/ajayyy/VosterCoasterVR/pull/7/commits/2c5e172b54bc189f28f454a66ee1103069df509c) by creating a function to reset the track completely. This makes it so that you can modify it again.

This works, but is very inefficient, requiring the whole mesh to be reset every frame just to be adjusted again.

So, I [later](https://github.com/ajayyy/VosterCoasterVR/pull/8/commits/f24d3b1e5be1c70bdfc86f22fa974c068fcf3f05) changed it again. Now, when adjusting the mesh of the track, it does not do any math relative to the positions (`transform.localPosition *=`) but instead sets it to the default (`transform.localPosition = defaultBonePosition * `).

This, along with setting the angle instead of adding to it, and saving the original size to attempt to scale all track pieces too removes the need to reset the track piece every frame when changing the angle.

# GitHub Account

https://github.com/ajayyy/

# Pull Requests

https://github.com/ajayyy/VosterCoasterVR/pull/6
https://github.com/ajayyy/VosterCoasterVR/pull/7
https://github.com/ajayyy/VosterCoasterVR/pull/8