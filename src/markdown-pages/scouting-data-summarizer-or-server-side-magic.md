---
path: "/scouting-data-summarizer-or-server-side-magic"
date: "2019-04-17"
title: "Scouting Data Summarizer | Server-Side Magic"
image: "https://files.steempeak.com/file/steempeak/ajayyy/Kfvwvueh-image.png"
---

#### Repository
https://github.com/ajayyy/LakeEffectScoutingSummary/

> ### What is this
> This is a reader for the scouting app developed for FIRST Robotics Team 2708. It is used to scout other robots at the competition. The data is sent from 6 client apps to the server over bluetooth throughout the course of the events. The server must manage and put everything together. Scouting is necessary to be able to change your team's strategy and know what teams to pick to join your alliance. This reader converts the complicated database information into something easily understandable.
 >### About this year's game
> In this years game, teams must score "cargo" into holes in rockets. If the cargo is put in without a hatch panel, then it will fall out. The hatch panels must be fastened on to the rockets and cargo ship to prevent the cargo from falling out.
> ![image.png](https://files.steempeak.com/file/steempeak/ajayyy/Kfvwvueh-image.png)

# Added more statistics

I added a calculated robot death rate (when the robot gets disconnect or shutdown due to some issue).

Added a calculated defense, tipped, and climb success/fail rate for level 1 climb and level 2 climb.

The climb rate is has to take into account the column next to it as well, since it could be a successful climb or a failed climb.

```java
//find the amount of times a certain string has been saved in a column in a percentage
//Ex. number of successful level 2 climb
//only if the first search term AND the second are true (in the current column and the next column)
//Ex. First column: "level 2", second column: "success"
function getColumnTextItems(currentRobotNumber, labels, robots, collumnTerm, rowSearch, nextColumnSearch) {
    //find average of this column
    let column = getColumnIndex(labels, collumnTerm);
    let items = [];
    for (let currentRobot = 0; currentRobot < robots.length; currentRobot++) {
        if (robots[currentRobot].robotNumber === currentRobotNumber) {
            //all the matches for this robot
            //starts at 1 to skip the labels
            for (let matchNum = 1; matchNum < robots[currentRobot].data.length; matchNum++) {
                //otherwise it's just a line break at the end of the file
                if (robots[currentRobot].data[matchNum].length > 1) {
                    if (robots[currentRobot].data[matchNum][column].toLowerCase() === rowSearch &&
                        robots[currentRobot].data[matchNum][column + 1].toLowerCase() === nextColumnSearch) {
                        items.push(1);
                    } else {
                        items.push(0);
                    }
                }
            }
        }
    }

    return items;
}
```

Average ratings were also added.

Starting position, starting platform and the starting object were also added in another section. This information isn't 100% needed, so it is hidden by default, but can be seen by clicking on it.

# Server-side calcluations

Before, sometimes very simple operations (reading and modifying an array), were taking a very long time. I realized this was because I was running everything on the main thread.

In electron, there is the server-side JavaScript and the JavaScript running in the web browser, the JavaScript running in the web browser is heavily throttled. Now, all the long calculations have been moved to the server-side and the two code bases communicate over ipc.

To send data from the client:
```js
electron.ipcRenderer.send("createOverallSummary", currentRobotNumber);
```

To receive the response:
```js
electron.ipcRenderer.on('showOverallSummary', function (event, result) {
    document.getElementById('overallSummary').innerHTML = result;
});
```

The server-side code can then callback with:
```js
event.sender.send("showOverallSummary", result);
```

New processing speed:
![instant processing.gif](https://files.steempeak.com/file/steempeak/ajayyy/fwBATP1S-instant20processing.gif)

Old slow speed:
![slow processing.gif](https://files.steempeak.com/file/steempeak/ajayyy/WtkLMpLw-slow20processing.gif)

# Added fractions alongside the percentages

Now, whenever there is a percentage, it also shows the fraction that made it (because sometimes those can be more understandable). For example, when showing success rate, it will show 80% along with 8/10 (10 total matches).

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/XKOaJCHh-image.png)

# Made pressing enter on the textbox load data

Before you needed to hit load data, this makes it a lot easier to get data quickly

# Made the robot number text box autofocus

Now, when the program is started, the text box is already focused ready for you to type into it.

# Made all the decimal place numbers look nicer

They now use `.toFixed(2)` to keep less decimal places and not look unnecessarily long.

# Made the image size more dynamic

Now it changes based on window size

# Comments display

The comments in the scouting data are now displayed, along with the match they are from and who made the comment.

The comments in the database always had some placeholder characters such as `|c` and `|q` referring to `,` and `"`. These are finally viewable in the way they should be, as the program now converts them to their proper symbol.

This was put in place to prevent issues when data is transferred in the companion scouting app.

![image.png](https://files.steempeak.com/file/steempeak/ajayyy/9UIrjWwL-image.png)
(Names blanked out)

# Improved max performance algorithm

Instead of just showing the maximum successful object placements, and the maximum amount of failures, it tries to show the maximum performance of the robot.

It looks for the most successes it's every done. If there is more than one match that has the maximum successes, it will look for the minimum failures in those matches. In this way, it finds the best performing matches.

```java
//find max
let hitMaxItems = getMaxItems(hitItems);

//the miss amount in ONLY the matches where the maximum amount of items were places
let maxMissItems = [];
for (let i = 0; i < hitMaxItems.length; i++) {
    maxMissItems.push(missItems[hitMaxItems[i][1]]);
}
//it will find the minimum misses in the matches where they scored the most (the best performance)
let missMinItems = getMinItems(maxMissItems);
```

# Sorted the match data

Before, the match data was just in the order the data was received, not in the chronological order. This is important when displaying comments.

#### Pull Requests
https://github.com/ajayyy/LakeEffectScoutingSummary/pull/2

#### GitHub Account
https://github.com/ajayyy