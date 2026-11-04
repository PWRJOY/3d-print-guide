<script setup lang="ts">
// X2D 使用经验与专属说明：原独立页面 docs/printers/x2d.md 并入机型选项卡，
// 仅在机型页选中 X2D 时渲染。
import { withBase } from 'vitepress'
</script>

<template>
  <section class="x2d-notes">
    <p class="lead">参数表之外的使用经验、能力边界与注意事项。</p>

    <h3>1. 双喷嘴系统怎么分工</h3>
    <ul>
      <li><strong>主喷嘴</strong>：打印模型主体，配备主动流量校准与永磁同步伺服挤出电机，精度与表面质量优先走主喷嘴。</li>
      <li><strong>辅助喷嘴</strong>：承担支撑材料与换色任务；打印质量略低于主喷嘴，建议优先使用官方耗材。</li>
      <li>切换由工具头内部齿轮联动机构完成，适合日常易拆支撑与双色打印；复杂内腔、织物褶皱、内部通道可以放心交给辅助喷嘴支撑，成型后再剥离。</li>
    </ul>

    <h4>辅助喷嘴使用限制</h4>
    <ul>
      <li>TPU 不推荐使用辅助喷嘴打印。</li>
      <li>丝绸 PLA、PETG-CF、ASA-CF、PA6-CF、AMS 专用 TPU、PA/PET 支撑专用耗材属于谨慎使用类别；追求最佳细节时优先走主喷嘴。</li>
      <li>纤维增强材料在辅助喷嘴上的兼容范围窄于主喷嘴，使用前核对参数表兼容清单。</li>
    </ul>

    <h3>2. 温控能力与材料选择</h3>
    <ul>
      <li>喷嘴最高 <strong>300 ℃</strong>、热床最高 <strong>120 ℃</strong>、主动腔温最高 <strong>65 ℃</strong>，覆盖 PLA、PETG、TPU、ABS、ASA、PET、PA、PC 及多数纤维增强耗材。</li>
      <li>腔温主要服务工程材料：稳定层间热量、减少大型件翘曲与层间分离；打印 PLA 等低温材料时按材料要求控制冷却。</li>
      <li>标准流量热端最大流速 40 mm³/s，可选高流量热端 65 mm³/s；高速大流量打印前核对热端配置。</li>
    </ul>

    <h3>3. 自动化校准与精度机制</h3>
    <ul>
      <li><strong>动态流量校准</strong>：为挤出系统建立随时间变化的非线性模型，补偿喷嘴残留、磨损与轻微受潮带来的流量偏差；该功能仅主喷嘴具备。</li>
      <li><strong>振动补偿</strong>：抵消高速运动下的振纹与鬼影，保持边缘锐利。</li>
      <li><strong>视觉编码板</strong>：捕捉皮带松弛与机械偏移并做补偿，保持长期精度；该模块需在官方商城另行选购。</li>
      <li><strong>自动轴孔补偿</strong>：在 Bambu Studio 中启用并使用指定官方耗材后生效；当前仅支持垂直正圆孔，不支持水平孔、斜孔与非正圆孔。</li>
    </ul>

    <h3>4. 传感器与 AI 监测</h3>
    <ul>
      <li>实况摄像头与工具头摄像头在打印前扫描板面异物与打印板位置；打印中实时监测炒面、裹头、废料滑梯堵塞等异常，必要时暂停任务。</li>
      <li>传感器覆盖送料路径、断料、缠料、耗材用量（配合 AMS）、开门检测与断电续打。</li>
      <li>保持镜头与传感器窗口清洁；滤芯按 <a :href="withBase('/maintenance/')">维护保养</a> 周期更换。</li>
    </ul>

    <h3>5. 日常使用边界</h3>
    <ul>
      <li>工作环境温度 10–30 ℃；环境过热或过冷都会影响温控稳定性。</li>
      <li>机器支持 Bambu Studio 与可导出标准 G 代码的第三方切片（SuperSlicer、PrusaSlicer、Cura 等），但智能校准、自动补偿等功能仅在官方软件配置下完整可用。</li>
      <li>固件大约每三个月一次重大更新；更新前阅读官方 Wiki 说明，更新后回归基础测试件。</li>
    </ul>

    <h3>6. 参数来源</h3>
    <ul class="source-list">
      <li><a href="https://bambulab.cn/zh-cn/x2d/specs" target="_blank" rel="noopener noreferrer">拓竹 X2D 技术参数（官方）</a></li>
      <li><a href="https://bambulab.com/zh/x2d" target="_blank" rel="noopener noreferrer">拓竹 X2D 产品介绍（官方）</a></li>
    </ul>
  </section>
</template>

<style scoped>
.x2d-notes {
  margin: 1.6rem 0 0.4rem;
  padding-top: 1.2rem;
  border-top: 1px dashed var(--vp-c-divider);
}
.x2d-notes h3 {
  font-size: 15px;
  margin: 0 0 0.4rem;
  color: var(--vp-c-brand-1);
}
.x2d-notes .lead {
  margin: 0 0 1rem;
  font-size: 13px;
  color: var(--vp-c-text-3);
}
.x2d-notes h3 {
  font-size: 14px;
  margin: 1.2rem 0 0.4rem;
  color: var(--vp-c-text-1);
}
.x2d-notes h4 {
  font-size: 13px;
  margin: 0.8rem 0 0.3rem;
  color: var(--vp-c-text-2);
}
.x2d-notes ul {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.x2d-notes ul li + li {
  margin-top: 0.2rem;
}
.source-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.8;
}
.source-list a {
  word-break: break-all;
}
</style>
