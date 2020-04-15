---
path: "/scheduling-creation-or-android-development-1538942995465"
date: "2018-10-07"
title: "Scheduling Creation | Android Development"
image: "/images/32_caption_image.png"
tags: '["utopian-io","development","programming","android","frc"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp

# What is this
> This is an app made for a FIRST robotics team.
> 
>
> One of the most important strategic parts of the competition is scouting. Scouting is recording data about other robots to analyse and see what robots are good at what and bad at what.
> 
>
> This is an app to do scouting. Recording data on paper and then putting it in a database is convoluted and wasteful, so we built an app to replace this system. 6 people use the app independently on Android > devices and record data about one robot each per game. A server app can then pull data from all the devices to combine it all in one.

### New Features

* Save device name in shared preferences
* Fixed issue with names not deselecting
	* If they are removed from the list while selected and were added in a previous runtime

When a name was removed while selected, it was removed from the allNames list but not the 
selectedNames list.

* Made a calculatable schedule for each user

For scouting, there are 6 robots per match that need to be watched. This function needs to figure out who to switch on and off when, and which robot each person is watching (scouting). This does this by simulating someone swapping names every match like you would do on paper.

It creates a list of the on and off scouts
```java
//scouts currently scouting or not
Scout[] scoutsOn = new Scout[6];
ArrayList<Scout> scoutsOff = new ArrayList<>();
```

It then finds who needs to swap with who if there is someone to swap with.
```java
//calculate the schedule for this match
//find scouts to switch on (the scouts that have been off >= targetTimeOff)
ArrayList<Scout> scoutsToSwitchOn = new ArrayList<>();
for (int i = 0; i < scoutsOff.size(); i++) {
	 if (matchNum - scoutsOff.get(i).timeOff >= targetTimeOff && scoutsToSwitchOn.size() < 6) {
			 scoutsToSwitchOn.add(scoutsOff.get(i));
	 }
}

//find scouts to switch off (scouts with the highest time)
ArrayList<Scout> scoutsToSwitchOff = new ArrayList<>();
//sort by time on
for (int i = 0; i < scoutsOn.length; i++) {
	 //the index to add this scout when sorted
	 int indexToAdd = scoutsToSwitchOff.size();
	 for (int s = 0; s < scoutsToSwitchOff.size(); s++) {
			 if (matchNum - scoutsOn[i].timeOn > matchNum - scoutsToSwitchOff.get(s).timeOn) {
					 indexToAdd = s;
					 break;
			 }
	 }

	 //add at index
	 scoutsToSwitchOff.add(indexToAdd, scoutsOn[i]);
}
```

The second for loop sorts the scouts on by how long they have been on. This is then used to switch the people ready to switch back on with the people who have been working the longest.

Using that information, it swaps the scouts.

```java
//swap scouts on with scouts off
for (int i = 0; i < scoutsToSwitchOn.size(); i++) {
	 //scout switching on and off
	 Scout switchingOn = scoutsToSwitchOn.get(i);
	 Scout switchingOff = scoutsToSwitchOff.get(i);

	 scoutsOn[getScout(switchingOff.id, scoutsOn)] = switchingOn;

	 scoutsOff.remove(switchingOn);
	 scoutsOff.add(switchingOff);

	 //update timeOff and timeOn
	 switchingOn.timeOn = matchNum;
	 switchingOff.timeOff = matchNum;
}
```

This is then repeated for all the matches


* Added scroll view to name selector
* Prevented crash when less than 6 scouts were selected
It is not possible to make a schedule with less than 6 scouts, a warning must be given to the user.
* Removed button to set minimum version number
I made the minimum version number auto update when someone types.
This is used to make sure the bluetooth clients this app connects to are up to date to not break the system.
* Added ability to change target time off in the app
* Now can add a scout starting at a match number without disrupting the currently running schedule.
- Fixed checkboxes getting reversed
- Made it save and load the match number the selected names were selected at
- Added support for scouts that join and leave the selected list multiple times throughout the day
- Made it so that you can disable and enable scouts continuously over the course of the day
    - It saves the match numbers the scout starts and stops
    - It will tell you if you disable a scout when no one can replace them

This is a very important feature. If someone needs to leave and do something else, you can type what match they are leaving or starting at to make that user only matter during certain matches.

![](./images/image.png)
(The names in the image above are customisable, I put them as numbers for testing purposes)

To do this, a history of every time a user was selected and deselected is required to be kept.

* saves history of disabling and enabling scouts in shared preferences
* Fixed issue where scout sometimes wasn't taken off
* Fixed parts of scheduling clearing eachother
* Make the switching on and off inclusive
	* If you switch on at match 25, you will be on at match 25.
	* If you switch off at match 30, you will be off at match 30. 
* Made checkboxes set to their last checked position

This was required to make sure that when you returned, it looks exactly like when you closed the app. Before, if the scout was EVER checked off, it would start checked next time you opened the app.

* Made time off be changed based on match number
    * You can change the time off starting at match 5 for example, and after that point scouts will get 3 matches off instead of 2.

  ![](./images/image.png)

* Renamed mislabeled variables (Changed TextView to EditText)

#### Pull Request
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/17

#### GitHub Account
https://github.com/ajayyy