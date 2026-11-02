<script setup lang="ts">
import { ref, computed } from 'vue'
import { printers } from '../../data/printers'
import SpecTable from './SpecTable.vue'

const activeId = ref(printers.find((p) => p.status === 'active')?.id ?? printers[0].id)
const current = computed(() => printers.find((p) => p.id === activeId.value)!)
</script>

<template>
  <div class="printer-tabs">
    <div class="tab-bar" role="tablist">
      <button
        v-for="p in printers"
        :key="p.id"
        role="tab"
        :aria-selected="p.id === activeId"
        class="tab"
        :class="{ active: p.id === activeId, planned: p.status === 'planned' }"
        @click="activeId = p.id"
      >
        {{ p.name }}
        <span v-if="p.status === 'planned'" class="badge">待录入</span>
      </button>
    </div>

    <div class="tab-intro">
      <p>{{ current.intro }}</p>
    </div>

    <SpecTable :printer="current" />
  </div>
</template>

<style scoped>
.tab-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1rem 0 1.4rem;
}
.tab {
  appearance: none;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}
.tab.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}
.tab.planned {
  color: var(--vp-c-text-3);
}
.badge {
  display: inline-block;
  margin-left: 6px;
  font-size: 11px;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
}
.tab.active .badge {
  background: rgba(255, 255, 255, 0.22);
}
.tab-intro p {
  margin: 0.4rem 0;
  color: var(--vp-c-text-2);
}
</style>
