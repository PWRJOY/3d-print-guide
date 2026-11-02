<script setup lang="ts">
import type { MaterialProfile } from '../../data/materials'

defineProps<{ material: MaterialProfile }>()

const stars = ['★', '★', '★', '★', '★']
</script>

<template>
  <article class="material-card">
    <header class="material-head">
      <div>
        <h3>{{ material.name }} <span class="alias">{{ material.alias }}</span></h3>
      </div>
      <div class="difficulty" :title="`上手难度 ${material.difficulty} / 5`">
        <span
          v-for="(s, i) in stars"
          :key="i"
          :class="['star', { on: i < material.difficulty }]"
          >{{ s }}</span>
      </div>
    </header>

    <div class="temp-row">
      <div><span class="label">喷嘴温度</span>{{ material.nozzleTemp }}</div>
      <div><span class="label">热床温度</span>{{ material.bedTemp }}</div>
      <div><span class="label">腔温</span>{{ material.chamber }}</div>
    </div>

    <h4>典型用途</h4>
    <ul class="list">
      <li v-for="u in material.useCases" :key="u">{{ u }}</li>
    </ul>

    <h4>注意事项</h4>
    <ul class="list caution">
      <li v-for="c in material.cautions" :key="c">{{ c }}</li>
    </ul>

    <p class="note">{{ material.sourceNote }}</p>
  </article>
</template>

<style scoped>
.material-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px 18px;
  margin: 1.2rem 0;
  background: var(--vp-c-bg);
}
.material-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.material-head h3 {
  margin: 0;
  font-size: 17px;
}
.alias {
  font-size: 13px;
  font-weight: 400;
  color: var(--vp-c-text-3);
}
.difficulty .star {
  color: var(--vp-c-divider);
  letter-spacing: 2px;
}
.difficulty .star.on {
  color: var(--vp-c-accent);
}
.temp-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin: 12px 0;
}
.temp-row > div {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
}
.label {
  display: block;
  font-size: 12px;
  color: var(--vp-c-text-3);
}
h4 {
  font-size: 13px;
  margin: 12px 0 6px;
  color: var(--vp-c-text-2);
}
.list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.list.caution li {
  color: var(--vp-c-text-2);
}
.note {
  margin: 12px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
}
</style>
