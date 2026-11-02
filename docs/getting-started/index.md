# 快速上手

本板块面向第一次接触 3D 打印、使用拓竹 X2D 的新手。按顺序走完四步，目标是在第一周内独立完成一次成功打印，并知道出问题时去哪里排查。

## 学习顺序

<div class="steps">
  <a class="step" href="/getting-started/01-unboxing">
    <span class="step-no">01</span>
    <div>
      <h3>开箱清点与环境准备</h3>
      <p>配件核对、供电与通风、安全注意事项。</p>
    </div>
  </a>
  <a class="step" href="/getting-started/02-software">
    <span class="step-no">02</span>
    <div>
      <h3>软件安装与配网</h3>
      <p>Bambu Studio、Bambu Handy 安装、账号绑定与 Wi-Fi 连接。</p>
    </div>
  </a>
  <a class="step" href="/getting-started/03-calibration">
    <span class="step-no">03</span>
    <div>
      <h3>首次校准</h3>
      <p>热床调平、流量校准、振动补偿与打印板检查。</p>
    </div>
  </a>
  <a class="step" href="/getting-started/04-first-print">
    <span class="step-no">04</span>
    <div>
      <h3>第一组测试件</h3>
      <p>首层测试片、Benchy 小船、校准方块与首打成功标准。</p>
    </div>
  </a>
</div>

## 第一周原则

- 第一周不修改官方预设参数，不更换喷嘴，不尝试陌生材料。
- 使用随机官方 PLA 与官方配置文件，先把机器跑稳。
- 打印开始后重点观察前 3–5 层；绝大多数早期失败都会在首层暴露。
- 遇到问题先查 [缺陷排查](/troubleshooting/) 板块，不要凭感觉同时调整多个参数。

<style>
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin: 1rem 0;
}
.step {
  display: flex;
  gap: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
}
.step-no {
  font-size: 22px;
  font-weight: 700;
  color: var(--vp-c-brand-3);
}
.step h3 { margin: 0 0 6px; font-size: 16px; }
.step p { margin: 0; font-size: 14px; color: var(--vp-c-text-2); }
</style>
