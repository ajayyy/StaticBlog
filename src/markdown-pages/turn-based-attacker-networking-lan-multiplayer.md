---
path: "/turn-based-attacker-networking-lan-multiplayer"
date: "2018-01-26"
title: "Turn Based Attacker - Networking + LAN Multiplayer"
image: "https://res.cloudinary.com/hpiynhbhq/image/upload/v1517004745/shboosva3fsoe9wq30p9.png"
tags: '["utopian-io","unity","unity3d","gamedev","2dgamedev"]'
---


# What is this?

This is a turn based strategy game where you must try to kill all the other player's units to win. There can be up to 16 players. You can see more in the [original post](https://utopian.io/utopian-io/@ajayyy/turn-based-attacker)

# Networking

In this release I added the ability to play a networked game. Now you can have other players join your game and can play together, from different computers.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517004745/shboosva3fsoe9wq30p9.png)

You can join by specifying their ip address.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1517004804/uccwpjxxjs3imphmfsgo.png)

The game communicates over TCP and sends messages for what button was pressed, or what person became selected. The networking is done manually by sending strings of text signifying a command, and since TCP sometimes groups commands, the game will make sure to separate commands before executing them.

Since this is a turn based game, I do not have to deal with latency, meaning it just requires sending the data.

# Future Plans

I have already implemented saving and loading games, but I have not implemented that into multiplayer yet (since that would require sending a lot of data over the network. My next plan is to work on loading your game into a multiplayer game.

I also want to add the ability to add nicknames, and the ability to reconnect if you leave.

Giving the game host the ability to kick players is also a feature I am planning on adding.

# Download and Play

You can download and play the game [here](https://github.com/ajayyy/TurnBasedAttacker/releases).

