<script setup lang="ts">
import type { PrinterProfile } from '../../data/printers'

// 按 group 渲染单个参数区块；组标题由页面 markdown 提供（VitePress 大纲只收集 markdown 标题）
defineProps<{ printer: PrinterProfile; group: string }>()
</script>

<template>
  <div v-if="printer.status === 'active' && printer.hotend" class="spec">
    <section v-if="group === 'volume'" class="spec-group">
      <table class="spec-table">
        <tbody>
          <tr v-for="v in printer.printVolume" :key="v.label">
            <th>{{ v.label }}</th>
            <td>{{ v.value }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="group === 'hotend'" class="spec-group">
      <table class="spec-table">
        <tbody>
          <tr><th>喷嘴最高温度</th><td>{{ printer.hotend.nozzleMaxTemp }}</td></tr>
          <tr><th>标配喷嘴</th><td>{{ printer.hotend.standardNozzle }}</td></tr>
          <tr><th>支持喷嘴直径</th><td>{{ printer.hotend.supportedNozzles.join('、') }}</td></tr>
          <tr><th>喷嘴材质</th><td>{{ printer.hotend.nozzleMaterial }}</td></tr>
          <tr><th>耗材直径</th><td>{{ printer.hotend.filamentDiameter }}</td></tr>
          <tr v-if="printer.hotend.maxFlow"><th>最大流量</th><td>{{ printer.hotend.maxFlow }}</td></tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="group === 'bed'" class="spec-group">
      <table class="spec-table">
        <tbody>
          <tr><th>热床最高温度</th><td>{{ printer.bed?.maxTemp }}</td></tr>
          <tr><th>支持打印板</th><td>{{ printer.bed?.plateTypes.join('、') }}</td></tr>
          <tr>
            <th>主动腔温</th>
            <td>{{ printer.chamber?.activeHeating ? `支持，最高 ${printer.chamber?.maxTemp}` : '不支持' }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="group === 'speed' && printer.speed" class="spec-group">
      <table class="spec-table">
        <tbody>
          <tr><th>工具头最大移动速度</th><td>{{ printer.speed.maxVelocity }}</td></tr>
          <tr><th>最大加速度</th><td>{{ printer.speed.maxAcceleration }}</td></tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="group === 'materials' && printer.materials" class="spec-group">
      <table class="spec-table">
        <tbody>
          <tr>
            <th>主热端</th>
            <td>{{ printer.materials.mainHotend.join('、') }}</td>
          </tr>
          <tr v-if="printer.materials.auxiliaryHotend.length">
            <th>辅助热端</th>
            <td>{{ printer.materials.auxiliaryHotend.join('、') }}</td>
          </tr>
          <tr v-if="printer.materials.caution.length">
            <th>{{ printer.materials.auxiliaryHotend.length ? '辅助喷嘴谨慎使用' : '不推荐 / 谨慎使用' }}</th>
            <td>{{ printer.materials.caution.join('；') }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-else-if="group === 'highlights'" class="spec-group">
      <ul class="bullet-list">
        <li v-for="h in printer.highlights" :key="h">{{ h }}</li>
      </ul>
    </section>

    <section v-else-if="group === 'sensors'" class="spec-group">
      <ul class="bullet-list">
        <li v-for="s in printer.sensors" :key="s">{{ s }}</li>
      </ul>
      <h4>配套软件</h4>
      <ul class="bullet-list">
        <li v-for="s in printer.software" :key="s">{{ s }}</li>
      </ul>
    </section>

    <section v-else-if="group === 'notes'" class="spec-group notes">
      <ul class="bullet-list">
        <li v-for="n in printer.notes" :key="n">{{ n }}</li>
      </ul>
    </section>

    <section v-else-if="group === 'sources'" class="spec-group">
      <ul class="source-list">
        <li v-for="s in printer.sources" :key="s">
          <a :href="s" target="_blank" rel="noopener noreferrer">{{ s }}</a>
        </li>
      </ul>
    </section>
  </div>

  <div v-else class="spec-planned">
    <p>{{ printer.intro }}</p>
    <p class="hint">在 <code>.vitepress/data/printers.ts</code> 中补全该机型数据后，参数表会自动出现在这里。</p>
  </div>
</template>

<style scoped>
.spec-group {
  margin: 1.4rem 0;
}
.spec-group h4 {
  font-size: 13px;
  margin: 0.8rem 0 0.4rem;
  color: var(--vp-c-text-2);
}
.spec-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.spec-table th {
  width: 34%;
  text-align: left;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
.spec-table th,
.spec-table td {
  border: 1px solid var(--vp-c-divider);
  padding: 8px 12px;
  word-break: break-word;
}
.bullet-list,
.source-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.source-list a {
  word-break: break-all;
}
.spec-planned {
  padding: 1.5rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 10px;
  color: var(--vp-c-text-2);
}
.spec-planned .hint {
  font-size: 13px;
  color: var(--vp-c-text-3);
}
</style>
