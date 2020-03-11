---
path: "/at-least-it-s-not-death-or-platformer-game-with-a-twist-or-java-game-development-1543867788768"
date: "2018-12-03"
title: "At Least It's Not Death | Platformer Game With A Twist | Java Game Development"
image: "https://static.jam.vg/raw/a1/z/1c6ed.gif"
tags: '["utopian-io","development","gamedev","programming","fun"]'
---

#### Repository
https://github.com/ajayyy/AtLeastItsNotDeath/

![](https://static.jam.vg/raw/a1/z/1c6ed.gif)
This is one of the visual effects thay might be applied, constantly changing colours.

# What is it?
At least it’s not death is a platformer game with some nice options when you die (so don’t just beat it first try ;)).

When you die, you will be given two options. On one side, you get one power up in exchange for two sacrifices. You may choose which you would like by pressing A or D.

Each death, you must make a sacrifice, which usually are some crazy visual effect on the screen.

# Technology Stack
This is built with Java and an awesome open source library called Lib-GDX. This allows you to have full access to all OpenGL functions (through LWJGL) in Java. There are also some shaders used (for the colour changing visual effect and the lighting visual effect). These are written with GLSL. The "Bloom" post processing effect is created using [a post processing plugin](https://github.com/manuelbua/libgdx-contribs/).

# Features
##### Physics

The physics is programmed in mannually and is meant to be as modifiable as possible. This is done to ensure that the powerups and negative powers can easily change how the physics work to make it easier or harder.

##### Expandable Power Up System

The power up system is easily expandable by making a new `switch` statement in the power up class making even community submitted power ups simple to create.

##### Smoothed out animations

To make animations feel smooth, a lerp system is used. This makes the movement ease in.

```
float lerp = 2.5f;
float xMovement = ((x - game.main.cam.position.x) * lerp * game.deltaTime);
```

This makes the movement much nicer to look at.


##### Random rotation

![](https://static.jam.vg/raw/a1/z/1c731.gif)

##### Screenshake

![](https://static.jam.vg/raw/a1/z/1c70f.gif)

##### Low lighting effect

It is made using shaders. It is based off vertexes (corners) of each object.

![](https://static.jam.vg/raw/a1/z/1de25.gif)

#### Download And Try It

https://github.com/ajayyy/AtLeastItsNotDeath/releases

#### GitHub Account
https://github.com/ajayyy