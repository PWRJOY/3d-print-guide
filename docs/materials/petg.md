<script setup>
import { materials } from '@/.vitepress/data/materials'
import MaterialCard from '@/.vitepress/theme/components/MaterialCard.vue'
const material = materials.find((m) => m.id === 'petg')
</script>

# PETG

<MaterialCard :material="material" />

## 打印要点

- PETG 介于 PLA 与 ABS 之间：比 PLA 韧、层间结合更好，不需要腔温，但比 PLA 更容易拉丝、对床面附着更强。
- 速度适当放慢，给出料与结合留出时间；回抽参数按官方预设起步，小幅调整，不要一次拉满。
- 冷却风扇可低于 PLA 水平，改善层间结合；具体以配置文件与测试件结果为准。

## 适合做什么

- 支架、卡扣底座、设备外壳、容器与日常功能件。
- 需要一定耐冲击、反复拆装的零件。
- 户外短期使用件（耐候性弱于 ASA，不做长期暴晒件）。

## 常见问题

- **拉丝明显**：先确认耗材干燥，再核对回抽距离、速度与空置移动路径，见 [拉丝与牵丝](/troubleshooting/stringing)。
- **取件拉伤板面**：床温偏高或附着过强；冷却后再取件，避免用工具硬撬。
- **表面气泡、噼啪声**：耗材受潮，按 [吸湿与干燥](/materials/drying-storage) 处理。
- **层间分离**：温度偏低、冷却过强或速度过快，见 [层间分离与开裂](/troubleshooting/layer-separation)。

返回：[材料百科总览](/materials/)
