import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// 站点全局配置：导航、侧边栏、搜索、页脚统一在这里维护。
// 新增教程页面后，在对应 sidebar 分组里登记一条即可。
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('..', import.meta.url))
      }
    }
  },
  lang: 'zh-CN',
  title: '3D打印指南',
  description: '围绕拓竹 X2D 编写的 FDM 3D 打印学习手册：从开箱首打到材料、切片、建模与故障排查。',
  // GitHub Pages 发布在仓库名子路径下；本地 dev/preview 由 VitePress 自动适配前缀。
  base: '/3d-print-guide/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/3d-print-guide/favicon.svg' }]
  ],

  themeConfig: {
    siteTitle: '3D打印指南',
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除搜索',
            footer: { selectText: '选择', navigateText: '前往', closeText: '关闭' }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/getting-started/' },
      { text: '机型库', link: '/printers/' },
      {
        text: '工艺',
        items: [
          { text: '切片教程', link: '/slicer/' },
          { text: '材料百科', link: '/materials/' },
          { text: '双喷嘴专题', link: '/dual-nozzle/' },
          { text: '缺陷排查', link: '/troubleshooting/' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '建模与设计', link: '/modeling/' },
          { text: '后处理', link: '/post-processing/' },
          { text: '维护保养', link: '/maintenance/' },
          { text: '专家进阶', link: '/advanced/' }
        ]
      },
      { text: '资源', link: '/resources' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: '快速上手',
          items: [
            { text: '板块总览', link: '/getting-started/' },
            { text: '1. 开箱清点与环境准备', link: '/getting-started/01-unboxing' },
            { text: '2. 软件安装与配网', link: '/getting-started/02-software' },
            { text: '3. 首次校准', link: '/getting-started/03-calibration' },
            { text: '4. 第一组测试件', link: '/getting-started/04-first-print' }
          ]
        }
      ],
      '/printers/': [
        {
          text: '机型库',
          items: [
            { text: '机型总览与参数对比', link: '/printers/' },
            { text: '拓竹 X2D 专属说明', link: '/printers/x2d' }
          ]
        }
      ],
      '/slicer/': [
        {
          text: '切片教程（Bambu Studio）',
          items: [
            { text: '板块总览', link: '/slicer/' },
            { text: '层高与表面质量', link: '/slicer/layer-height' },
            { text: '壁厚、线宽与填充', link: '/slicer/walls-infills' },
            { text: '支撑策略与摆放方向', link: '/slicer/supports' },
            { text: '速度、温度与冷却', link: '/slicer/speed-cooling' },
            { text: '接缝与外观优化', link: '/slicer/seams' }
          ]
        }
      ],
      '/materials/': [
        {
          text: '材料百科',
          items: [
            { text: '板块总览与材料阶梯', link: '/materials/' },
            { text: 'PLA', link: '/materials/pla' },
            { text: 'PETG', link: '/materials/petg' },
            { text: 'TPU 柔性材料', link: '/materials/tpu' },
            { text: 'ABS / ASA', link: '/materials/abs-asa' },
            { text: 'PA 尼龙 / PC', link: '/materials/nylon-pc' },
            { text: '吸湿、干燥与存储', link: '/materials/drying-storage' }
          ]
        }
      ],
      '/dual-nozzle/': [
        {
          text: '双喷嘴专题',
          items: [
            { text: '板块总览', link: '/dual-nozzle/' },
            { text: '双色与多色打印', link: '/dual-nozzle/dual-color' },
            { text: '易拆支撑与水溶支撑', link: '/dual-nozzle/support-material' }
          ]
        }
      ],
      '/troubleshooting/': [
        {
          text: '缺陷排查手册',
          items: [
            { text: '症状检索总入口', link: '/troubleshooting/' },
            { text: '附着不良与翘边', link: '/troubleshooting/adhesion-warping' },
            { text: '拉丝与牵丝', link: '/troubleshooting/stringing' },
            { text: '层间分离与开裂', link: '/troubleshooting/layer-separation' },
            { text: '堵头与出料中断', link: '/troubleshooting/clogging' },
            { text: '表面质量问题', link: '/troubleshooting/surface-quality' }
          ]
        }
      ],
      '/modeling/': [
        {
          text: '建模与面向打印的设计',
          items: [
            { text: '板块总览与学习顺序', link: '/modeling/' },
            { text: 'Tinkercad 入门', link: '/modeling/tinkercad' },
            { text: 'Fusion 360 参数化建模', link: '/modeling/fusion-360' },
            { text: 'Blender 有机造型', link: '/modeling/blender' },
            { text: 'DfAM 打印设计规范', link: '/modeling/design-rules' }
          ]
        }
      ],
      '/post-processing/': [
        { text: '后处理工艺', items: [{ text: '打磨、上色与装配', link: '/post-processing/' }] }
      ],
      '/maintenance/': [
        { text: '维护保养', items: [{ text: '周期表与易损件', link: '/maintenance/' }] }
      ],
      '/advanced/': [
        { text: '专家进阶', items: [{ text: '原理、维修与拓展方向', link: '/advanced/' }] }
      ]
    },

    // 本地阶段暂不挂外部链接；将来连接 GitHub 仓库后在此补充仓库地址。
    socialLinks: [],
    footer: {
      message: '3D打印指南 · 个人学习手册，参数以官方文档与耗材厂商说明为准。',
      copyright: '内容采用 Git 版本管理，修改记录见仓库提交历史。'
    }
  }
})
