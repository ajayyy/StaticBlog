---
path: "/youtube-watch-history-statistics-viewer"
date: "2017-12-23"
title: "YouTube Watch History Statistics Viewer"
image: "https://res.cloudinary.com/hpiynhbhq/image/upload/v1514007567/lyg7mlwrmvqaxxnak0md.png"
---

# What is this

I have created a YouTube watch history statistics viewer. This reads your watch history data, and makes a short summary of all the channels and videos you have watched, plus the categories you have watched in a similar style to https://2017wrapped.com made for Spotify. It also sorts based on music, or non music.

# How to use

You just need to [download ](https://github.com/ajayyy/YouTube-Watch-History-Statistic-Viewer/releases) the zip file, extract it, and run the .exe file, the rest of the instructions are in the program.

# State of developement

This is the first released version. I plan to release another version that will self extract to make it much simpler to use. If you have any suggestions, please create a GitHub issue in the repository.

Also, if you do try it out, please report if it worked well for you in the comments.

# Screenshots

![screenshot1.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514007567/lyg7mlwrmvqaxxnak0md.png)

![screenshot2.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514007695/tcto9mxfvflfa0vl66ai.png)


# Development

This was made in Node.js with Electron, and uses the YouTube API to pull the channel names, and thumbnails. You are not able to read the watch history with the YouTube API, so I had to use a python scraper written by [zvodd](https://github.com/zvodd/Youtube-Watch-History-Scraper). It downloads all the watch history into an sqlite database, which my program then reads and outputs the statistics.

# Github Link

You can see the repo on Github here: https://github.com/ajayyy/YouTube-Watch-History-Statistic-Viewer/

