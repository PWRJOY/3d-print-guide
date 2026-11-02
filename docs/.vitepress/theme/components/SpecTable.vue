<script setup lang="ts">
import type { PrinterProfile } from '../../data/printers'

defineProps<{ printer: PrinterProfile }>()
</script>

<template>
  <div v-if="printer.status === 'active' && printer.hotend" class="spec">
    <section class="spec-group">
      <h3>打印体积</h3>
      <table class="spec-table">
        <tbody>
          <tr v-for="v in printer.printVolume" :key="v.label">
            <th>{{ v.label }}</th>
            <td>{{ v.value }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="spec-group">
      <h3>热端与喷嘴</h3>
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

    <section class="spec-group">
      <h3>热床与腔温</h3>
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

    <section v-if="printer.speed" class="spec-group">
      <h3>运动速度</h3>
      <table class="spec-table">
        <tbody>
          <tr><th>工具头最大移动速度</th><td>{{ printer.speed.maxVelocity }}</td></tr>
          <tr><th>最大加速度</th><td>{{ printer.speed.maxAcceleration }}</td></tr>
        </tbody>
      </table>
    </section>

    <section v-if="printer.materials" class="spec-group">
      <h3>耗材兼容</h3>
      <h4>主热端</h4>
      <ul class="chip-list">
        <li v-for="m in printer.materials.mainHotend" :key="m">{{ m }}</li>
      </ul>
      <h4>辅助热端</h4>
      <ul class="chip-list">
        <li v-for="m in printer.materials.auxiliaryHotend" :key="m">{{ m }}</li>
      </ul>
      <h4>辅助喷嘴谨慎使用</h4>
      <ul class="chip-list caution">
        <li v-for="m in printer.materials.caution" :key="m">{{ m }}</li>
      </ul>
    </section>

    <section class="spec-group">
      <h3>传感器与软件</h3>
      <ul class="bullet-list">
        <li v-for="s in printer.sensors" :key="s">{{ s }}</li>
      </ul>
      <h4>配套软件</h4>
      <ul class="bullet-list">
        <li v-for="s in printer.software" :key="s">{{ s }}</li>
      </ul>
    </section>

    <section class="spec-group notes">
      <h3>使用注意事项</h3>
      <ul class="bullet-list">
        <li v-for="n in printer.notes" :key="n">{{ n }}</li>
      </ul>
    </section>

    <section class="spec-group">
      <h3>参数来源</h3>
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
.spec-group h3 {
  font-size: 15px;
  margin: 0 0 0.6rem;
  color: var(--vp-c-brand-1);
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
.chip-list,
.bullet-list,
.source-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.chip-list.caution li {
  color: var(--vp-c-accent);
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
