---
path: "/categories-sponsorblock"
date: "2020-06-14"
title: "Categories - SponsorBlock"
image: "/images/categories-sponsorblock-list.png"
tags: '["development","programming","sponsorblock"]'
---

> [SponsorBlock](https://sponsor.ajay.app) is an open-source crowdsourced browser extension to skip sponsor segments in YouTube videos. Users submit when a sponsor happens from the extension, and the extension automatically skips sponsors it knows about. SponsorBlock also has a public database and API for others to integrate and use.

# Categories

The newest update added the categories. Categories allow you to submit a segment to skip that is not a sponsor. This allows skipping other things like intros, outros, and non-sponsor promotion. Most importantly, this ensures that people are less likely to accidentally submit non-sponsored content as a sponsor, just because they want to skip it anyway.

![image.png](/images/categories-sponsorblock-list.png)

This feature has been requested since the beginning, but I was pretty hesitant to add it. In the end, I decided to add only categories that I felt were objective enough to prevent disputes on if something is correct or not correct. I decided to go with a category system instead of a tag system for similar reasons.

### Switch to react

Previously, all injected elements were created with the `document.createElement()` APIs. This ended up being very hard to maintain once it got large, so I decided to redo all of them in react.

![image.png](/images/categories-sponsorblock-notice.png)

I decided to take this previously created skip notice and use it as the base for all the new UI. To make submitting categories simple, I decided to move them into an edit panel that appears after clicking submit.

![image.png](/images/categories-sponsorblock-submit.png)

Now, the UI is a lot more consistent. I plan to move more and more into in-video UI like this.

### Stats so far

It's been a week now since stable rollout of categories. Here are the number of submissions for each category in the past week.

![image.png](/images/categories-sponsorblock-stats.png)


### Voting

I have decided to revert treating skipping without clicking the report button as an upvote. It was a neat idea to try, but it made the data close to useless. Many people don't bother interacting and clicking the report button if there is an issue, so I feel it is better to have an explicit vote option.

I have also added a new "category vote" option. For now, only one person needs to make this vote for the change to occur, but this may change in the future. This will help fix the self-promotion segments that have been mistakenly submitted as sponsor before categories.

![image.png](/images/categories-sponsorblock-vote.png)

# Precise Skipping

This was added back in February, but I haven't said anything about it yet.

Previously, skipping was using a very naive approach. It listened to the [`video.ondurationchange`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/durationchange_event) event and checking if it was currently in a segment. While this works, it is limited by the speed of that event call, which is ~250 ms on most browsers.

Now, the extension uses `setTimeout` to schedule skips in the future. When the skip is scheduled to happen, it checks again if it is the correct time, and triggers another `setTimeout` if needed. It also listens on all of the video change events such as playing, pausing, changing speed, etc. to reset the schedule.

This ended up working very well and made skips happen with a precision of ~5 ms - 15 ms. It should also use less processing power.

# Cool Other Projects

Along with [ports](https://github.com/ajayyy/SponsorBlock/wiki/Unofficial-Ports) people have made with the API and database, there is another cool project that is being worked on.

A [neural network](https://github.com/andrewzlee/NeuralBlock) has been trained on the SponsorBlock database and it works suprisingly well. The timings are not precise enough to replace humans yet, but the plan is to maybe use it for moderation in the future. It uses the captions to determine the timings. The best part, is that it is made completely by someone else and not me. It has made me very happy about my decision to make the database public. It is not being used yet.