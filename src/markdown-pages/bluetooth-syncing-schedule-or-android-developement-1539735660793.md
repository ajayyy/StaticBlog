---
path: "/bluetooth-syncing-schedule-or-android-developement-1539735660793"
date: "2018-10-17"
title: "Bluetooth Syncing Schedule | Android Developement"
image: "./images/30_caption_image.png"
tags: '["utopian-io","development","programming","android","bluetooth"]'
---

#### Repository
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp
# Server
![](./images/image.png)
(Lists all devices and the last time they were pulled at)

- Added ability to undo recent actions
	- Merged allNames and scoutNames, and made them use Scout lists instead of String lists.

To do this, an actions class was created. The actions class stores what action happened, and to what object. This data is then used to do the opposite and undo the action.

- Added cap of 25 to past actions
- Changed size of text views to be based off of ems instead of width
- Fixed "You must select at least 6 scouts" not being triggered when it should be because of selectedNames rename

To make sure a scout is "active" during that match, it sees if they are off at that match or not.

- Now sends schedule to client before pulling
- Converts schedule to string and sends it to client
- Sends name instead of id
- Fixed schedule loading
	- Was loading the same number every time by loading at [i] instead of [s]
- Adds end characters to the end of all data
- Makes sure full data was sent
- Cuts out END from labels as well
- Fix it skipping the first line

# Client
- Made it load schedule based on data recieved
- Uses name sent from server in the schedule
- Refractor and code cleanup
- removed unused commented out code
- Combines split packets
- Sends END at the end of data
- Sends recieved once the message is sent
- Fix END not being added to data. Fixed split packets not combining properly

`data` is a variable that is accumulative of all this data. This is because bluetooth often cuts packets short. To solve this, the application waits until it reaches an end character, and adds up all the data up to that point.

`message = data + currentSentData
data += message`

changed to:
`data = message`

- Made the userID change when you changed the spinner
- Made userIDSpinner update when a new schedule is sent.
	- Also saves the position.
- Notifies when the scout is off that match.
	- Tells them what match to come back at
- Previous toast is closed if a new toast error needs to be - shown

This is very useful, otherwise Android will lag and show old Toasts until all of them are completely done being shown.

- Removed default schedule
- Disabled "this robot is not at this event" popup as it has been deprecated

This has not been replaced by the new scheduling system.

#### Pull Requests
https://github.com/LakeEffectRobotics/LakeEffectScoutingApp/pull/141
https://github.com/LakeEffectRobotics/LakeEffectScoutingServerApp/pull/18

#### GitHub Account
https://github.com/ajayyy