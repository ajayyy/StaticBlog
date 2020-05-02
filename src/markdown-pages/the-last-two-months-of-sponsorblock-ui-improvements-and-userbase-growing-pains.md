---
path: "/the-last-two-months-of-sponsorblock-ui-improvements-and-userbase-growing-pains"
date: "2019-10-31"
title: "The last two months of SponsorBlock - UI improvements and userbase growing pains"
image: "/images/1_caption_fade_out_2.gif"
tags: '["utopian-io","programming","sponsorblock","marlians","development"]'
---

#### Repository
https://github.com/ajayyy/SponsorBlock

Since my last update post was in August, this is a recap of everything important that has happened since.

# New notice
![](/images/fade_out_2.gif)

![](/images/reskip.gif)

This notice not only looks waaay better than the original, it also:

- Is much smaller, hiding less of the video
- Is in a better location, making it visible in full screen
- Let's you see how long is left before it closes
- Has a nice timer
- Stays open when you unskip
- Let's you know how long the sponsor is after unskipping


### Side effects

With this change, the voting system is a little different. Instead of upvotes and downvotes, there is simply a report button. If someone skips a sponsor without reporting it, it is treated as an upvote (unless they disable the notice or view tracking). 

To counter the issue of people not realizing they are upvoting, downvotes now count 4x as much as a normal upvote.

# Preview Unsubmitted Sponsors

![](/images/unknown.png)

They appear in blue.

# Banning and VIPs

As the userbase grows, there will be some bad actors. To help with this, there is now a way to ban users without them knowing they are banned and a way to give certain people more privileges (votes count for more).

There is also now a auto temp-ban system in place. If there are too many low ranking submissions by a users, there new submissions will be banned until they start getting better votes.

# Keybinds are now customisable

Before, this was annoying for people with different keyboard layouts.

![](/images/setkeybinds.gif)

# Userbase growing pains

The userbase is growing way faster than I ever could have imagined. This is amazing, but has also required a lot of server tweaking to get right. There are still a few issues happening with the server during peak times, but I will continue to work on getting them fixed. Feel free to check http://status.sponsor.ajay.app if you have server issues.

# More translations

Thanks to some nice people in the communty, there are now some translations. If you would like to translate, it is pretty easy and does not require much technical knowledge, just reach out to me and I'll help you get started. Many are only partial translations for now, but the whole program is  translatable at  the moment.



#### GitHub Account
https://github.com/ajayyy