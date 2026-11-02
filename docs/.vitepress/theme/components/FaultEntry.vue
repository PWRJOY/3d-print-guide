<script setup lang="ts">
import type { FaultEntry } from '../../data/faults'

defineProps<{ fault: FaultEntry }>()
</script>

<template>
  <article class="fault">
    <header class="fault-head">
      <h3>{{ fault.symptom }}</h3>
      <div class="tags">
        <span v-for="t in fault.tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </header>

    <div class="fault-cols">
      <section>
        <h4>可能成因</h4>
        <ul class="list">
          <li v-for="c in fault.causes" :key="c">{{ c }}</li>
        </ul>
      </section>
      <section>
        <h4>排查与对策</h4>
        <ol class="list ordered">
          <li v-for="f in fault.fixes" :key="f">{{ f }}</li>
        </ol>
      </section>
    </div>
  </article>
</template>

<style scoped>
.fault {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px 18px;
  margin: 1.2rem 0;
  background: var(--vp-c-bg);
}
.fault-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.fault-head h3 {
  margin: 0;
  font-size: 16px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 999px;
  padding: 2px 10px;
}
.fault-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 10px;
}
h4 {
  font-size: 13px;
  margin: 0 0 6px;
  color: var(--vp-c-text-2);
}
.list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
</style>
