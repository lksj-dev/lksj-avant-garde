# Dumpster

This mod adds a working, performant trash can that voids items, fluids and energy. 

## Source Code

https://github.com/lksj-dev/lksj-ag-dumpster

## What can I Learn From This?

- How to register a block?
- How to register the item form of the block?
- How to create a block entity for my block?
- (Fabric, Forge, NeoForge) How can I make my block interact with other means of transportation?
  - (Fabric only) How to use Transfer API?
  - (Forge only) How to use capabilities?
  - (NeoForge only) How to use capabilities without a block entity?

## History

This mod was a commission for a modpack circa 2019. 
At its core, it was also created out of dissatisfaction to the fact that "existing trash can mods were 
using `ITickable` on TileEntity, which was totally unnecessary". 

Unfortunately, because of my bad temper and other factors, the ranting above ended up as an insider joke. 
Some community members still occasionally use it to tease me (3TUSK), and I have given up fighting back on 
this one. 

I ported this mod to Fabric in 2019, making it my first Fabric Mod. 

With the kickstart of Project Avant-garde, I decided to incorporate this mod into the Project.

::: tip
For those who came into modding scene after 1.13: `TileEntity` was the legacy name for what is known as
`BlockEntity` today; `ITickable` was a interface to make a block entity tick 20 times per second. 
Today, to make a block entity tick-able, you need to define a ticker in the corresponding `Block`.
:::