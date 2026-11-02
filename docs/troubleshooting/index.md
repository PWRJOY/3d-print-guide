<script setup>
import { ref, computed } from 'vue'
import { faults } from '@/.vitepress/data/faults'
import FaultEntry from '@/.vitepress/theme/components/FaultEntry.vue'

const allTags = [...new Set(faults.flatMap((f) => f.tags))].sort()
const activeTag = ref('')
const filtered = computed(() =>
  activeTag.value ? faults.filter((f) => f.tags.includes(activeTag.value)) : faults
)
</script>

# 缺陷排查手册

先对照现象定位条目，再按步骤逐项排查；**一次只调整一个变量**，并把改动与结果记入打印日志。详细操作流程见各专题页面。

<div class="tag-bar">
  <button class="tag-btn" :class="{ on: activeTag === '' }" @click="activeTag = ''">全部</button>
  <button
    v-for="t in allTags"
    :key="t"
    class="tag-btn"
    :class="{ on: activeTag === t }"
    @click="activeTag = activeTag === t ? '' : t"
  >{{ t }}</button>
</div>

<FaultEntry v-for="f in filtered" :key="f.id" :fault="f" />

## 排查总原则

1. 先排除基础条件：板面清洁、耗材干燥、调平与校准已执行、环境温度在要求范围内。
2. 按「首层 → 附着 → 层间结合 → 表面质量」的顺序判断，不要一上来改高级参数。
3. 每次改动只针对一个怀疑点，打印对比件验证后再继续下一项。
4. 反复出现的同一问题，回到耗材批次、机器校准与易损件状态检查，而不是反复微调切片参数。

<style>
.tag-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1rem 0;
}
.tag-btn {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
}
.tag-btn.on {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
</style>
