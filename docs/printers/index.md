<script setup>
import PrinterTabs from '.vitepress/theme/components/PrinterTabs.vue'
</script>

# 机型库

本站首发完整录入 **拓竹 X2D**；其余机型为预留槽位，待核对官方规格后补入数据文件，选项卡会自动出现对应参数。

> 参数唯一来源是 `docs/.vitepress/data/printers.ts`。新增机型时在该文件追加一条记录，页面无需改动。

<PrinterTabs />

## 机型对比阅读原则

- 先看**热端温度、热床温度、腔温能力**三者组合，判断能覆盖哪些材料。
- 再看**喷嘴直径选择、流量上限、冷却方案**，判断细节与速度上限。
- 双喷嘴机型要区分**主喷嘴与辅助喷嘴能力差异**，不要把辅助喷嘴参数等同于主喷嘴。
- 传感器与自动化功能只作为便利条件，最终质量仍由参数、材料与维护决定。

X2D 的使用经验、限制与专属注意事项见：[拓竹 X2D 专属说明](/printers/x2d)。
