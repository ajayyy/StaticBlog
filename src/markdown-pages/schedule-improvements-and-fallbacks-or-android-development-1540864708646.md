---
path: "/schedule-improvements-and-fallbacks-or-android-development-1540864708646"
date: "2018-10-30"
title: "Schedule Improvements and Fallbacks | Android Development"
image: "/images/29_caption_image.png"
tags: '["utopian-io","development","android","programming","apps"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp

# What is this
> This is an app made for a FIRST robotics team.
>
> One of the most important strategic parts of the competition is scouting. Scouting is recording data about other robots to analyse and see what robots are good at what and bad at what.
>
> This is an app to do scouting. Recording data on paper and then putting it in a database is convoluted and wasteful, so we built an app to replace this system. 6 people use the app independently on Android devices and record data about one robot each per game. A server app can then pull data from all the devices to combine it all in one. This act of recording data is called scouting, and is done by someone called a scout. Each set of data is for one match of the game.
> 

![](./images/image.png)
![](./images/Screenshot_Lake_Effect_Scouting_App_20180914-162415.png)

### New Features

- Made it save the schedule in the shared preferences
- Made it so that you can override the schedule if nessesary

- Removed print statement
- Removed useless commented out code
- Made it tell the user the next match off

Before, the user would not know when they were off until they typed in that number when they started scouting and were told that there was no robot to scout that match.

Now, it shows how many matches left until that person is off at the top of the screen at all times. This is calculated by going through the schedule and seeing when there are no robots to scout.

```java
int matchBack = -1;

//find next match number
for (int i = matchNumber - 1; i < schedules.get(userID).robots.size(); i++) {
	 if (schedules.get(userID).robots.get(i) == -1) {
			 matchBack = i + 1;
			 break;
	 }
}

return matchBack;
```

- Renamed "round" to matchNumber
- Updates main activity whe a new schedule is sent
- Allows you to use no scout name if overriding schedule

- Fixed crash when trying to change time until back on.  
	- Also, fixed functions checking how much longer until the scout is back on, or back off.
- Match number properly updates when typed in
- Added back UUID
- Changed end splitter from "END" to "{e}".
- 	Also set the end splitter to be a variable to easily change

Before the end splitter was just END, however this is not best. If the data actually contains the word "END" in it, the system could break and end abrubdtly. Now the end splitter is something that is escaped from the data and is easily changed.

The end splitter is a string put on the end of the data so that the server can make sure it recieved all the info.

- Removed deprecated gradle methods
- Made it so that once you override the schedule, the schedule is overriden until an app restart.

Overriding schedule is nessesary when testing the app and if the schedule breaks. Before, if you overrided the schedule once, you would have to do it again when scouting another match. Now, the schedule will stay overridden until the app is restarted.

- Prevented updating robot number if schedule is overridden.
- Added way to make a customisable scout name after overriding

Before, the scout name (the name of the person watching and recording data for this match) was just set to "No scout" if the schedule was overridden, now there is a way to set that.

### Server
- Added reset names button
	- Removes all users added at once with one button press.
- Switched to better contains method
Before it was using `string.contains()` which is just incorrect and only works if the classes are the same. (If you use new String(), it will not work even with the same string contents).

Instead, you must use a for loop and check if `string.equals()` as this checked the actual contents of the strings instead of the instance IDs.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/19
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/20
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/142
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/143
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/155
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/157


#### GitHub Account
https://github.com/ajayyy