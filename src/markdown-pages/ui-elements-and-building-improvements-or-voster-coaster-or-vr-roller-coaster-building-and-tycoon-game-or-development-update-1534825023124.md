---
path: "/ui-elements-and-building-improvements-or-voster-coaster-or-vr-roller-coaster-building-and-tycoon-game-or-development-update-1534825023124"
date: "2018-08-21"
title: "UI Elements and Building Improvements | Voster Coaster | VR Roller Coaster Building and Tycoon Game | Development Update"
image: "https://cdn.steemitimages.com/DQmeSpy1iRSfZRaVgdtsHRfRF5GYY4nBcHpxMRRxGJecrpR/radial%20menu%202.gif"
---

(Sorry, my computer cannot handle recording while running in VR well)

![radial menu 2.gif](https://cdn.steemitimages.com/DQmeSpy1iRSfZRaVgdtsHRfRF5GYY4nBcHpxMRRxGJecrpR/radial%20menu%202.gif)

#### Repository
https://github.com/ajayyy/CunctansSquare

# Radial UI

![radial menu 4.gif](https://cdn.steemitimages.com/DQmaNgf1x4hJVyqNGWuqtwecWt7xrr88uhWjzEBgSYmzcQw/radial%20menu%204.gif)

I created a radial menu,

To select objects, you put your finger on the trackpad and slide around. Depending on how close you are to an option, the option will expand.

I also made it so that the menus can be easily generated for future use.

https://github.com/ajayyy/VosterCoaster/pull/17/files#diff-697c75de88b9a4154bf85fa30d1a0d19
https://github.com/ajayyy/VosterCoaster/pull/17/files#diff-bbd14ff151f2f7f75a517bf65cfe5df1

# Floating Windows

![floating window.PNG](https://cdn.steemitimages.com/DQmVBw6cuyeHATaKzQutmVU6ViafBMgW2w3UMnmM7gX5bk8/floating%20window.PNG)

I wasn't able to get a recording of the floating windows, the recording was 1 frame per second.

There needs to be some way to change a large amount of options. To make this possible, I made floating windows. When you drag on a part of the window that is not a button, then the window will move, otherwise the button will be pressed.

I also added separate images for hovering a button.

Main files:
https://github.com/ajayyy/VosterCoaster/pull/17/files#diff-a23ba8873925244e5a1301ad6d9cf68d
https://github.com/ajayyy/VosterCoaster/pull/17/files#diff-ed5979ecb002b25add9254d85a4ca478

# Track Building Improvements

The track was being offset compared to the actual controller position. This was very bad because it made it so that completing a roller coaster automatically does not work perfectly. This was able to be fixed by offsetting the controller's position.

```C#
Vector3 targetPositonOffset = new Vector3(0, 0, trackWidth / 2);
             
targetPosition += targetPositonOffset;
```

# Fixed Physics Issues

There was an issue where an uphill track was thought to be a downhill track if it was in the opposite direction.

This was caused by the incline using the y axis rotation when that was not necessary.

```c#
//necessary to get accurate inclines from inclines after turns
inclineAngleOfTrack -= eulerAnglesOfTrack.y;
```

# Pull Request
https://github.com/ajayyy/VosterCoaster/pull/17

#### GitHub Account
https://github.com/ajayyy