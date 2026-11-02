<script setup>
import { materials } from '@/.vitepress/data/materials'
import MaterialCard from '@/.vitepress/theme/components/MaterialCard.vue'
const material = materials.find((m) => m.id === 'tpu')
</script>

# TPU 柔性材料

<MaterialCard :material="material" />

## 打印要点

- **走主喷嘴**：X2D 辅助喷嘴不推荐打印 TPU。
- 速度放慢，路径尽量短，减少长距离回抽；柔性线材在挤出齿轮处容易打滑，送料路径要顺畅、无折弯。
- 层高与壁层按柔性件需求设置；密封结构件注意填充与壁厚配合。
- 打印前同样需要干燥；TPU 受潮会出现表面气泡与出料不稳。

## 适合做什么

- 防滑垫、脚垫、手机保护套、密封圈、缓冲软垫。
- 柔性护套、可活动的柔性连接结构。
- 与硬质材料组合的双材料件（主喷嘴 TPU + 另一喷嘴 PLA 硬质结构）。

## 常见问题

- **出料打滑、齿轮空转**：检查送料路径是否弯折、速度是否过快、耗材是否受潮。
- **尺寸偏软、回弹异常**：核对硬度牌号（95A 偏硬、90A 更软），壁厚与填充按用途调整。
- **表面拉丝**：柔性材料回抽策略与刚性材料不同，优先沿用官方 TPU 配置。

返回：[材料百科总览](/materials/)
