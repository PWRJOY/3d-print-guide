<script setup>
import StageTimeline from '.vitepress/theme/components/StageTimeline.vue'
</script>

# 3D打印指南

<div class="hero">
  <p class="hero-lede">以拓竹 X2D 为首发机型的 FDM 3D 打印学习手册：从开箱首打，到切片、材料、双喷嘴、建模与故障排查，按阶段一步步走到独立排障与原创设计。</p>
  <div class="hero-actions">
    <a class="btn primary" href="/getting-started/">开始快速上手</a>
    <a class="btn" href="/printers/">查看机型参数</a>
  </div>
  <p class="hero-note">首发录入机型：拓竹 X2D；其他机型在机型库中预留槽位，后续核对官方资料后补充。</p>
</div>

## 五阶段成长路线

不要跳过阶段：前一阶段没有独立完成过关标准，再进入下一阶段。

<StageTimeline />

## 内容板块

<div class="guide-grid">
  <a class="guide-card" href="/getting-started/">
    <h3>快速上手</h3>
    <p>开箱清点、软件配网、首次校准、第一组测试件与首打成功标准。</p>
  </a>
  <a class="guide-card" href="/printers/">
    <h3>机型库</h3>
    <p>X2D 完整参数、耗材兼容、传感器配置与专属注意事项，预留多机型对比槽位。</p>
  </a>
  <a class="guide-card" href="/slicer/">
    <h3>切片教程</h3>
    <p>Bambu Studio 逐项参数：层高、壁厚填充、支撑、速度温度冷却、接缝外观。</p>
  </a>
  <a class="guide-card" href="/materials/">
    <h3>材料百科</h3>
    <p>PLA、PETG、TPU、ABS/ASA、PA/PC 与 PVA 的温度窗口、用途、注意事项与干燥存储。</p>
  </a>
  <a class="guide-card" href="/dual-nozzle/">
    <h3>双喷嘴专题</h3>
    <p>双色多色、易拆支撑、PVA 水溶支撑与主辅喷嘴分工规则。</p>
  </a>
  <a class="guide-card" href="/troubleshooting/">
    <h3>缺陷排查</h3>
    <p>按症状检索：附着翘边、拉丝、层裂、堵头、表面质量、悬垂与顶面问题。</p>
  </a>
  <a class="guide-card" href="/modeling/">
    <h3>建模与设计</h3>
    <p>Tinkercad、Fusion 360、Blender 学习顺序，以及面向 3D 打印的设计规范。</p>
  </a>
  <a class="guide-card" href="/post-processing/">
    <h3>后处理</h3>
    <p>拆支撑、逐级打磨、补土上色、攻丝与热熔螺母、部件粘合。</p>
  </a>
  <a class="guide-card" href="/maintenance/">
    <h3>维护保养</h3>
    <p>喷嘴、滤芯、导轨、耗材干燥的周期表与日常检查流程。</p>
  </a>
  <a class="guide-card" href="/advanced/">
    <h3>专家进阶</h3>
    <p>挤出与热学原理、维护维修、进阶切片策略与后续工艺拓展方向。</p>
  </a>
</div>

## 新手五条习惯

1. **一次只改一个变量**：温度、速度、冷却同时调整，无法判断是哪一项起了作用。
2. **保留失败件和日志**：失败件是最好的教材；记录耗材批次、参数、环境温湿度、缺陷照片与改动。
3. **先理解原理，再记数值**：理解层间结合依赖热量传递，比背住某一材料的固定温度更能应对新工况。
4. **每个阶段做可验证的小项目**：例如阶段三完成一件双色钥匙扣，阶段四完成一个可开合卡扣盒。
5. **定期更新固件与配置**：更新前留意官方 Wiki 的版本说明；更新后回归一次基础测试件。

<style>
.hero {
  margin: 1.5rem 0 2rem;
  padding: 1.8rem 1.6rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
}
.hero-lede {
  font-size: 17px;
  line-height: 1.9;
  color: var(--vp-c-text-2);
  max-width: 720px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 1rem 0;
}
.btn {
  display: inline-block;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.hero-note {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin: 0;
}
.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
  margin: 1rem 0;
}
.guide-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px 18px;
  text-decoration: none;
  color: inherit;
  transition: border-color .15s ease;
}
.guide-card:hover {
  border-color: var(--vp-c-brand-2);
}
.guide-card h3 {
  margin: 0 0 6px;
  font-size: 16px;
  color: var(--vp-c-brand-1);
}
.guide-card p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
</style>
