---
path: "/video-player-controls-and-visual-overhaul-or-youtube-sponsorblocker"
date: "2019-07-13"
title: "Video Player Controls and Visual Overhaul | YouTube SponsorBlocker"
image: "./images/7_caption_37GSA0wm-image.png"
tags: '["utopian-io","development","programming","palnet","sponsorblock"]'
---

#### Repository
https://github.com/ajayyy/SponsorBlocker
https://github.com/ajayyy/SponsorBlockServer

![image.png](./images/37GSA0wm-image.png)

# Client

- Changed the way it detects when a page is not YouTube and prevented lastError.

Before, it attempted to communicate with the tab right when the popup was open. However, if the tab was not a youtube.com tab, it would not have the content script added to receive the communications. This was fixed by only sending a message when the popup knows the tab is ready.

- Made it not load the extension on the YouTube homepage and channel pages.

These pages don't have videos that need sponsors removed.

- Added nice buttons to the popup

- Made the sponsorships starts button update with the clear times button.

When you hit the "Sponsorship Starts Now" button, it transforms into "Sponsorship Ends Now", this should update whenever a change in what has been recorded has happened.

- Made the button's nice on the notice and added a notice about the timeout.

![image.png](./images/qEfElyR4-image.png)

- Made it generate and submit a userID defining this user.

It uses a uuid generator and generates a uuid only if needed.

```javascript
function getUserID(callback) {
  if (userID != null) {
    callback(userID);
  }

  //if it is not cached yet, grab it from storage
  chrome.storage.local.get(["userID"], function(result) {
    let userIDStorage = result.userID;
    if (userIDStorage != undefined) {
      userID = userIDStorage;
      callback(userID);
    } else {
      //generate a userID
      userID = generateUUID();
      
      //save this UUID
      chrome.storage.local.set({"userID": userID});

      callback(userID);
    }
  });
}
```


- Made time have a zero in front when it is less than 10 seconds.

- Made submit times not appear when no end time was specified.

This makes the "Submit Sponsor Times" button only be visible when something can be submitted to the database.

- Added button on YouTube player and new icons to support that

![image.png](./images/5khiydEb-image.png)

By being a white icon, it does not stand out when in the player and looks normal.

- Added option to hide the video player controls button in the popup.

- Made options a hidden section in the popup.

![hidden options.gif](./images/Rt9rjED1-hidden20options.gif)

# Server

- Added support for receiving a userID

- Made the server save a hash of their ip with the data.

- Added global salt for hashed ips

- Added duplication check.

- Made it save the time the data was submitted (in unix time)

- Made error codes returned by the sever intuitive

It now reports correct codes such as error code 429 for a ratelimit.

- Made it so that each user can only submit 4 sponsorship segments per video

This should help prevent spammers and trolls.

![image.png](./images/10O2qZxV-image.png)

#### Pull Requests
https://github.com/ajayyy/SponsorBlocker/pull/1
https://github.com/ajayyy/SponsorBlockServer/pull/1

#### GitHub Account
https://github.com/ajayyy