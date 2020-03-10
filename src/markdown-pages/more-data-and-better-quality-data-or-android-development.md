---
path: "/more-data-and-better-quality-data-or-android-development"
date: "2019-02-19"
title: "More Data and Better Quality Data | Android Development"
image: "https://files.steempeak.com/file/steempeak/ajayyy/57ZR0uTJ-image.png"
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/

### What is this
This is a scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together

### Created a page to record data for the "Autonomous Period"

Previously, data for this was just recorded with boxes, but this time I decided to make the app record data with the fancy visual page.

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/57ZR0uTJ-image.png)

This allows us to know exactly what happened in the autonomous period. The user selectes the location the robot is, and what action just happened. This then allows us to make path charts of all the places the robot went thoughout the whole match, and allow us to know the success rate of the robot.

This year's game has two game pieces, so the left deals with one game piece, the hatch, and the right deals with the second game piece, the cargo.

This data is saved separately from the data from the tele-operated period. This is to help determine their strength at driving without humans watching.

### Speed ups

After using this app at our competitions, we found some issues that were slowing down scouts from entering data, making the time the data was collected not as accurate (because the time events happen is recorded).

I removed the confirmation dialog when the user triggers events, which was originally there to make sure the user doesn't press something by accident. This slowed down the user too much, and was not worth the trouble.

Also, the match number now auto increments, making the user not have to specify what match they are scouting, it just knows.

This will increase the quality of the data like crazy, as the user spends less time looking at the screen and more time watching the match.

# Added some more decoding

In the last update, I made all the data encoded into base 64 to better keep the data in a format without special characters. This also added the benefit of making the app know if data is completely broken or not, since it will not decode properly.

Now, more areas properly decode this encoded data.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/207
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/208
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/217
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/200
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/27
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/28

#### GitHub Account
https://github.com/ajayyy