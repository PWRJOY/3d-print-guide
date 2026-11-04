// 机型参数数据源：站点内机型页、参数表组件全部从这里读取。
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
      '双喷嘴、主动腔温、AI 摄像头监测的桌面 FDM 打印机：主喷嘴负责模型主体，辅助喷嘴负责支撑与换色，是双喷嘴方案的代表机型。',
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
    id: 'h2d',
    name: '拓竹 H2D',
    brand: 'Bambu Lab 拓竹科技',
    status: 'active',
    intro:
      '双喷头 + 激光/刀切模块的个人智造中心：350 ℃ 喷嘴、65 ℃ 主动腔温与 350 mm 并集打印体积，打印之外还能雕刻与切割。',
    printVolume: [
      { label: '单喷嘴模式', value: '325 × 320 × 325 mm' },
      { label: '双喷嘴交集', value: '300 × 320 × 320 mm' },
      { label: '双喷嘴并集', value: '350 × 320 × 320 mm' }
    ],
    hotend: {
      nozzleMaxTemp: '350 ℃',
      standardNozzle: '0.4 mm 硬化钢',
      supportedNozzles: ['0.2 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
      nozzleMaterial: '硬化钢',
      filamentDiameter: '1.75 mm',
      maxFlow: '标准流量热端 40 mm³/s；可选高流量热端 65 mm³/s'
    },
    bed: {
      maxTemp: '120 ℃',
      plateTypes: ['纹理 PEI 打印板', '光面 PEI 打印板']
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
        'PLA、PETG、TPU、PVA、BVOH、ABS、ASA、PC、PA、PET',
        '碳/玻璃纤维增强：PLA、PETG、PA、PET、PC、ABS、ASA',
        'PPA-CF/GF、PPS、PPS-CF/GF'
      ],
      auxiliaryHotend: [],
      caution: []
    },
    sensors: [
      '实况摄像头 1920×1080',
      '喷嘴摄像头 1920×1080',
      '工具头摄像头 1920×1080',
      '俯视摄像头 3264×2448（激光版标配）',
      '开门检测',
      '断料检测',
      '缠料检测',
      '耗材用量及余料检测（配合 AMS）',
      '断电续打'
    ],
    software: [
      'Bambu Studio / Bambu Suite（Windows / macOS）',
      'Bambu Handy 手机端应用',
      '兼容可导出标准 G 代码的第三方切片：SuperSlicer、PrusaSlicer、Cura（部分智能功能不可用）'
    ],
    highlights: [
      '350 ℃ 硬化钢喷嘴 + 65 ℃ 主动腔温，覆盖 PPS、PPA 等高性能耗材',
      '可选 10 W / 40 W 激光模块与刀切模块，打印之外支持雕刻、切割',
      '双喷头系统：单喷嘴 325 mm、双喷嘴并集 350 mm 打印体积',
      '2 TOPS 神经网络处理单元（NPU）',
      '三级过滤：G3 初效 + H12 HEPA + 椰壳活性炭'
    ],
    notes: [
      '激光模块为 4 类激光产品（整机防护完整时为 1 类），使用时必须使用安全钥匙并连接排烟；非激光版可通过激光升级套装升级。',
      '俯视摄像头与激光气流辅助气泵仅激光版标配，非激光版需升级套装。',
      '机器分高低电压版本，请根据使用地区购买对应版本。'
    ],
    sources: [
      'https://bambulab.com/zh/h2d/tech-specs'
    ]
  },
  {
    id: 'p2s',
    name: '拓竹 P2S',
    brand: 'Bambu Lab 拓竹科技',
    status: 'active',
    intro:
      'P 系列新一代多色机型：封闭机箱、PMSM 伺服挤出与动态流量校准，工程耗材兼容面广，标配 5 英寸触控屏与高清监控。',
    printVolume: [{ label: '打印体积', value: '256 × 256 × 256 mm' }],
    hotend: {
      nozzleMaxTemp: '300 ℃',
      standardNozzle: '0.4 mm 硬化钢',
      supportedNozzles: ['0.2 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
      nozzleMaterial: '硬化钢',
      filamentDiameter: '1.75 mm',
      maxFlow: '40 mm³/s'
    },
    bed: {
      maxTemp: '110 ℃',
      plateTypes: ['纹理 PEI 打印板（标配）', '光面 PEI 打印板', '增稳低温打印板']
    },
    chamber: null,
    speed: {
      maxVelocity: '600 mm/s',
      maxAcceleration: '20000 mm/s²'
    },
    materials: {
      mainHotend: [
        'PLA、PETG、ABS、ASA、TPU、PET、PA、PC、PVA',
        'Support for PLA、Support for PLA/PETG、Support for ABS',
        '碳纤/玻纤增强：PLA-CF、PETG-CF、ABS-GF、ASA-CF、PA6-CF、PA6-GF、PAHT-CF、PPA-CF、PET-CF'
      ],
      auxiliaryHotend: [],
      caution: []
    },
    sensors: [
      '内置摄像头 1920×1080（30 fps 高清）',
      '开门检测',
      '断料检测',
      '缠料检测',
      '耗材用量及余料检测（配合 AMS）',
      '断电续打'
    ],
    software: [
      'Bambu Studio（Windows / macOS / Linux）',
      '兼容可导出标准 G 代码的第三方切片：SuperSlicer、PrusaSlicer、Cura（部分智能功能不可用）',
      'Bambu Handy 手机端应用'
    ],
    highlights: [
      '封闭机箱（塑胶+玻璃）+ 活性炭滤芯，适合 ABS/ASA 等工程耗材',
      'PMSM 伺服挤出电机 + 动态流量校准 + 快拆热端',
      '广谱耗材兼容：含 PAHT-CF、PPA-CF、PET-CF 等增强工程料',
      '5 英寸 854×480 触控屏 + 2 TOPS NPU'
    ],
    notes: [
      '仅支持无线网络（双频 Wi-Fi），不支持以太网。',
      '封闭机箱配备活性炭滤芯，支持 VOC 与颗粒物过滤。',
      '工作环境温度要求 10–30 ℃。'
    ],
    sources: [
      'https://bambulab.cn/zh-cn/p2s/specs'
    ]
  },
  {
    id: 'a2l',
    name: '拓竹 A2L',
    brand: 'Bambu Lab 拓竹科技',
    status: 'active',
    intro:
      '330 mm 大尺寸入门机型：开放框架、伺服挤出电机与弹性打印钢板，支持刀切模组扩展，适合大型件与大尺寸创作。',
    printVolume: [{ label: '打印体积', value: '330 × 320 × 325 mm' }],
    hotend: {
      nozzleMaxTemp: '300 ℃',
      standardNozzle: '0.4 mm 不锈钢',
      supportedNozzles: ['0.2 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
      nozzleMaterial: '不锈钢',
      filamentDiameter: '1.75 mm',
      maxFlow: '28 mm³/s'
    },
    bed: {
      maxTemp: '80 ℃',
      plateTypes: ['纹理 PEI 打印板（标配）', '工程材料打印板', '增稳低温打印板']
    },
    chamber: null,
    speed: {
      maxVelocity: '500 mm/s',
      maxAcceleration: '10000 mm/s²'
    },
    materials: {
      mainHotend: [
        'PLA、PETG、TPU、PVA',
        'PLA-CF、PETG-CF（需更换硬化钢喷嘴）'
      ],
      auxiliaryHotend: [],
      caution: []
    },
    sensors: [
      '低帧率摄像头 最高 1080P（支持延时摄影）',
      '断料检测',
      '缠料检测',
      '线料用量检测',
      '断电续打',
      '裹头检测'
    ],
    software: [
      'Bambu Studio（Windows / macOS / Linux）',
      '兼容可导出标准 G 代码的第三方切片：SuperSlicer、PrusaSlicer、Cura（部分智能功能不可用）',
      'Bambu Handy 手机端应用'
    ],
    highlights: [
      '330 mm 大尺寸打印体积，开放框架适合大型创作',
      '伺服挤出电机 + 内置工具头切刀',
      '可选刀切模组：切割与绘画面积最大 300 mm',
      '标配纹理 PEI 弹性打印钢板'
    ],
    notes: [
      '开放框架机型，打印 ABS/ASA 等需要保温的材料时需外部环境配合。',
      'PLA-CF / PETG-CF 需更换硬化钢喷嘴后使用。',
      '工作环境温度要求 15–30 ℃。'
    ],
    sources: [
      'https://bambulab.cn/zh-cn/a2l/specs'
    ]
  },
  {
    id: 'a1',
    name: '拓竹 A1',
    brand: 'Bambu Lab 拓竹科技',
    status: 'active',
    intro:
      'A 系列标准版：256 mm 打印体积、全金属热端与闭环冷却，搭配 AMS Lite 实现多色打印，是入门到进阶的全能单喷头机型。',
    printVolume: [{ label: '打印体积', value: '256 × 256 × 256 mm' }],
    hotend: {
      nozzleMaxTemp: '300 ℃',
      standardNozzle: '0.4 mm 不锈钢',
      supportedNozzles: ['0.2 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
      nozzleMaterial: '不锈钢',
      filamentDiameter: '1.75 mm',
      maxFlow: '28 mm³/s（@ABS，280 ℃）'
    },
    bed: {
      maxTemp: '100 ℃',
      plateTypes: ['纹理 PEI 打印面板', '低温打印面板', '高温打印面板', '纹理+光面 PEI 打印面板']
    },
    chamber: null,
    speed: {
      maxVelocity: '500 mm/s',
      maxAcceleration: '10000 mm/s²'
    },
    materials: {
      mainHotend: ['PLA', 'PETG', 'TPU', 'PVA'],
      auxiliaryHotend: [],
      caution: ['ABS、ASA、PC、PA、PET 及碳/玻璃纤维增强耗材官方标注不推荐']
    },
    sensors: [
      '低帧率监控摄像头 最高 1920×1080（支持延时摄影）',
      '断料检测',
      '线料用量检测',
      '断电续打',
      '缠料检测'
    ],
    software: [
      'Bambu Studio（Windows / macOS）',
      '兼容可导出标准 G 代码的第三方切片：SuperSlicer、PrusaSlicer、Cura（部分智能功能不可用）',
      'Bambu Handy 手机端应用'
    ],
    highlights: [
      '256 mm 打印体积 + AMS Lite 多色生态',
      '全金属热端 + 内置工具头切刀 + 闭环冷却',
      '300 ℃ 喷嘴 + 100 ℃ 热床，适合 PLA/PETG/TPU 常用耗材'
    ],
    notes: [
      '开放框架机型，ABS、ASA、PC、PA、PET 及碳/玻璃纤维增强耗材官方标注不推荐打印。',
      '工作环境温度要求 10–30 ℃。'
    ],
    sources: [
      'https://bambulab.com/zh/a1/tech-specs'
    ]
  }
]
