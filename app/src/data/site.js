export const profile = {
  name: "蒋垒",
  englishName: "JiangLei",
  role: "北京联合大学 · 软件工程硕士研究生",
  focusTitle: "检索增强与数据智能",
  statement: "研究 RAG 智能体、图 RAG 与多维数据分析，并探索生成式模型在生产实践中的应用。",
  current: "RAG 智能体、图 RAG 与多维数据分析相关研究",
  location: "中国 · 北京",
  email: "754404581@qq.com",
  github: "https://github.com/jianglei1111",
  wechat: "j754404581",
  education: "北京联合大学 · 机器人学院 · 软件工程硕士研究生",
  expectedGraduation: "预计 2027 年 6 月毕业",
  researchInterests: "检索增强生成、数据存储处理与分析、智能化检索、生成式人工智能与智能体",
  interestTopics: "数据处理分析、检索增强生成、生成式人工智能、智能体",
  skills: "数据处理（多维分析）、检索增强、智能体、生成式人工智能",
  selfEvaluation: "做事认真可靠，学习勤奋刻苦，生活自律克己，敢于面对压力与逆境，对知识充满好奇心。",
  hobbies: "阅读各类经典名著（哲学类、文学类居多）、各类运动（羽毛球、健身等）。",
  photo: "images/profile/portrait.jpg",
  bio: "我是北京联合大学机器人学院软件工程专业硕士研究生，预计于 2027 年 6 月毕业。我的研究围绕检索增强生成、多维数据分析与智能化检索展开，同时关注生成式人工智能和智能体如何进入真实生产流程。我希望将研究方法、模型能力与可复用的工程实践连接起来。",
};

export const researchAreas = [
  {
    index: "01",
    title: "RAG 智能体与证据状态",
    description: "围绕 RAG 智能体、图 RAG 与证据状态展开研究，关注检索、证据组织和生成决策之间的协同关系。",
  },
  {
    index: "02",
    title: "多维数据分析与智能检索",
    description: "关注数据存储、处理和分析，重点探索多维数据库、多维分析以及面向复杂数据的智能化检索方法。",
  },
  {
    index: "03",
    title: "生成式人工智能与智能体实践",
    description: "跟进最新智能体与图像生成模型，将模型能力组合进真实工作流，探索可复用的生产实践。",
  },
];

export const academicOutputs = [
  {
    year: "2026",
    type: "论文",
    title: "多跳 RAG 中的证据组织研究",
    status: "在投",
    meta: "关注多步检索中的证据发现、筛选与组织",
    contribution: "一作",
    to: "/updates/multi-hop-rag-evidence-study",
  },
  {
    year: "2026",
    type: "论文",
    title: "RAG 检索与路由策略研究",
    status: "进行中",
    meta: "关注证据质量、处理策略与推理成本之间的平衡",
    contribution: "一作",
    to: "/updates/rag-retrieval-routing-study",
  },
  {
    year: "2025",
    type: "专著",
    title: "《多维数据库》",
    status: "已出版",
    meta: "科学出版社 · ISBN 978-7-03-083584-0",
    contribution: "主要编写者之一",
  },
  {
    year: "2025",
    type: "专利",
    title: "一种关系型数据库的自然语言查询方法及系统",
    status: "已授权",
    meta: "发明专利 · ZL 2025 1 0002847.1",
    contribution: "第四发明人",
  },
  {
    year: "2025",
    type: "专利",
    title: "一种多维数据库的自然语言查询方法及系统",
    status: "已授权",
    meta: "发明专利 · ZL 2025 1 0002755.3",
    contribution: "第三发明人",
  },
];

