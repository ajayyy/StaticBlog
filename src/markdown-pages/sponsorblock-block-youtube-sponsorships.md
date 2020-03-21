---
path: "/sponsorblock-block-youtube-sponsorships"
date: "2019-07-29"
title: "SponsorBlock - Block YouTube Sponsorships"
image: "./images/3_caption_QvIzibaj-sponsorEditing.gif"
tags: '["utopian-io","development","programming","stem","palnet","sponsorblock"]'
---

#### Repository
https://github.com/ajayyy/SponsorBlock
https://github.com/ajayyy/SponsorBlockServer

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/gBb8T4DG-image.png)

# SponsorBlock

It's out! Download it on the Chrome Webstore or the Firefox addons store! Over 400 submissions so far!

Chrome: https://chrome.google.com/webstore/detail/mnjggcdmjocbbbhaepdhchncahnbgone/
Firefox: https://addons.mozilla.org/addon/sponsorblock/
Discord: https://discord.gg/QnmVMpU
Website: https://sponsor.ajay.app/

SponsorBlock is a crowdsourced browser extension to block sponsor segments of YouTube videos. Users submit when sponsor happen to the extension, and the extension automatically skips sponsors it knows about. It also features an upvote/downvote system with a weighted random based distribution algorithm.

# Lots of changes

### Now works on Firefox

This luckily wasn't difficult at all since Firefox supports Chrome extensions natively, I just had to change a few things due to the difference in how the API's are handled.

### View count

The amount of views each sponsor gets (well, the amount of skips) is now recorded. This is nice because it gives users who submit sponsors direct feedback on how they are improving other people's viewing experience.

![image.png](./images/Wp8goTtJ-image.png)

This can be disabled if you don't want this.

### More checks

More ways to prevent someone from destroying the viewing experience such as preventing sponsors from being placed right next to eachother.

### Errors

Errors now have custom messages to better inform you about what's wrong and help me debug.

### Hotkey

You can now use the semicolon button to indicate the start and end of sponsors and click the single quote button to submit. This should make it easier to submit.

### Sponsor time deleting

Individual sponsor times can now be deleted before submitting.

![deleting individual times.gif](./images/wOV7y40r-deleting20individual20times.gif)

### Sponsor time editing

You can now edit the sponsors before submitting. This was a very requested feature.

![sponsorEditing.gif](./images/QvIzibaj-sponsorEditing.gif)

### New way to access the popup.

It seemed like a lot of people were not realising that there were more settings in the popup menu, so there is now another way to access the popup. Click the info button on the video player to open the popup the page you are watching the video on.

![new popup.gif](./images/M5DpUeQh-new20popup.gif)

### Lots of other fixes

It should never use sponsors from the wrong video anymore and the on video buttons now update properly when switching videos. Before, they would maintain their state, which wouldn't work since the code always assumes it starts at the default position.

The YouTube page never reloads, and instead just updates the page itself (like a PWA), so the code can't rely on everything being reset when a video change occurs.

#### Git diff
Client:
https://github.com/ajayyy/SponsorBlock/compare/4c380aa1bf8a35d7be596927d187e5a55c863707...master (thanks OfficialNoob for the pull requests!)
https://github.com/ajayyy/SponsorBlockServer/compare/cd36e2b64be8d209f62c6e102a424da4c5bc97d0...master

#### GitHub Account
https://github.com/ajayyy