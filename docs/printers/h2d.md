---
title: 拓竹 H2D
---

# 拓竹 H2D

双喷头 + 激光/刀切模块的个人智造中心：350 ℃ 喷嘴、65 ℃ 主动腔温与 350 mm 并集打印体积，打印之外还能雕刻与切割。

<script setup>
import { printers } from '../.vitepress/data/printers'
import SpecTable from '../.vitepress/theme/components/SpecTable.vue'
const p = printers.find((x) => x.id === 'h2d') ?? printers[0]
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
