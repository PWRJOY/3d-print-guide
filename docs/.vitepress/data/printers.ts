// 机型参数数据源：站点内机型选项卡、参数表组件全部从这里读取。
// 新增机型 = 在 printers 数组中追加一条记录；status: "planned" 的机型显示为预留槽位。
// 参数必须标注 sources 来源；官方未公布或尚未核对的字段留 null，不在页面上编造。

export interface PrintVolume {
  label: string
  value: string
}

export interface HotendSpec {
  nozzleMaxTemp: string
  standardNozzle: string
  supportedNozzles: string[]
  nozzleMaterial: string
  filamentDiameter: string
  maxFlow?: string
}

export interface BedSpec {
  maxTemp: string
  plateTypes: string[]
}

export interface ChamberSpec {
  activeHeating: boolean
  maxTemp: string
}

export interface SpeedSpec {
  maxVelocity: string
  maxAcceleration: string
}

export interface MaterialSupport {
  mainHotend: string[]
  auxiliaryHotend: string[]
  caution: string[]
}

export interface PrinterProfile {
  id: string
  name: string
  brand: string
  status: 'active' | 'planned'
  intro: string
  printVolume: PrintVolume[]
  hotend: HotendSpec | null
  bed: BedSpec | null
  chamber: ChamberSpec | null
  speed: SpeedSpec | null
  materials: MaterialSupport | null
  sensors: string[]
  software: string[]
  highlights: string[]
  notes: string[]
  sources: string[]
}

export const printers: PrinterProfile[] = [
  {
    id: 'x2d',
    name: '拓竹 X2D',
    brand: 'Bambu Lab 拓竹科技',
    status: 'active',
    intro:
      '双喷嘴、主动腔温、AI 摄像头监测的桌面 FDM 打印机：主喷嘴负责模型主体，辅助喷嘴负责支撑与换色，是本站当前录入的机型。',
    printVolume: [
      { label: '主热端单喷嘴', value: '256 × 256 × 260 mm' },
      { label: '辅助热端单喷嘴', value: '235.5 × 256 × 256 mm' },
      { label: '双喷嘴交集', value: '235.5 × 256 × 256 mm' },
      { label: '双喷嘴并集', value: '256 × 256 × 260 mm' }
    ],
    hotend: {
      nozzleMaxTemp: '300 ℃',
      standardNozzle: '0.4 mm 硬化钢',
      supportedNozzles: ['0.2 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
      nozzleMaterial: '硬化钢',
      filamentDiameter: '1.75 mm',
      maxFlow: '标准流量热端 40 mm³/s；可选高流量热端 65 mm³/s'
    },
    bed: {
      maxTemp: '120 ℃',
      plateTypes: ['纹理 PEI 打印板', '光面 PEI 打印板', '增稳低温打印板', '工程材料打印板']
    },
    chamber: {
      activeHeating: true,
      maxTemp: '65 ℃'
    },
    speed: {
      maxVelocity: '1000 mm/s',
      maxAcceleration: '20000 mm/s²'
    },
    materials: {
      mainHotend: [
        'PLA', 'PETG', 'ABS', 'ASA', 'TPU', 'PET', 'PA', 'PC',
        'PLA 支撑专用耗材', 'PLA/PETG 支撑专用耗材', 'ABS 支撑专用耗材', 'PA/PET 支撑专用耗材',
        'PVA 水溶性支撑耗材',
        '碳纤/玻纤增强：PLA、PETG、ABS、ASA、PA6、PAHT、PPA、PET'
      ],
      auxiliaryHotend: [
        'PLA（不含发泡 PLA）', 'PETG', 'ABS', 'ASA', 'AMS 专用 TPU', 'PET', 'PA', 'PC',
        'PLA 支撑专用耗材', 'PLA/PETG 支撑专用耗材', 'ABS 支撑专用耗材', 'PA/PET 支撑专用耗材',
        'PVA 水溶性支撑耗材',
        '碳纤/玻纤增强：PLA、PETG、ABS、ASA、PA6、PAHT、PET'
      ],
      caution: [
        '辅助喷嘴谨慎打印：丝绸 PLA、PETG-CF、ASA-CF、PA6-CF、AMS 专用 TPU、PA/PET 支撑专用耗材',
        'TPU 不推荐使用辅助喷嘴打印',
        '追求最佳表面精度与细节时，谨慎类耗材优先走主喷嘴'
      ]
    },
    sensors: [
      '实况摄像头 1920×1080（支持延时摄影）',
      '工具头摄像头 1600×1200',
      '开门检测',
      '断料检测',
      '缠料检测',
      '耗材用量及余料检测（配合 AMS）',
      '断电续打',
      '视觉编码板（运动精度增强，需另购）'
    ],
    software: [
      'Bambu Studio（Windows / macOS / Linux）',
      '兼容可导出标准 G 代码的第三方切片：SuperSlicer、PrusaSlicer、Cura（部分智能功能不可用）',
      'Bambu Handy 手机端应用'
    ],
    highlights: [
      '双喷嘴：辅助喷嘴承担支撑与换色，易拆支撑与双色打印更简单',
      '主动腔温最高 65 ℃，工程材料层间结合更稳定',
      '300 ℃ 喷嘴 + 120 ℃ 热床，覆盖尼龙、PC 等多数高性能耗材',
      'AI 双摄像头监测打印前板上异物与打印中炒面、裹头、滑梯堵塞',
      '动态流量校准、振动补偿、视觉编码板保持长期精度',
      '三级过滤：G3 初效 + H12 HEPA + 椰壳活性炭'
    ],
    notes: [
      '仅主喷嘴具备主动流量校准功能；仅主挤出机配备永磁同步伺服（PMSM）电机。',
      '辅助喷嘴的打印质量略低于主喷嘴，建议优先使用官方耗材。',
      '自动轴孔补偿需在 Bambu Studio 中启用并使用指定官方耗材；当前仅支持垂直正圆孔，不支持水平孔、斜孔与非正圆孔。',
      '视觉精度编码板需在官方商城另行选购。',
      '工作环境温度要求 10–30 ℃；打印后请按周期更换空气滤芯。'
    ],
    sources: [
      'https://bambulab.cn/zh-cn/x2d/specs',
      'https://bambulab.com/zh/x2d'
    ]
  },
  {
    id: 'x1c',
    name: '拓竹 X1C',
    brand: 'Bambu Lab 拓竹科技',
    status: 'planned',
    intro: '参数待录入：本站后续核对官方规格后补充，暂不提供对比数据。',
    printVolume: [],
    hotend: null,
    bed: null,
    chamber: null,
    speed: null,
    materials: null,
    sensors: [],
    software: [],
    highlights: [],
    notes: [],
    sources: []
  },
  {
    id: 'p1s',
    name: '拓竹 P1S',
    brand: 'Bambu Lab 拓竹科技',
    status: 'planned',
    intro: '参数待录入：本站后续核对官方规格后补充，暂不提供对比数据。',
    printVolume: [],
    hotend: null,
    bed: null,
    chamber: null,
    speed: null,
    materials: null,
    sensors: [],
    software: [],
    highlights: [],
    notes: [],
    sources: []
  },
  {
    id: 'a1mini',
    name: '拓竹 A1 mini',
    brand: 'Bambu Lab 拓竹科技',
    status: 'planned',
    intro: '参数待录入：本站后续核对官方规格后补充，暂不提供对比数据。',
    printVolume: [],
    hotend: null,
    bed: null,
    chamber: null,
    speed: null,
    materials: null,
    sensors: [],
    software: [],
    highlights: [],
    notes: [],
    sources: []
  }
]
