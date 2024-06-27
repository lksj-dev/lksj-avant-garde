# 大号垃圾桶

本 Mod 仅添加一款三合一垃圾桶方块，可高效销毁物品、流体及各种能量。

## 源代码

https://github.com/lksj-dev/lksj-ag-dumpster

## 历史

本 Mod 最初是 2018 年年底为某个整合包写的定制 Mod。但实际上，当时我写这个 Mod 还有一层更深层的原因：对市面上现有的垃圾桶 Mod 中「使用 `ITickable` TilEntity 的不满」。

这段往事最终成了「哏」，至今仍偶尔有人以此调侃我（3TUSK）。

2019 年的时候将其移植到了 Fabric 上，成为了我写过的第一个基于 Fabric 的 Mod。

随着《前卫计划》的成型，我决定将该 Mod 收入其中。

::: tip
如果你是在 Minecraft 1.13 及以后才开始接触 Mod 开发：`TileEntity` 是如今 `BlockEntity` 的旧称，而 `ITickable` 则是曾经令方块实体一秒刷新 20 次必须实现的接口。在新版 Minecraft 中，你需要在方块类中返回 ticker 来实现曾经 `ITickable` 的效果。
:::