---
path: "/more-improvements-from-feedback-or-android-development"
date: "2019-04-07"
title: "More Improvements From Feedback | Android Development"
image: "./images/18_caption_Kfvwvueh-image.png"
tags: '["utopian-io","development","programming","opensource","steem"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/

> ### What is this
> This is a scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together. Scouting is nessesary to be able to change your team's strategy and know what teams to pick to join your alliance.
 >### About this year's game
> In this years game, teams must score "cargo" into holes in rockets. If the cargo is put in without a hatch panel, then it will fall out. The hatch panels must be fastened on to the rockets and cargo ship to prevent the cargo from falling out.
> ![image.png](https://files.steempeak.com/file/steempeak/ajayyy/Kfvwvueh-image.png)

# Made threads close properly

Now the bluetooth threads nicely close when the app is closed. Before, they only shut down when the app was removed from the multitasking menu.

# Added Scroll View to schedule viewer

The schedule viewer on the main page added in the last update can now scroll. This makes it possible to see more info on the schedule than before.

# A more general statistic

Before, there was no general statistic about what happened to each game object (cargo and hatch) in total, only in each location. The app now exports a general statistic, which is more useful for quick analysis

# Allowed some ratings to not be done

Some robots never use parts of their robot, but before the users were required to rate these places, now there is a did not intake button, and this button let's the rating not be filled (and greys it out)

![image.png](./images/defd2UKG-image.png)

# Forced Instructions

Some users were submitting empty data when a robot no-showed to their match. This is not what we want, we want no data to be submitted for that event. Now, there is a checkbox to specify if they no-showed.

The checkbox doesn't actually do anything, but instead informs the user that they shouldn't be submitting the data. I think this is a very cool way to implement instructions without writing paragraphs onto the app's pages.

# View schedule anywhere

The schedule viewer now allows you to view it in the main app, instead of just at the beginning. This is a feature that was requested a lot.

# Option panel on the alert

![image.png](./images/5HqKTJMJ-image.png)

This alert to select a robot is presented at the beginning before scouting. Due to it being an `AlertDialog` in Android, it was very hard to do anything while in this view, but now I added an options menu that can be displayed in this alert. This allows the user to return back to the menu without restarting the app and view the schedule straight from there.

# Removed match number cap

Now that there is automated schedule, this is not needed. Originally, the match number was capped at 100, to prevent people from accidentally typing in robot numbers in this field (and robot numbers are typically 4 digits). This was a good workaround for the time, but now the robot numbers are automatically assigned, making it a lot easier.

# Made scheduling more fair

When creating a schedule for when users have shifts on and off scouting (watching and recording data on the robots in the competition), the app used to just put the person off that has been on for the longest. However, there are usually multiple people who have been on for the same amount of time, making some people always just end up at the bottom since they are sorted by alphabetical order (If people have the same time on, they aren't reshuffled around).

Now, the app takes into account the amount of times each user has taken an extra shift (not switched off when some other people have). This number is used as a second sorting number, to sort the users with the same time on.

This causes the extra shifts to be distributed evenly among all people.

```java
for (int s = 0; s < scoutsToSwitchOff.size(); s++) {
     if (matchNum - scoutsOn[i].timeOn > matchNum - scoutsToSwitchOff.get(s).timeOn) {                           
         //if they have been on more matches, or have been on the same amount
         //of matches but have taken more double shifts, add them to the sorted list
         //at this in front of the other scout
         if (matchNum - scoutsOn[i].timeOn > matchNum - scoutsToSwitchOff.get(s).timeOn
                 || (matchNum - scoutsOn[i].timeOn == matchNum - scoutsToSwitchOff.get(s).timeOn
                     && scoutsOn[i].extraShifts > scoutsToSwitchOff.get(s).extraShifts)) {
             indexToAdd = s;
             break;
         }                  
     }         
 }
```

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/271
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/283
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/31

#### GitHub Account
https://github.com/ajayyy