export const projects = [
  {
    slug: "sql-generation-system-2",
    title: "SQL Generation System 2",
    shortTitle: "Text-to-SQL",
    summary: "将自然语言问题拆解为 SQL 子句生成任务，结合数据库元数据完成校验、连接路径推导与 SQL 拼装。",
    period: "2024",
    category: "研究原型 / Text-to-SQL",
    role: "系统设计与开发",
    result: "完成分阶段 SQL 推理流程，以及 BIRD 与自建问答集的实验脚本",
    tags: ["Text-to-SQL", "LLM", "Schema Grounding", "Python"],
    repository: "https://github.com/jianglei1111/SQL_generation_system_2",
    cover: {
      src: "images/projects/sql-generation-system-2/sakila-er.png",
      alt: "Sakila 数据库实体关系图",
      fit: "contain",
    },
    images: [
      {
        src: "images/projects/sql-generation-system-2/sakila-er.png",
        alt: "Sakila 数据库实体关系图",
        caption: "实验中使用的 Sakila 数据库关系图，用于验证基于外键的多表连接路径推导。",
      },
    ],
    sections: [
      {
        title: "问题与思路",
        body: "项目面向复杂 Text-to-SQL 任务，将一次性生成改为可检查的分阶段推理。系统先从数据库元数据中筛选相关表和字段，再分别处理 SELECT、GROUP BY、HAVING、WHERE、ORDER BY、LIMIT 与 FROM / JOIN。",
      },
      {
        title: "推理流程",
        body: "每个阶段都会依据表结构、字段描述和外键关系检查模型输出，并在格式或字段不合法时有限重试。完成各子句后，系统通过外键图搜索多表连接路径，恢复别名并拼装最终 SQL。",
      },
      {
        title: "实验与边界",
        body: "仓库保留了 BIRD 子集、自建问答数据、执行结果比较和 Excel 转换脚本。当前版本属于研究实验原型，需要自行配置模型服务和数据库文件；生成的 SQL 应先在隔离、只读环境中验证。",
      },
    ],
  },
  {
    slug: "mddb-fruit-shop",
    title: "MDDB Fruit Shop",
    shortTitle: "Multidimensional Database",
    summary: "以水果零售业务为主题，设计 MySQL 多维数据模型、维度视图、事实视图与模拟营业数据。",
    period: "2024",
    category: "数据建模 / MySQL",
    role: "数据模型设计与实现",
    result: "完成零售业务表、分析维度与订单项事实视图，并配套随机数据生成器",
    tags: ["MySQL", "Multidimensional Database", "OLAP", "Python"],
    repository: "https://github.com/jianglei1111/MDDB-Fruit-Shop",
    sections: [
      {
        title: "项目目标",
        body: "项目以水果零售为业务背景，覆盖商品、规格、产地、顾客、供应商、供货、订单、退款和库存损耗等实体，用于练习从业务数据到分析模型的完整设计过程。",
      },
      {
        title: "多维模型",
        body: "在业务表之上构建时间、产品、产地和供应商维度，并形成按“日期 × 商品 × 产地 × 供应商 × 送货地址”聚合的订单项事实视图，提供重量、定价、收款、成本与毛利等分析口径。",
      },
      {
        title: "数据准备",
        body: "仓库包含 2021 年 11 月至 2024 年 1 月的模拟营业数据，同时提供 Python 随机数据生成器，可重新生成订单、退款、供货与损耗记录。数据均为学习和分析实验用途。",
      },
    ],
  },
  {
    slug: "motion-analysis-system",
    title: "Motion Analysis System",
    shortTitle: "Vision & Motion",
    summary: "基于摄像头、人体姿态与 ONNX LSTM 模型的桌面运动分析系统，支持身份识别、动作分类和运动记录。",
    period: "2024",
    category: "计算机视觉 / 桌面应用",
    role: "系统设计与开发",
    result: "完成 9 类运动识别、计数计时、人脸录入与本地结果留存流程",
    tags: ["OpenCV", "MediaPipe Pose", "ONNX", "PyQt5"],
    repository: "https://github.com/jianglei1111/motion_analysis_system",
    cover: {
      src: "images/projects/motion-analysis/motion-detection.png",
      alt: "运动检测功能图标",
      fit: "contain",
    },
    galleryStyle: "compact",
    images: [
      {
        src: "images/projects/motion-analysis/motion-detection.png",
        alt: "运动检测功能图标",
        caption: "桌面端功能选择界面中使用的运动检测入口图标。",
        fit: "contain",
      },
      {
        src: "images/projects/motion-analysis/face-recognition.png",
        alt: "人脸识别功能图标",
        caption: "学生信息与人脸特征录入流程使用的人脸识别入口图标。",
        fit: "contain",
      },
    ],
    sections: [
      {
        title: "使用流程",
        body: "用户可连接本地摄像头、视频文件或网络视频流，先录入学生学号、姓名、年级与人脸特征，再进入运动检测。系统识别身份后持续分析画面，并保存运动类型、次数、时长与开始时间。",
      },
      {
        title: "视觉分析",
        body: "系统使用 OpenCV 读取视频，以 MediaPipe Pose 提取人体关键点，再通过 ONNX Runtime 加载 LSTM 模型识别 9 类运动。识别结果与姿态关键点在 PyQt5 桌面界面中实时呈现。",
      },
      {
        title: "本地数据",
        body: "学生信息和运动记录保存在本地 JSON 文件中。由于人脸特征属于敏感生物信息，项目资料不包含真实用户数据，公开使用或部署前也需要完成脱敏与授权。",
      },
    ],
  },
  {
    slug: "postgraduate-learning-system",
    title: "数据赋能的智慧考研学习系统",
    shortTitle: "Postgraduate Learning",
    summary: "面向考研刷题与学习交流的 Web 系统，提供题目检索、OCR 搜索、个性化推荐、互动与后台分析。",
    period: "2024",
    category: "毕业设计 / Web 系统",
    role: "全栈设计与开发",
    result: "完成用户学习、点评交流、多角色管理与数据可视化等核心模块",
    tags: ["Spring Boot", "MyBatis", "MySQL", "ECharts", "OCR"],
    repository: "https://github.com/jianglei1111/postgraduate",
    cover: {
      src: "images/projects/postgraduate/question-filter.png",
      alt: "智慧考研系统习题筛选页面",
    },
    images: [
      {
        src: "images/projects/postgraduate/question-filter.png",
        alt: "智慧考研系统习题筛选页面",
        caption: "习题列表支持关键词、难度和排序筛选，并将题目图片的 OCR 文字纳入检索。",
      },
      {
        src: "images/projects/postgraduate/question-detail.png",
        alt: "智慧考研系统习题详情与评论页面",
        caption: "习题详情、用户解答与评论区集中在同一学习页面中。",
      },
      {
        src: "images/projects/postgraduate/analytics-dashboard.png",
        alt: "智慧考研系统后台数据分析页面",
        caption: "后台使用 ECharts 展示题目难度、习题集难度和互动数据。",
      },
    ],
    sections: [
      {
        title: "毕业设计背景",
        body: "系统围绕账号管理、习题学习、点评交流和后台管理四个模块展开，尝试把题目数据、用户行为与学习流程连接起来，为考研刷题和知识交流提供统一入口。",
      },
      {
        title: "学习与互动",
        body: "用户可以按科目、难度、关键词和时间筛选题目，查看解析、维护习题集并上传图文解答。推荐排序综合题目点赞、解答、评论和个人浏览次数，OCR 识别结果也会参与题目搜索。",
      },
      {
        title: "技术实现",
        body: "后端采用 Spring Boot、Spring Security、MyBatis 与 MySQL，前端使用 HTML、CSS、JavaScript、jQuery 和 ECharts。系统支持普通学生、专家、内容管理员与系统管理员等角色，并提供内容审核和数据分析能力。",
      },
    ],
  },
  {
    slug: "ordering-system",
    title: "Ordering System：云上餐厅",
    shortTitle: "Django Ordering",
    summary: "同时面向顾客与商家的餐饮点单系统，覆盖商品浏览、购物车、堂食/打包/外卖下单以及订单和库存管理。",
    period: "2022",
    category: "课程项目 / Web 系统",
    role: "全栈设计与开发",
    result: "完成顾客点单、订单跟踪，以及商家商品、库存、推荐位与订单管理流程",
    tags: ["Django", "MySQL", "JavaScript", "Web"],
    repository: "https://github.com/jianglei1111/Ordering_System",
    sections: [
      {
        title: "顾客与商家流程",
        body: "顾客端支持注册登录、个人资料、余额、商品筛选、会话购物车，以及堂食、打包和外卖三种下单方式。商家端负责商品、价格、库存、首页推荐位和订单状态管理。",
      },
      {
        title: "业务与数据",
        body: "系统围绕顾客、商家、商品、订单、订单明细和消费记录组织数据。提交订单时会计算不同就餐方式的费用，扣减顾客余额与商品库存，并保留订单快照和消费历史。",
      },
      {
        title: "技术与边界",
        body: "项目使用 Django 2.2、MySQL、Django Templates、JavaScript 与 jQuery。当前版本属于学习项目，仍存在固定商家账号、MD5 密码、模拟支付和旧版依赖等限制，不适合未经升级与安全加固直接部署到生产环境。",
      },
    ],
  },
  {
    slug: "easy-calendar",
    title: "Easy Calendar 多功能学生日历",
    shortTitle: "Student Calendar",
    summary: "面向学生日常使用的 Windows 桌面日历，将日期、教学周、天气、日程与提醒集中在一个界面中。",
    period: "2022",
    category: "课程设计 / 桌面应用",
    role: "产品设计与开发",
    result: "完成日期展示、天气查询、教学周配置、日程管理与重复提醒",
    tags: ["Python", "PyQt5", "Calendar", "Desktop"],
    repository: "https://github.com/jianglei1111/calendar",
    cover: {
      src: "images/projects/easy-calendar/main-window.png",
      alt: "Easy Calendar 主界面",
    },
    images: [
      {
        src: "images/projects/easy-calendar/main-window.png",
        alt: "Easy Calendar 主界面",
        caption: "800 × 600 主界面集中展示公历、农历、教学周、节气、天气与日程入口。",
      },
      {
        src: "images/projects/easy-calendar/feature-overview.png",
        alt: "Easy Calendar 功能结构图",
        caption: "项目围绕日期显示、天气显示和日程提醒三类核心能力展开。",
        fit: "contain",
      },
    ],
    sections: [
      {
        title: "课程设计背景",
        body: "项目希望把学生经常查看的日期、教学周和天气信息放在同一桌面入口，并为课程、任务和生活事项提供轻量的日程管理能力。",
      },
      {
        title: "功能设计",
        body: "日历支持 1901—2100 年公历、农历、星期、二十四节气与法定节假日，并可设置学期开始日期和教学周。日程支持增删改查、关键词搜索、图片或视频附件、提前提醒与重复规则。",
      },
      {
        title: "工程实现",
        body: "桌面端使用 Python 与 PyQt5 开发，配置和日程保存在本地 JSON 文件中，日期基础数据使用 TXT 文件。天气查询依赖第三方在线接口，其余核心功能可在 Windows 本地运行。",
      },
    ],
  },
];

