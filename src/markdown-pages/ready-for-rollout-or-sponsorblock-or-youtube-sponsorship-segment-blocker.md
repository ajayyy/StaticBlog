---
path: "/ready-for-rollout-or-sponsorblock-or-youtube-sponsorship-segment-blocker"
date: "2019-07-22"
title: "Ready for Rollout | SponsorBlock | YouTube Sponsorship Segment Blocker"
image: "./images/4_caption_KbpbivRJ-mutliple20notices.gif"
tags: '["utopian-io","development","palnet","stem","sponsorblock"]'
---

#### Repository
https://github.com/ajayyy/SponsorBlock
https://github.com/ajayyy/SponsorBlockServer

# SponsorBlock

>SponsorBlock is an extension that skips over sponsored segments of YouTube videos. SponsorBlock is a crowdsourced browser extension that let's anyone submit the start and end time's of sponsored segments of YouTube videos. Once one person submits this information, everyone else with this extension will skip right over the sponsored segment.
>
>In summary, it's a crowd-sourced adblock for sponsored sections of YouTube videos.

# Client Side

- Made it possible for multiple notices to appear, added an animation for it.

![mutliple notices.gif](./images/KbpbivRJ-mutliple20notices.gif)

- Added button to popup to allow you to vote from the popup.

![image.png](./images/pKwBlmYP-image.png)

- Added messages to indicate the status of different things, such as errors or that it's loading

- Added submit button on the video player.

![submit animation.gif](./images/rymnMa7n-submit20animation.gif)

- Made it keep checking for submitted sponsor times every 10 seconds on recent videos.

This should help a lot for when videos are just published, so even if you are one of the first to watch a video, you might still get some sponsors skipped by people having submitted info by the time you reach near the end of the video.

This uses the API provided by invidious that gives out the date a video was published in seconds. This number can then be checked to see if it is less than 3 days old.

- Switched it from using local storage to synced storage.

Now, you should be treated as the same user when switching devices.

- Added small notice of how many submissions this user has made.

This should help encourage people to submit info, as they can see exactly how much they have helped.

# Server-side

- Preventing voting twice except for changing a vote

This makes it so a user can vote on something they have already voted on if they are going to change their vote. They can change their upvote to a downvote.

- Made it order the sponsor times by start time.

This looks so much better in the UI for reporting times, as it shows it in chronological order.

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/pKwBlmYP-image.png)

- Added rate limit per day per IP

This should prevent spam from one IP. Maybe it can be changed to an hourly limit/

- Made it run the hash function 5000 times to ensure no one will brute force the IPs.

The longer it takes to run a hash function, the harder it is to brute force. Since the database is completely public, any sensitive information stored, such as IP addresses, needs to be saved in a way cannot be retrieved by anyone. IPs must be saved to prevent spam, but the actual IP isn't needed, just a hash to compare against.

```javascript
//hash the ip so no one can get it from the database
let hashedIP = ip + globalSalt;
//hash it 5000 times, this makes it very hard to brute force
for (let i = 0; i < 5000; i++) {
    let hashCreator = crypto.createHash('sha512');
    hashedIP = hashCreator.update(hashedIP).digest('hex');
}
```

# Next steps

I am now working on a port of this extension to Firefox. Once this is done, the extension will be available on both stores and be officially released.


#### Pull Requests
https://github.com/ajayyy/SponsorBlock/pull/3
https://github.com/ajayyy/SponsorBlockServer/pull/4

#### GitHub Account
https://github.com/ajayyy