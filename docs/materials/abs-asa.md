<script setup>
import { materials } from '.vitepress/data/materials'
import MaterialCard from '.vitepress/theme/components/MaterialCard.vue'
const material = materials.find((m) => m.id === 'abs-asa')
</script>

# ABS / ASA

<MaterialCard :material="material" />

## 两种材料怎么选

- **ABS**：通用工程塑料，强度与耐温较好，但长期户外紫外线照射会老化变脆。
- **ASA**：抗紫外线与耐候性优于 ABS，户外外壳、支架、遮阳与长期暴露件优先选 ASA。
- 两者打印策略接近：依靠腔温稳定层间热量，降低部件冷却风扇，减少翘边与层裂。

## 打印要点

- 开启 X2D 主动腔温，让腔体内温度均匀，避免大尺寸件内外温差过大。
- 冷却风扇相比 PLA 明显降低，保证层与层之间热量结合。
- 打印前确认耗材干燥；受潮会加剧层裂、气泡与异味。
- 保持三级过滤系统安装到位，注意环境通风。

## 常见问题

- **边角翘边、整体开裂**：多为腔温不足、冷却过强或耗材受潮，按 [层间分离与开裂](/troubleshooting/layer-separation) 与 [附着不良与翘边](/troubleshooting/adhesion-warping) 排查。
- **层间结合弱**：喷嘴温度偏低、速度过快；按小步长升温对比，不要一次大幅改参数。
- **表面有气泡**：耗材受潮，先干燥再打印。

返回：[材料百科总览](/materials/)
