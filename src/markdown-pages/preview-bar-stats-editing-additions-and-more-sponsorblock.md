---
path: "/preview-bar-stats-editing-additions-and-more-sponsorblock"
date: "2019-08-13"
title: "Preview Bar, Stats, Editing Additions And More - SponsorBlock"
image: "./images/2_caption_P7jmWDbc-image.png"
tags: '["utopian-io","development","programming","stem","pal","sponsorblock","marlians"]'
---

#### Repository
https://github.com/ajayyy/SponsorBlock
https://github.com/ajayyy/SponsorBlockServer

![image.png](./images/gBb8T4DG-image.png)

# SponsorBlock

So many users have joined since the last update. The amount of users who have submitted a sponsor is now over 400!

> SponsorBlock is a crowdsourced extension to block sponsor segments of YouTube videos. Users submit when sponsors happen to the extension, and the extension automatically skips sponsors it knows about. It also features an upvote/downvote system with a weighted random based distribution algorithm

### Client

##### New help page

There is now a help page to let people figure out how to use this extension when they install it!

https://sponsor.ajay.app/help/

##### Leaderboards!

You can now see who the top contributors of this extension are and choose a username to appear on the leaderboard.

https://sponsor.ajay.app/stats/

![image.png](./images/P7jmWDbc-image.png)

![](./images/usernames.gif)

##### New notice position

The notice is now a little smaller and moved to a better location for use in fullscreen. This notice is planned to be fully revamped in the near future.

##### Local submission counter fixes

The local submission counter now is better and only counts submissions if the server responded without an error message. This was causing some users to have inflated stats locally.

#### Channel whitelisting

You can now white list channels and see their sponsors. This doesn't work on 0 second sponsors to keep them loading as fast as possible, but it does work for later sponsors.

![](./images/whitelisting.gif)


##### More sponsor updated

The sponsors now update again if you have just uploaded sponsors and it will retry fetching in a few seconds if the server is down. The server can sometimes be down for 1 or 2 seconds between updates, so this will help a lot.

#### Edit panel additions

You can now not edit unfinished sponsors.

Button padding has been increased.

Added a preview button to go a few seconds before the sponsor and see how it looks.

![](./images/50ogSx3.gif)

Added a button to set the current time in an edit.

![](./images/current_time.gif)

#### Preview bar

You can now see when the sponsors will happen on the seek bar

![](./images/unknown.png)

#### Downvoting a sponsor will hide it for you

This will make submitting a new sponsor around that time much easier.

#### Pull Requests

Client:
https://github.com/ajayyy/SponsorBlock/pull/56
https://github.com/ajayyy/SponsorBlock/pull/59
https://github.com/ajayyy/SponsorBlock/pull/68
https://github.com/ajayyy/SponsorBlock/pull/70
https://github.com/ajayyy/SponsorBlock/pull/97
https://github.com/ajayyy/SponsorBlock/pull/99
https://github.com/ajayyy/SponsorBlock/pull/100
https://github.com/ajayyy/SponsorBlock/pull/104
https://github.com/ajayyy/SponsorBlock/pull/107
https://github.com/ajayyy/SponsorBlock/pull/109

Server:
https://github.com/ajayyy/SponsorBlockServer/pull/18
https://github.com/ajayyy/SponsorBlockServer/pull/17
https://github.com/ajayyy/SponsorBlockServer/pull/15
https://github.com/ajayyy/SponsorBlockServer/pull/14
https://github.com/ajayyy/SponsorBlockServer/pull/12

#### GitHub Account
https://github.com/ajayyy