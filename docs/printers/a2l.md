---
title: 拓竹 A2L
---

# 拓竹 A2L

330 mm 大尺寸入门机型：开放框架、伺服挤出电机与弹性打印钢板，支持刀切模组扩展，适合大型件与大尺寸创作。

<script setup>
import { printers } from '../.vitepress/data/printers'
import SpecTable from '../.vitepress/theme/components/SpecTable.vue'
const p = printers.find((x) => x.id === 'a2l') ?? printers[0]
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
