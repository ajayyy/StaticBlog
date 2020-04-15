---
path: "/cunctans-square--turn-based-puzzle-game"
date: "2018-08-14"
title: "Cunctan's Square | Turn Based Puzzle Game"
image: "/images/46_caption_QmSB5GiFdy44a9aHHkBMgBmJkmndYTFywdq8pQx8ezYBDu"
tags: '["utopian-io","development","gamdev","gaming","programming"]'
---

![ld41_final_quality.gif](./images/QmSB5GiFdy44a9aHHkBMgBmJkmndYTFywdq8pQx8ezYBDu)

#### Repository
https://github.com/ajayyy/CunctansSquare

# What is this?

Cunctan's Square is a turn based puzzle game where you must move your player to the end without being hit by the enemies.

However, the world closes in on itself each time you move. This gives you less space to move and eliminates certain paths to the exit.

# Technology Stack

This game is written in Java with Lib-GDX. Lib-GDX is a an open source library that uses LWJGL and allows you to make a game in Java that supports Windows, Mac, Linux, HTML5, Android, and even iOS. The post processing effects are created using [libgdx-contribs](https://github.com/manuelbua/libgdx-contribs/).

# Features

##### Path generation

Each turn the player takes, one block is removed from the field. If this block was completely random, then the player would just get blocked from being able to access the finish.

To solve this, the program calculates a path from the player's current position, and makes sure to exclude those from the tiles that get destroyed. 

##### Edges

Having pieces disappear from the middle of the area felt really weird, and did not have the same sense of claustrophobia as destroying blocks from the outside in.

To solve this, only edge blocks are destroyed.

```Java
public ArrayList<Block> findEdgeBlocks(ArrayList<Block> blocks){
	ArrayList<Block> edgeBlocks = new ArrayList<Block>();
	
	for(Block block : new ArrayList<Block>(blocks)) {
		ArrayList<Block> surroundingBlocks = new ArrayList<Block>();
		
		surroundingBlocks.add(getBlock(block.x + 1, block.y));
		surroundingBlocks.add(getBlock(block.x - 1, block.y));
		surroundingBlocks.add(getBlock(block.x, block.y + 1));
		surroundingBlocks.add(getBlock(block.x, block.y - 1));
		
		boolean edgeBlock = true;
		
		//if true, this cannot be an edge piece
		boolean noNull = true;
		
		for (Block surroundingBlock : surroundingBlocks) {
			if(surroundingBlock == null) {
				noNull = false;
			}
		}
		
		if (!noNull) {
			ArrayList<Block> otherBlocks = new ArrayList<Block>(this.blocks);
			otherBlocks.remove(block);
			
			for (Block surroundingBlock : surroundingBlocks) {
				if (surroundingBlock != null) {
					ArrayList<Vector2> path = allPaths.get(surroundingBlock);
					
					if ((path != null && vectorListContainsAny(path, lastDestroyedBlocks)) || !allPaths.containsKey(surroundingBlock)) {
						path = findPath(surroundingBlock.x, surroundingBlock.y, levelConfig.endX, levelConfig.endY, otherBlocks);
						allPaths.put(surroundingBlock, path);
					}
					
					if(path == null) {
						edgeBlock = false;
						break;
					}
				}
			}
			
			if(edgeBlock) {
				edgeBlocks.add(block);
			}
		}
	}
	
	return edgeBlocks;
}
```

A block is considered an edge block if, when removed, it does not block the path of the surrounding blocks to the target. Also, if there all the surrounding blocks are actual blocks, it cannot be an edge piece, no matter what.

### Optimizations

##### Threading

These calculations are very costly and can make a turn take up to 5 seconds to complete. To solve this, the calculations are done before hand in a separate thread to prepare for when the user is ready to move.

##### HTML5

Javascript does not support threading, so other solutions have to be used to fix the load times as well

##### Do not repeat calculations

To prevent repeating calculations, you can check if the path included one of the previously destroyed blocks, because otherwise nothing has changed,

```Java
if (vectorListContainsAny(path, lastDestroyedBlocks))) {
     //redo calculations
}
```

# Commits
https://github.com/ajayyy/CunctansSquare/commits/master
https://github.com/ajayyy/CunctansSquare/commits/html5-no-threading

#### GitHub Account
https://github.com/ajayyy