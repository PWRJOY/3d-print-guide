<script setup>
import StageTimeline from '@/.vitepress/theme/components/StageTimeline.vue'
// 站点部署在 base 子路径下；手写 HTML 链接不会自动补 base，这里用 Vite 注入的 BASE_URL 拼接。
const base = import.meta.env.BASE_URL
</script>

# 3D打印指南

<div class="hero">
  <p class="hero-lede">围绕拓竹 X2D 编写的 FDM 3D 打印学习手册：从开箱首打，到切片、材料、双喷嘴、建模与故障排查，按阶段一步步走到独立排障与原创设计。</p>
  <div class="hero-actions">
    <a class="btn primary" :href="base + 'getting-started/'">开始快速上手</a>
    <a class="btn" :href="base + 'printers/'">查看机型参数</a>
  </div>
  <p class="hero-note">当前录入机型：拓竹 X2D；其他机型在机型库中预留槽位，后续核对官方资料后补充。</p>
</div>

## 五阶段成长路线

不要跳过阶段：前一阶段没有独立完成过关标准，再进入下一阶段。

<StageTimeline />

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
</style>
