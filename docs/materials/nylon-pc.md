<script setup>
import { materials } from '@/.vitepress/data/materials'
import MaterialCard from '@/.vitepress/theme/components/MaterialCard.vue'
const material = materials.find((m) => m.id === 'nylon-pc')
</script>

# PA 尼龙 / PC

<MaterialCard :material="material" />

## 进入条件

在熟练掌握 PLA、PETG、ABS/ASA 之后再尝试这一类工程材料。开始前确认：

- 具备耗材干燥条件（干燥箱或密封干燥方案）。
- 机器腔温、热床与喷嘴温度达到材料要求。
- 先用小测试件验证附着、层间结合与尺寸，再打印大结构件。

## PA 尼龙

- 韧性与耐磨性优秀，适合传动件、卡扣、结构支架。
- 吸湿性极强，打印前必须充分干燥；受潮会直接导致层裂、气泡与强度下降。
- 打印过程中保持密封与干燥环境，避免线材在空气中长时间暴露。

## PC 聚碳酸酯

- 强度高、耐温高、有一定透明度，适合承力与耐高温零件。
- 需要较高喷嘴温度、热床温度与稳定腔温；层间结合要求严格。
- 残余应力可能导致后期开裂，注意打印方向与结构设计，必要时按材料说明做退火处理。

## 纤维增强材料

- 碳纤/玻纤增强版本刚性与尺寸稳定性更好，但会加速喷嘴与喉管磨损；使用官方兼容清单内的喷嘴与耗材组合。
- 辅助喷嘴对增强材料的兼容范围更窄，按 [机型参数表](/printers/x2d) 核对。

返回：[材料百科总览](/materials/)
