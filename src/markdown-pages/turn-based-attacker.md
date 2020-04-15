---
path: "/turn-based-attacker"
date: "2018-01-04"
title: "Turn Based Attacker"
image: "/images/77_caption_hh5rnvgzbdupqmdhjeks.png"
tags: '["utopian-io","unity","game","game-dev","unity3d"]'
---

# What is this

This is a 2d turn based open source game written in Unity. This game supports up to 16 players currently. In this game, each player takes their turn either moving, or collecting powerups. When they finish their turn it moves on the the next player. The goal is to eliminate all other players.

![screenshot.png](./images/hh5rnvgzbdupqmdhjeks.png)

And here is an image of the animation system when it changes turns.

![screenshot.png](./images/turn_based_turn_changing.gif)

On the left is the status of all players, it lists all the players, how many units they currently have alive, and which player's turn it is. When it is your turn, you can select one of your players by clicking on them, and move them using WASD, it will then move on to the next turn. If you currently have a powerup used, you can press E, and use it.

Powerups include being able to spawn another unit, being able to fire a projectile at someone, being able to create a block.

Some projectiles fire instantly at others, and others move one space per turn and go in the direction you fire. There is also one powerup that allows you to shoot a block in a direction, and it will spawn on the object it hits.

If you are behind a block, the other person will not be able to shoot you, because it will hit the block instead.

# Modularity

I made an animation system to make adding more and more turn based features very easy, with this system, all you need to do is add one script to your object, then you can set a target, and start the move animation to make it move, and go to the next turn.

# Future Plans

Currently pickups do not spawn again after being used, and they are just in placeholder spots, I plan on making them spawn in slowly, and keep spawning throughout the game.

Also, there is currently no way to tell what powerup a pickup is, it's just the same color, I plan on making a way to differientiate it.

I also want to show what powerups each player has in the status sidebar, and implement more gametypes, and online multiplayer.

# How is it made

It is made in Unity.

To use the project, download it, and open it up with Unity.

You can also download and try the build [here](https://github.com/ajayyy/FinalProject/releases/).