export const openSourceProjects = [
  {
    title: "SQL Generation System 2",
    description: "基于数据库元数据和分阶段推理的实验型 Text-to-SQL 系统。",
    language: "Python",
    url: "https://github.com/jianglei1111/SQL_generation_system_2",
  },
  {
    title: "MDDB Fruit Shop",
    description: "水果零售主题的 MySQL 多维数据模型与模拟营业数据。",
    language: "Python",
    url: "https://github.com/jianglei1111/MDDB-Fruit-Shop",
  },
  {
    title: "Motion Analysis System",
    description: "结合姿态估计、动作分类与身份识别的桌面运动分析系统。",
    language: "Python",
    url: "https://github.com/jianglei1111/motion_analysis_system",
  },
  {
    title: "智慧考研学习系统",
    description: "支持习题检索、OCR、推荐、互动与后台分析的毕业设计项目。",
    language: "HTML",
    url: "https://github.com/jianglei1111/postgraduate",
  },
  {
    title: "Ordering System",
    description: "“云上餐厅”Django 点单系统，覆盖顾客下单、订单跟踪以及商家商品、库存和订单管理。",
    language: "Python",
    url: "https://github.com/jianglei1111/Ordering_System",
  },
  {
    title: "Easy Calendar",
    description: "集成日期、教学周、天气、日程和提醒的学生桌面日历。",
    language: "Python",
    url: "https://github.com/jianglei1111/calendar",
  },
  {
    title: "CD-banana",
    description: "面向 Codex 的 Banana 图像生成 Skill。",
    language: "Python",
    url: "https://github.com/jianglei1111/CD-banana",
  },
  {
    title: "CD-image2",
    description: "支持在 Codex、GUI 或脚本中调用 Image2 的工具。",
    language: "Python",
    url: "https://github.com/jianglei1111/CD-image2",
  },
  {
    title: "codex-to-phone",
    description: "让 Codex 工作流可以在手机端继续使用。",
    language: "TypeScript",
    url: "https://github.com/jianglei1111/codex-to-phone",
  },
];

