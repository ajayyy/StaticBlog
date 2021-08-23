---
path: "/highlight-sponsorblock"
date: "2021-08-21"
title: "Highlight - SponsorBlock"
image: "/images/highlight-sponsorblock.png"
tags: '["development","programming","sponsorblock"]'
---

![SpaceX Launch](/images/spacex-highlight.png)

This new category in [the SponsorBlock extension](https://sponsor.ajay.app) allows you to get to the point of the video, solving problems such as [the Wadsworth constant](https://old.reddit.com/r/pics/comments/kxfxy/and_so_ends_20_years_of_frustration/c2o1cyy/?context=3). The extension will either ask if you want to skip to the "highlight", or auto skip to it right away depending on your preference.

You can use it to [watch rocket launches](https://www.youtube.com/watch?v=sSiuW1HcGjA) or even skip [right to the explosion](https://www.youtube.com/watch?v=BHiWygziyso) in a non rocketry video.

Many people were using the intermission category for this, which was wrong, so hopefully this will reduce those issues.

## Uses (In order of priority)

1. Skipping to the point/most important part of the video
1. Skipping to the part of the video referred to by the title
1. Skipping to the part of the video referred to by the thumbnail
1. Skipping to the part of the video referenced from a preview/teaser at the start of the video

# Mini fading notice

The notice has now been changed to take up less space, and start out faded after an auto skip. This can be configured in the options and you can go back to the old one if you want.

![New Notice](/images/new-notice.gif)

# Internals

These new segments are a new type called _POI_ (Point of Interest), which refers to one specific timestamp instead of a start and end time. Internally, they are stored as the start time and end time being equal. This POI segment type potentially could be used in the future for other categories.

I tried to design it to be expandable in that way and not just hardcode in the highlight category.

One idea I have for future is to allow community created and moderated categories to be more flexible than the current small number of nicely curated categories. This would allow for the crazy things people want like skipping specifically timelapse sections, or skipping skits, that are just too specific to be included as a default category. Though, I am still a little hesitent with this, as the current simplicity does help make the extension so approachable.

With this abstraction, it would be possible for these custom categories to also be POI categories.

## Release

[3.0](https://github.com/ajayyy/SponsorBlock/releases/tag/3.0)

[Support my work on SponsorBlock](https://sponsor.ajay.app/donate)