# 3D打印指南

围绕拓竹 X2D 编写的 FDM 3D 打印学习手册，基于 VitePress 构建，通过 Git 管理内容，可部署到 GitHub Pages。

## 本地开发

环境要求：Node.js 20+、npm。

```bash
# 安装依赖
npm install

# 本地预览（默认端口 28137）
npm run docs:dev

# 生产构建
npm run docs:build

# 预览构建产物
npm run docs:preview
```

## 目录结构

```
3d-print-guide/
├── .github/workflows/deploy.yml      # 推送 main 自动构建发布 GitHub Pages
├── docs/
│   ├── index.md                      # 首页：成长路线与板块入口
│   ├── getting-started/              # 快速上手
│   ├── printers/                     # 机型库
│   ├── slicer/                        # 切片教程
│   ├── materials/                     # 材料百科
│   ├── dual-nozzle/                   # 双喷嘴专题
│   ├── troubleshooting/               # 缺陷排查
│   ├── modeling/                      # 建模与 DfAM
│   ├── post-processing/              # 后处理
│   ├── maintenance/                   # 维护保养
│   ├── advanced/                      # 专家进阶
│   ├── resources.md                   # 外部资源
│   ├── public/                        # 图片、附件等静态资源
│   └── .vitepress/
│       ├── config.mts                  # 导航、侧边栏、搜索与站点配置
│       ├── theme/
│       │   ├── index.ts
│       │   ├── style.css              # 主题配色与全局样式
│       │   └── components/             # 复用页面组件
│       └── data/                      # 机型、材料、缺陷、阶段路线数据源
└── package.json
```

## 写作规范

1. **教程正文用 Markdown**；结构化参数、材料条目、缺陷条目统一放在 `.vitepress/data/` 数据文件中，由组件读取渲染，不要在页面里重复维护表格数据。
2. **事实可追溯**：机型参数、材料温度窗口必须附官方或厂商来源链接；经验性结论与官方参数分开表述。官方未公布或尚未核对的字段留空，不编造。
3. **每篇文档开头**标注所属板块与适用机型；新增页面后在 `config.mts` 对应侧边栏分组登记路由。
4. **一次只改一个参数**是教程内容贯穿的排查原则；故障条目按「症状 → 成因 → 对策」组织。
5. 图片与附件按「图片与附件」一节的规范存放和引用。

## 图片与附件

### 两种存放方式

1. **页面专属图**：在该页面所在目录建 `images/` 子目录，用相对路径引用，构建时自动打包并带缓存哈希。
2. **跨页面复用图**：放入 `docs/public/images/`，用 `/images/...` 引用；可下载模板、日志文件放入 `docs/public/files/`，用 `/files/...` 引用。

### 基础 Markdown 写法

```md
![开箱配件对照](/images/getting-started/unboxing-01.png)
```

指定显示宽度（只写宽度，高度等比）：

```md
![层高示意](/images/slicer/layer-height.png =640x)
```

### 需要图注、边框或多图并排时用 HTML

```html
<div class="figure">
  <img src="/images/slicer/supports-01.png" alt="支撑角度示意" />
  <p class="caption">图：不同悬垂角度与支撑位置对照</p>
</div>

<div class="figure-row">
  <figure>
    <img src="/images/troubleshooting/stringing-before.png" alt="调整前" />
    <figcaption>调整前</figcaption>
  </figure>
  <figure>
    <img src="/images/troubleshooting/stringing-after.png" alt="调整后" />
    <figcaption>调整后</figcaption>
  </figure>
</div>
```

`.figure`、`.caption`、`.figure-row` 通用样式已在 `theme/style.css` 中定义，直接使用即可。

### 命名与体积约定

- 文件名小写英文加连字符，按板块分子目录：`/images/slicer/`、`/materials/`、`/troubleshooting/`。
- 软件界面截图用 PNG；照片与大图用 JPG / WebP；单图尽量控制在 500 KB 内，宽屏配图宽度 1200–1600 px。
- 图片必须先存进工程目录，不引用外部 CDN 或会过期的网络临时链接。
- 附件下载链接：`[下载打印日志模板](/files/print-log-template.md)`。

## 新增一篇教程

1. 在对应板块目录新建 `.md` 文件，按现有页面模板写内容。
2. 在 `docs/.vitepress/config.mts` 该板块 `sidebar` 数组中加入页面链接。
3. 如需新增组件，放到 `theme/components/`，在页面 `<script setup>` 中引入使用。

## 新增一台机型

1. 打开 `docs/.vitepress/data/printers.ts`，照现有接口在 `printers` 数组追加一条记录。
2. 参数已核对完整则 `status: "active"`；尚未核对则 `status: "planned"`，页面自动显示预留槽位。
3. 需要专属说明时在 `docs/printers/` 新建一篇 Markdown，并在侧边栏登记。

## 发布到 GitHub Pages

站点发布在 `https://<GitHub 用户名>.github.io/3d-print-guide/` 子路径下，`config.mts` 的 `base` 已设为 `'/3d-print-guide/'`。

首次发布步骤：

1. 在 GitHub 网页端创建空仓库 `3d-print-guide`（不要勾选初始化 README、.gitignore 或 License）。
2. 本地添加远程地址并推送 `main` 分支。
3. 仓库 Settings → Pages，部署来源选择 **GitHub Actions**。
4. 推送后 `.github/workflows/deploy.yml` 自动构建并发布；Actions 页面可查看部署结果，首次成功后在线地址由 Pages 页面给出。

后续每次推送 `main`，工作流都会自动重新构建并发布。

## 内容边界

本站为个人学习手册，不构成设备维修、材料选型或工业应用的专业依据；实际打印参数以官方配置文件与耗材厂商说明为准。
