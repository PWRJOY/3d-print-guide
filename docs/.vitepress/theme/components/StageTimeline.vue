<script setup lang="ts">
import { stages } from '../../data/stages'
</script>

<template>
  <div class="timeline">
    <div v-for="stage in stages" :key="stage.id" class="stage">
      <div class="stage-meta">
        <span class="stage-no">阶段 {{ stage.id }}</span>
        <span class="stage-period">{{ stage.period }}</span>
      </div>
      <div class="stage-body">
        <h3>{{ stage.phase }}</h3>
        <p class="goal">目标：{{ stage.goal }}</p>
        <ul class="actions">
          <li v-for="a in stage.actions" :key="a">{{ a }}</li>
        </ul>
        <div class="pass">
          <b>过关标准：</b>{{ stage.passCriteria }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 26px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--vp-c-brand-3);
  border-radius: 2px;
}
.stage {
  position: relative;
  margin-bottom: 1.6rem;
}
.stage::before {
  content: '';
  position: absolute;
  left: -23px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-3);
}
.stage-meta {
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 6px;
}
.stage-no {
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.stage-period {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
.stage-body {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px 16px;
  background: var(--vp-c-bg);
}
.stage-body h3 {
  margin: 0 0 6px;
  font-size: 16px;
}
.goal {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--vp-c-brand-1);
}
.actions {
  margin: 0 0 10px;
  padding-left: 1.2rem;
  line-height: 1.8;
  font-size: 14px;
}
.pass {
  font-size: 13px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-left: 3px solid var(--vp-c-brand-3);
  padding: 8px 12px;
  border-radius: 0 8px 8px 0;
}
</style>
