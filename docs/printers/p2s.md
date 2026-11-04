---
title: 拓竹 P2S
---

# 拓竹 P2S

P 系列新一代多色机型：封闭机箱、PMSM 伺服挤出与动态流量校准，工程耗材兼容面广，标配 5 英寸触控屏与高清监控。

<script setup>
import { printers } from '../.vitepress/data/printers'
import SpecTable from '../.vitepress/theme/components/SpecTable.vue'
const p = printers.find((x) => x.id === 'p2s') ?? printers[0]
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
