---
path: "/sponserblocker-or-blocking-youtube-sponsorship-segments"
date: "2019-07-10"
title: "SponsorBlock | Blocking YouTube Sponsorship Segments"
image: "https://steemitimages.com/0x0/https://files.steempeak.com/file/steempeak/ajayyy/bFn6a9nb-image.png"
tags: '["utopian-io","development","programming","youtube","sponsorblock"]'
---

#### Repository

[https://github.com/ajayyy/SponsorBlock](https://github.com/ajayyy/SponsorBlock)
[https://github.com/ajayyy/SponsorBlockServer](https://github.com/ajayyy/SponsorBlockServer)

![image.png](https://steemitimages.com/0x0/https://files.steempeak.com/file/steempeak/ajayyy/bFn6a9nb-image.png)

# SponsorBlock

SponsorBlock is an extension that will skip over sponsored segments of YouTube videos. SponsorBlock is a crowdsourced browser extension that let's anyone submit the start and end time's of sponsored segments of YouTube videos. Once one person submits this information, everyone else with this extension will skip right over the sponsored segment.

In summary, it's a crowd-sourced adblock for sponsored sections of YouTube videos.

# Server

The backend server code is available here: [https://github.com/ajayyy/SponsorBlockServer](https://github.com/ajayyy/SponsorBlockServer)

It is a simple Sqlite database that will hold all the timing data.

To make sure that this project doesn't die, I have made the database publicly downloadable at [https://sponsor.ajay.app/database.db](https://sponsor.ajay.app/database.db). So, you can download a backup or get archive.org to take a backup if you do desire.

Hopefully this project can be combined with projects like [this](https://github.com/Sponsoff/sponsorship_remover) and use this data to create a neural network to predict when sponsored segments happen. That project is sadly abandoned now, so I have decided to attempt to revive this idea.

# Previous attempt

In January, a group of people tried to do a similar thing, but instead of using other people's submissions to skip sponsor segments for everyone, they ran the data through a neural network. [Here are their projects](https://github.com/Sponsoff). Sadly, this project was abandoned.

I hope to try to accomplish some of their goals, and maybe use some of data collected with this extension to power a neural network or algorithm of some sort as well.

This project is partially based off of [this experimental extension](https://github.com/OfficialNoob/YTSponsorSkip). That extension has the basic video skipping functionality, but I added everything else.

# Current Features

- Sponsor time submission: Click on the extension and select when a sponsor segment ends, find the time it finishes, and click on the extension again. Hit submit and this will be sent to the server.
- Ability to get sponsor timings already in the database and automatically skip over them

![sponsor skipped.gif](https://steemitimages.com/0x0/https://files.steempeak.com/file/steempeak/ajayyy/gMETqVsH-sponsor20skipped.gif)

- Small ui that appears that allows you to skip back and watch it if it was wrong
- Warning that appears if you go to another page after selecting timings, but never submitting them. You will be reminded to submit them so that your time is not wasted.

![skip notice.gif](https://steemitimages.com/0x0/https://files.steempeak.com/file/steempeak/ajayyy/DFcKksGr-skip20notice.gif)

- Warns you when you are not on YouTube or the content script hasn't loaded yet ![image.png](https://steemitimages.com/0x0/https://files.steempeak.com/file/steempeak/ajayyy/5xwNANHl-image.png)
- Decimal precision timings
- Correct menus hide when they should

# Public database

I don't want this to end up like the previous project, so I am making the database easily downloadable for anyone, so if I ever stop supporting this, someone should have a copy of the databse, if not archive.org.

Download it at [https://sponsor.ajay.app/database.db](https://sponsor.ajay.app/database.db)

# Technology Snack

The server is built with Node.js and uses Sqlite as a database.

The client is a chrome extension that contacts the server to get the timings.

# Current Videos in the DB

Just four right now, fBxtS9BpVWs, FfgT6zx4k3Q, uqKGREZs6-w, UjtOGPJ0URM. (YouTube video IDs)

# Plans

- Make it look nicer
- Get an icon
- Reputation system to prevent abuse
- Upvote/downvote system to prevent abuse
- Support multiple people submitting duplicate times and resolve those issues
- Controls from the webpage itself, opening up the popup is annoying
- Find a way to load some of the database from the previous project. Part of the database that didn't use timings and instead used captions is inside of one of the git projects. This could be fairly complex due to having to convert the captions to timings. I don't know how accurate or recent this data is, and I don't know how much data is available.
- Firefox extension
- Put it on the chrome web store
- Try getting it to work with a algorithm based on captions
- Get some people to start submitting sponsor timings
- Reminder that the extension is still there

# Git diff

[https://github.com/ajayyy/SponsorBlocker/compare/old...master](https://github.com/ajayyy/SponsorBlocker/compare/old...master) (extension)
[https://github.com/ajayyy/SponsorBlockServer/commits/master](https://github.com/ajayyy/SponsorBlockServer/commits/master) (server)

#### GitHub Account

[https://github.com/ajayyy](https://github.com/ajayyy)