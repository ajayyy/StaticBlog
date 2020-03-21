---
path: "/competition-time"
date: "2019-03-16"
title: "Competition Time"
image: "./images/21_caption_Kfvwvueh-image.png"
tags: '["utopian-io","development","programming","android","opensource"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp

> ### What is this
> This is a scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together. Scouting is nessesary to be able to change your team's strategy and know what teams to pick to join your alliance.
 >### About this year's game
> In this years game, teams must score "cargo" into holes in rockets. If the cargo is put in without a hatch panel, then it will fall out. The hatch panels must be fastened on to the rockets and cargo ship to prevent the cargo from falling out.
> ![image.png](https://files.steempeak.com/file/steempeak/ajayyy/Kfvwvueh-image.png)

# Verification

Before, the app would only tell a user they forgot something when there was a default option available that was not possible to be true. This would not let the user submit until they set it to a valid option.

Now, the app also does verification. For example, robots are allowed to start with a game piece, either a cargo or a hatch. They are allowed to start with nothing though, it just does not happen that often. If the user selects that the robot started with nothing, the app now double checks the user meant what they wrote by showing a dialog box.

# Fixed crash on tablets

The app was crashing on tablets due to the tablet layout not having variables named correctly. This has been fixed.

# Editing scout name

The server now allows scout names to be edited in the user list. This makes it much easier to swap people out for new people, instead of adding a whole new user and deleting the old one.

# Buttons to move a name up and down

The name order affects which shift each scout is on, the order is now easily changeable with an up and down button on each name.

# Constant Bluetooth listening

This is a very important feature that probably should have been implemented far before now.

Before the user gets to the scouting page, they are on a start page. Now, the bluetooth listeners (used to sync data) start up on this page as well, making it possible to pull data from this page instead of requiring users to open up the full scouting app.

This will simplify the data pulling a lot.

# Schedule viewer for the user

The user can now see their schedule in the start screen. This makes it much easier to plan around when they must be scouting versus not scouting.

This works by getting the time off and time on of each user and showing when that happens. This makes the user know when they can leave and take a break from their work.

This was accomplished by caching some of the data from the actual app, so that it can be ready to be sent. This is because some of the data (specifically the labels), are dynamically generated in the app by going through all the open views and finding what buttons, checkboxes, etc. are there.

This is cached on the first app open for each version of the app. A check is put in place to make sure not to use a cache from a different version of the app.

### Last update time

Above the schedule, it also shows the last update time to make sure the user knows if the schedule might be out of date (as they can't be synced constantly since it is synced over bluetooth only when the server device is nearby).

![image.png](./images/rJc4obkc-image.png)

# Questions

Many people were confused when the list of names was empty and just said "choose one", so it now informs the user to ask the person running the server to send them a copy of the schedule and names list. This should make people less confused about the situation and ask less questions. This can be seen in the screenshot above.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/30
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/238
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/262

#### GitHub Account
https://github.com/ajayyy