<script setup>
import { materials } from '@/.vitepress/data/materials'
import MaterialCard from '@/.vitepress/theme/components/MaterialCard.vue'
const material = materials.find((m) => m.id === 'pla')
</script>

# PLA

<MaterialCard :material="material" />

## 打印要点

- PLA 是新手第一种材料：冷却风扇充分开启，悬垂与细节表现稳定，对腔温没有要求。
- 优先使用官方 PLA 与对应预设；首层附着、支撑剥离、表面质量都在这套参数下最容易获得稳定结果。
- 模型摆放优先保证大平面贴床；需要支撑的展示件先在 [支撑策略](/slicer/supports) 中了解角度阈值。

## 适合做什么

- 手办、摆件、展示模型与照片级原型。
- 收纳盒、理线夹、墙面挂钩等不承受反复受力的日常件。
- 装配试装（fit check）：确认尺寸与位置关系，不作为最终受力件。

## 不适合什么

- 受力支架、卡扣反复开合件、户外长期日晒件。
- 靠近热源的零件：车内、打印机外壳内部、灯具附近。
- 需要耐冲击、耐化学溶剂的功能件。

## 常见问题

- **边缘翘边**：先排查板面清洁、首层高度与床温；PLA 收缩小，大面积翘边通常不是材料本身问题。
- **表面拉丝**：多为回抽或温度设置偏差，按 [拉丝与牵丝](/troubleshooting/stringing) 排查。
- **层间脆断**：检查冷却是否过强、层高与速度是否超出材料稳定窗口。

返回：[材料百科总览](/materials/)
