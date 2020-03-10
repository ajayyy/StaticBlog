---
path: "/planets-or-a-multiplayer-planet-gravity-game"
date: "2019-06-17"
title: "Planets | A Multiplayer Planet Gravity Game"
image: "https://files.steempeak.com/file/steempeak/ajayyy/ZZHBS4fX-planets20demo201.gif"
---

#### Repository
https://github.com/ajayyy/Planets

# What is this
This is multiplayer planet-based game. There are planets, circles with a gravitational pull, that pull all players towards them. When a player collides with the planet, they bounce off. You can press W and A to move left and right relative to the normal of the planet position you are currently in. You can also click on-screen to launch a projectile. Launched projectile will fly in the direction you point and also get pulled in by gravity, but they will not bounce off the planet. When you launch a projectile, you get pushed in the other direction (equal and opposite force). The is another way to move. When a projectile collides with a player, they bounce off of each other, allowing one player to launch a projectile at another player to push them around.

At the moment, there is no game, however you can move around and shoot other players. Theoretically, it can support as many players as you need (or hit the integer cap of 2.14 billion).

![planets demo 1.gif](https://files.steempeak.com/file/steempeak/ajayyy/ZZHBS4fX-planets20demo201.gif)

# Instructions to run

Launch the server project to get started, then launch as many instances of Planet-desktop as you need. By default, the clients currently connect to “localhost”. Beware of joining two players without moving the first one from the start location, as they start in the same position, they could get stuck in eachother.

Press A and D to move around and click to shoot projectiles. Everything should sync and be visible on all clients.

# Technology Stack

This is written in Java with the library Lib-GDX. Lib-GDX is an open-source library that wraps LWJGL function and allows you to export you Java game into many more platforms such as even HTML5/WebGL. LWJGL is a library that is adds Java functions for OpenGL calls.

The networking is handled with a library called Java-WebSockets (https://github.com/TooTallNate/Java-WebSocket). Websockets are used since they are the only network type supported in JavaScript, which I am planning on porting this to later (with Lib-GDX’s WebGL export).
# Main features so far
-	All of the non client or server specific code is kept in a base project, that the two other projects extend. This is really nice for organization and removes duplicate code
-	Game updates are run at exactly the same speed on all clients by making sure to repeat frames if necessary. This is required to ensure that all clients and the server run identical simulations and don’t get off.
This is done by running a for loop that will loop through the required number of updates before rendering to keep going at exactly 60 fps.
-	When a projectile is launched by one player at frame x, then next client receives the info about what frame it was launched at and will go back in time to replay that action. This makes sure that all users’ inputs are handled instantly, no matter their internet connection to the server. Normally, games don’t trigger the action until the server gets info about it. That makes it feel delayed when you do stuff. This way is much better in my opinion, but way less used.
-	Planet gravity
	- This took time to get perfect
-	Planet bouncing physics
	-	The players are able to bounce off the side of a planet and keep part of their velocity.
-	Queue code to make sure that all frame repeating code is run on the frame to be able to pause all calculations to resimulate frames. This needs to be on the same thread because otherwise two threads will be modifying the same variables and it would be a disaster.
-	Old states of all players (in future, should be all physics objects) are saved to make resimulation of frames possible.
Issues that will be fixed soon:
-	Not a perfect simulation yet, the clients sometimes get a little off from eachother
-	Non perfect mathematics (differentials)
My main goal with this project was to attempt to estimate in code as little as possible. With planet gravity, the force of the gravity depends on the position relative to the planet. This can be estimated using a euler method by simply adding the acceleration to the velocity, then the velocity to the position every timestep. I wanted to try and make this perfect by creating a differential equation to solve this algebraically. The rearranged gravity equation is   for x and   for y with subscript p representing the planet and r representing the real position. I attempted to convert these to formulas that could get the exact x and y position variable for any t, time variable. Sadly, these equations have no closed form solution, so I ended up wasting a lot of time on this journey, though I did learn a lot.

This issue sadly can never be fixed, but instead a fixed inaccuracy can be used on all clients. This involves using the same timestep on all client, making the accuracy the same for all simulations.

-	No frame simulation for left and right movement yet (only projectiles)
I was not able to get enough time to run the frame simulation for left and right movements yet, so for now this issue can be fixed by the fact that server position checks have been added temporarily.
-	Ran out of time bug fixing
-	Resimulation does not deal with projectiles yet
When resimulating frames, it goes through the old states of all players (saved every frame) and sets their position to the state they were in that frame. There are no old states saved for projectile positions yet.
-	Resimulation does not deal with players connecting and disconnecting yet
When a player leaves, they are removed from the player list. This makes all there old states get deleted. Ideally, there should be another list containing all the old states of the player array.
-	Really short server messages sometimes don’t send
When a player disconnects, the server sends out a message saying “PD [id]”, this message is very short so sometimes the TCP network will not send it but instead wait for another message to be sent before sending it. This can be fixed by padding the message, sadly I ran out of time for that. Since it only affects disconnecting players and is resolved when any keys get pressed, it has little effect.

#### GitHub Account
https://github.com/ajayyy/