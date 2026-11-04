---
title: 拓竹 X2D
---

# 拓竹 X2D

双喷嘴、主动腔温、AI 摄像头监测的桌面 FDM 打印机：主喷嘴负责模型主体，辅助喷嘴负责支撑与换色，是双喷嘴方案的代表机型。

<script setup>
import { printers } from '../.vitepress/data/printers'
import SpecTable from '../.vitepress/theme/components/SpecTable.vue'
import X2DNotes from '../.vitepress/theme/components/X2DNotes.vue'
const p = printers.find((x) => x.id === 'x2d') ?? printers[0]
</script>

## 打印体积

<SpecTable :printer="p" group="volume" />

## 热端与喷嘴

<SpecTable :printer="p" group="hotend" />

## 热床与腔温

<SpecTable :printer="p" group="bed" />

## 运动速度

<SpecTable :printer="p" group="speed" />

## 耗材兼容

<SpecTable :printer="p" group="materials" />

## 机型亮点

<SpecTable :printer="p" group="highlights" />

## 传感器与软件

<SpecTable :printer="p" group="sensors" />

## 使用注意事项

<SpecTable :printer="p" group="notes" />

## 参数来源

<SpecTable :printer="p" group="sources" />

## 使用经验与专属说明

<X2DNotes />
