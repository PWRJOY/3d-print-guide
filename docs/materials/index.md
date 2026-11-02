<script setup>
import { materials } from '@/.vitepress/data/materials'
import MaterialCard from '@/.vitepress/theme/components/MaterialCard.vue'
const sorted = [...materials].sort((a, b) => a.order - b.order)
</script>

# 材料百科

按难度阶梯练习，不要跳级。下表温度为常见参考窗口，**实际以耗材厂商推荐与 Bambu Studio 官方配置文件为准**；X2D 主喷嘴能力强于辅助喷嘴，TPU 等易打滑材料走主喷嘴。

<div v-for="m in sorted" :key="m.id">
  <MaterialCard :material="m" />
</div>

## 选材速查

| 需求 | 优先材料 | 阅读页面 |
| --- | --- | --- |
| 摆件、展示、原型、收纳 | PLA | [PLA](/materials/pla) |
| 支架、外壳、耐冲击功能件 | PETG | [PETG](/materials/petg) |
| 软垫、密封圈、柔性结构 | TPU | [TPU](/materials/tpu) |
| 结构外壳、户外件 | ABS / ASA | [ABS / ASA](/materials/abs-asa) |
| 高强度、耐磨、耐高温结构件 | PA 尼龙 / PC | [PA 尼龙 / PC](/materials/nylon-pc) |
| 复杂内腔水溶支撑 | PVA | [PVA 注意事项](/dual-nozzle/support-material) |

## 材料练习顺序建议

1. **PLA**：建立首层、侧壁、填充、支撑的基本手感。
2. **PETG**：学习韧性材料的拉丝控制、床面附着与冷却差异。
3. **TPU**：掌握慢速、短路径、少回抽的柔性材料策略。
4. **ABS / ASA**：进入腔温材料，理解层间热量与冷却平衡。
5. **PA / PC**：在干燥设备与腔温条件具备后再尝试。

所有材料的吸湿、干燥与存放规范统一见：[吸湿、干燥与存储](/materials/drying-storage)。
