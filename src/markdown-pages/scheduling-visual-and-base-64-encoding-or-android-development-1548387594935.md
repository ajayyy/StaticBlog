---
path: "/scheduling-visual-and-base-64-encoding-or-android-development-1548387594935"
date: "2019-01-25"
title: "Scheduling Visual and Base 64 encoding | Android Development"
image: "./images/24_caption_QmZG1pDBhTMetMotqRJxtWr9VFNovtesZUDvTNu6sxKjKb"
tags: '["utopian-io","development","programming","android","oepnsource"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp

### What is this

This is a scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together

### Scheduling Visualizer

I made a visualizer to show the who is scouting which robot and when. This a feature I added a few months ago that assigned a schedule to when people are scouting to give people breaks and create a shift system. Only 6 people need to be scouting at a time. 

![image.png](./images/QmZG1pDBhTMetMotqRJxtWr9VFNovtesZUDvTNu6sxKjKb)

### Base 64 encoding

This is a very important update. The app now converts everything sent over bluetooth to base 64 before sending. This is done to compress the data a little and make everything use as little characters as possible. This prevents any code "injection" from the user which was happening accidentally before (users putting colons or quotation marks messing with the parsers).

This also makes data loss a lot harder, as the base 64 decoder knows when data is invalid when it is missing part of the message.

This was done using Java's built in function `Base64.encode()` which converts the `String` or `byte[]` to a `byte[]` with an encoded message. This then is sent over bluetooth and decoded on that side.

![image.png](./images/QmdwbVhp2dzYMbMDoazqgdyzvKesVomefmmJm29p6QtdrP)

### Fixed end splitter issues

There were issues where it was not checking for the end splitter in the received data. The end splitter is used in case the data gets cut off by bluetooth and sent in mutliple packets (which does happen often with large amounts of data being transferred). This should hopefully fix issues with large data transfers.

### Support more scouters

The scheduling system now works with more than 12 people, that is 2 shifts. Before, when there were 2 shifts, it would sometimes shift people on for only one match, then shift them immediately off. This does not make any sense, so instead it now gives the extra person extra time off.

#### Commits
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/23
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/22
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/186
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/185
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/176

#### GitHub Account
https://github.com/ajayyy