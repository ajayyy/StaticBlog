---
path: "/scheduling-system-or-android-development-1536956863425"
date: "2018-09-14"
title: "Scheduling System | Android Development"
image: "./images/36_caption_Screenshot_Lake_Effect_Scouting_App_20180914-162415.png"
tags: '["utopian-io","development","gamedev","programming","gaming"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp
# What is this
This is an app made for a FIRST robotics team.

One of the most important strategic parts of the competition is scouting. Scouting is recording data about other robots to analyse and see what robots are good at what and bad at what.

This is an app to do scouting. Recording data on paper and then putting it in a database is convoluted and wasteful, so we built an app to replace this system. 6 people use the app independently on Android devices and record data about one robot each per game. A server app can then pull data from all the devices to combine it all in one.
# Technology Stack
The apps are built with Java and use bluetooth to communicate. The layouts are made in XML.
# What have I implemented
Now that all of the nessesary features of the app are implemented, I am implementing a system to organise and schedule when people should switch on and off scouting to prevent chaos and prevent someone needing to do it manually.

![](./images/Screenshot_Lake_Effect_Scouting_App_20180914-162415.png)
# Server
On the server, I have created a UI for adding a bunch of active devices to a list to be able to pull them all in one button pressed.

I implemented a user UI to add and remove a list of users.

This list of users will be used to send to the client devices so they know what users are scheduled to scout when.

![](./images/Screenshot_ScoutingServerApp_20180908-230102.png)
![](./images/Screenshot_ScoutingServerApp_20180914-162347.png)
# Client
On the client, you now just have to select a match number, the robot number and team (alliance) it is on is dicided based on the schedule.
# Future
The schedule will be decided by the server, and sent over to the client. The client will know when to switch off instead of scouting as well, instead of just knowing a schedule of what robot number to scout (watch) per match number.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/132
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/16

#### GitHub Account
https://github.com/ajayyy