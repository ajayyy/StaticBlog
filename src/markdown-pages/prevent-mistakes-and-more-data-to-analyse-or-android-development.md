---
path: "/prevent-mistakes-and-more-data-to-analyse-or-android-development"
date: "2019-02-24"
title: "Prevent Mistakes And More Data To Analyse | Android Development"
image: "./images/22_caption_Kfvwvueh-image.png"
tags: '["utopian-io","development","programming","opensource","android"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp

### What is this
This is a scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together. Scouting is nessesary to be able to change your team's strategy and know what teams to pick to join your alliance.

### About this year's game

In this years game, teams must score "cargo" into holes in rockets. If the cargo is put in without a hatch panel, then it will fall out. The hatch panels must be fastened on to the rockets and cargo ship to prevent the cargo from falling out.

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/Kfvwvueh-image.png)

### Warning to move pages

In the last update, I made it so that there were two pages for scouting, one for the autonomous period, also called the sandstorm period this year, and one for the tele-op period. To prevent people from accidentally staying on the auto page the whole time and never switching, if it has been 15 seconds since the first tap on the page, then it will warn the user to switch pages.

This should prevent many mistakes due to forgetfulness.

![image.png](./images/xHsa0p97-image.png)

### Close and far (visible and invisible)

In this game, drivers control the robots for the tele-op period. This means that they can do better or worse due to visibility. Now, the app exports data to tell how well the robot can score on the close side and the far side, to see if the robot has a proper automated vision system implemented.

This will be very important at determining if we should alliance with certain teams.

### Side cargo ship

Just like with the close and far rocket, the front and side cargo ship have different levels of visibility. Now, the app exports the difference.

### Auto data encoding

Now that there is data for the normal check boxes, the autonomous period and the teleop period, as system had to be implemented if one of these areas had no data to send. This is done by sending a "no data" message to the server so that the server ignores this section in the query. Because of the new base 64 encoding, this "no data" message has to be encoded as well.

### Success and Fail

The success and fail events were reversed in the code since they were showing the wrong one to the user. This made the database think that there was a success when it actually was a failure.

### Automated scheduling improvements

The time-off setting now properly lets the person running the system to set the amount of time they want each person to have off on their break. This allows this system to work with more and more people, as the time off time can be increased to lower the amount of shifts required to be made.

A shift system is used to give each person a break from scouting every little while, as 6 people must be scouting at a time at the competition.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/225
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/235
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/29

#### GitHub Account
https://github.com/ajayyy