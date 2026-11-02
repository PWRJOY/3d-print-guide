// 材料百科数据源：材料卡片、材料阶梯总览页从这里读取。
// 温度为常见参考窗口，实际以耗材厂商推荐与 Bambu Studio 官方配置文件为准。

export interface MaterialProfile {
  id: string
  name: string
  alias: string
  difficulty: 1 | 2 | 3 | 4 | 5
  nozzleTemp: string
  bedTemp: string
  chamber: string
  useCases: string[]
  cautions: string[]
  order: number
  sourceNote: string
}

export const materials: MaterialProfile[] = [
  {
    id: 'pla',
    name: 'PLA',
    alias: '聚乳酸',
    difficulty: 1,
    nozzleTemp: '190–220 ℃',
    bedTemp: '50–65 ℃',
    chamber: '无需腔温加热',
    useCases: ['摆件与展示模型', '原型验证', '收纳与支架', 'fit check 试装件'],
    cautions: [
      '刚性但脆，受冲击易断裂，不做受力功能件',
      '耐温差：环境温度超过约 55–60 ℃ 会软化变形，避免放在车内、窗台等受热位置',
      '冷却风扇需要充分开启，保证悬垂与细节成型'
    ],
    order: 1,
    sourceNote: '新手第一种材料；使用随机官方 PLA 与官方预设即可起步。'
  },
  {
    id: 'petg',
    name: 'PETG',
    alias: '聚对苯二甲酸乙二醇酯-1,4-环己烷二甲醇酯',
    difficulty: 2,
    nozzleTemp: '230–250 ℃',
    bedTemp: '70–80 ℃',
    chamber: '无需腔温加热',
    useCases: ['支架与功能件', '外壳与容器', '耐冲击日常用品', '需要一定韧性的装配件'],
    cautions: [
      '比 PLA 更韧、层间结合更好，但更容易拉丝',
      '吸湿性中等，受潮后表面出现气泡与瑕疵，未用完需密封保存',
      '对热床附着力强，注意防止取件时拉伤打印板',
      '耐温约 75–80 ℃，不用于高温环境'
    ],
    order: 2,
    sourceNote: '介于 PLA 与 ABS 之间的功能型通用材料。'
  },
  {
    id: 'tpu',
    name: 'TPU',
    alias: '热塑性聚氨酯（常见 95A / 90A）',
    difficulty: 3,
    nozzleTemp: '210–230 ℃',
    bedTemp: '30–60 ℃',
    chamber: '无需腔温加热',
    useCases: ['软垫与防滑件', '密封圈', '柔性护套', '可活动柔性结构'],
    cautions: [
      '必须慢速打印，路径尽量短、减少回抽',
      '走主喷嘴；X2D 辅助喷嘴不推荐打印 TPU',
      '耗材过软容易在挤出齿轮打滑，注意送料路径顺畅',
      '同样需要干燥与密封存储'
    ],
    order: 3,
    sourceNote: '柔性材料，速度与回抽策略是成败关键。'
  },
  {
    id: 'abs-asa',
    name: 'ABS / ASA',
    alias: '丙烯腈-丁二烯-苯乙烯 / 丙烯酸酯苯乙烯丙烯腈',
    difficulty: 3,
    nozzleTemp: '230–260 ℃',
    bedTemp: '90–105 ℃',
    chamber: '利用 X2D 主动腔温（约 60 ℃ 区间）抑制翘边与层裂',
    useCases: ['结构外壳', '需要耐温的功能件', '户外件优先选 ASA（抗紫外线）'],
    cautions: [
      '冷却风扇需降低，保证层间热量结合',
      '必须依靠腔温控制减少冷却收缩翘边',
      '保持三级过滤系统工作，注意通风',
      '层间结合不足时优先排查温度、冷却与腔温，而不是盲目提速'
    ],
    order: 4,
    sourceNote: '户外耐候选 ASA；ABS 更通用但耐 UV 弱于 ASA。'
  },
  {
    id: 'nylon-pc',
    name: 'PA 尼龙 / PC',
    alias: '聚酰胺 / 聚碳酸酯',
    difficulty: 4,
    nozzleTemp: 'PA 240–280 ℃；PC 280–310 ℃',
    bedTemp: 'PA 70–90 ℃；PC 100–120 ℃',
    chamber: '需要稳定主动腔温，减少冷却开裂与翘曲',
    useCases: ['高强度结构件', '耐磨传动与受力件', '耐高温透明或承力零件'],
    cautions: [
      '吸湿性极强，打印前必须充分干燥，受潮会直接导致层裂与气泡',
      '需要稳定腔温与合适的热床温度',
      '先在小测试件上验证参数，再打印大尺寸结构件',
      '纤维增强版本会加速磨损喷嘴，按官方兼容清单选择喷嘴'
    ],
    order: 5,
    sourceNote: '工程材料阶段再进入，配合干燥设备与腔温条件。'
  },
  {
    id: 'pva',
    name: 'PVA',
    alias: '水溶性支撑材料',
    difficulty: 3,
    nozzleTemp: '按专用配置文件',
    bedTemp: '按专用配置文件',
    chamber: '按专用配置文件',
    useCases: ['复杂内腔与难以拆除支撑的模型', '双喷嘴水溶支撑'],
    cautions: [
      '极易吸湿，开封后必须密封干燥保存',
      '仅作为辅助喷嘴支撑材料使用',
      '成型后用水浸泡溶解，注意模型主体材料同样耐水'
    ],
    order: 6,
    sourceNote: '与双喷嘴专题配合阅读。'
  }
]