export const updates = [
  {
    slug: "multi-hop-rag-evidence-study",
    date: "在投",
    notice: "研究细节暂不公开",
    title: "多跳 RAG 中的证据组织研究",
    description: "关注多跳问答中的证据发现、筛选与组织，目前正在推进实验整理和论文完善。",
    tags: ["RAG", "Multi-hop QA", "Evidence"],
  },
  {
    slug: "rag-retrieval-routing-study",
    date: "进行中",
    notice: "研究细节暂不公开",
    title: "RAG 检索与路由策略研究",
    description: "研究如何根据当前证据情况选择处理策略，并平衡回答质量、检索过程与推理成本。",
    tags: ["RAG", "Retrieval", "Routing"],
  },
  {
    slug: "generative-ai-agent-tools",
    date: "持续",
    title: "生成式模型辅助科研与生产效率研究",
    description: "持续研究如何将生成式模型用于资料理解、实验分析、代码实现与视觉表达，提升科研和项目实践的效率与质量。",
    tags: ["GPT-5.6", "Image2", "Banana", "Research Workflow"],
  },
];

export const notes = [
  {
    slug: "long-term-research",
    title: "如何组织一项长期研究项目",
    summary: "关于目标、材料与迭代节奏的工作笔记。",
    date: "2026.07.16",
    readingTime: "8 分钟",
    tags: ["研究方法", "工作流"],
  },
  {
    slug: "prototype-to-tool",
    title: "从原型到研究工具",
    summary: "一次设计、验证和主动删减功能的过程记录。",
    date: "2026.07.08",
    readingTime: "6 分钟",
    tags: ["产品设计", "原型"],
  },
  {
    slug: "markdown-workflow",
    title: "我的 Markdown 研究笔记工作流",
    summary: "让文档自然连接项目、材料与阶段性判断。",
    date: "2026.06.24",
    readingTime: "10 分钟",
    tags: ["Markdown", "知识管理"],
  },
];
