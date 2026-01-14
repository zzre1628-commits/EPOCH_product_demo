import React, { useState } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Layers, 
  Cpu, 
  Search, 
  Activity, 
  ArrowRight, 
  Wind, 
  Zap, 
  ChevronRight, 
  Play, 
  Database, 
  GitBranch, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Target, 
  History, 
  Network, 
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

// --- UI 基础组件 ---

const SectionTitle = ({ children, subtitle, light = false }) => (
  <div className="mb-16 text-center">
    <h2 className={`text-3xl md:text-4xl font-black mb-4 tracking-tight ${light ? 'text-white' : 'text-gray-900'}`}>{children}</h2>
    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
    {subtitle && <p className={`max-w-2xl mx-auto text-lg font-medium ${light ? 'text-gray-400' : 'text-gray-500'}`}>{subtitle}</p>}
  </div>
);

// --- 补全：支持本地视频播放的组件 ---
// 优化后的视频组件：移除代码外框，适配自带外壳的视频素材
// 优化版视频组件：强效居中适配自带外壳的素材
const VideoSlot = ({ title, src, ratio = "aspect-[9/19.5]" }) => (
  /* 1. flex items-center justify-center: 确保子元素（视频）在水平和垂直方向永远居中。
    2. max-w-[360px]: 稍微调大了一点宽度，让手机模型在网页上更饱满。
  */
  <div className={`relative mx-auto w-full max-w-[360px] ${ratio} flex items-center justify-center overflow-hidden group`}>
    {src ? (
      <video 
        src={src} 
        /* object-contain: 确保视频完整显示不被裁剪。
          pointer-events-none: 防止用户误点视频触发暂停。
        */
        className="w-full h-full object-contain pointer-events-none" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
    ) : (
      /* 占位状态保持不变 */
      <div className="flex flex-col items-center opacity-20 text-center px-6">
        <Play size={32} fill="currentColor" />
        <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-gray-400">{title || "演示视频占位"}</p>
      </div>
    )}
  </div>
);

// --- 补全：支持本地图片展示的组件 ---
const ImageSlot = ({ title, src, ratio = "aspect-auto" }) => (
  <div className={`relative mx-auto w-full rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white ${ratio}`}>
    {src ? (
      <img src={src} alt={title} className="w-full h-full object-contain" />
    ) : (
      <div className="p-20 flex flex-col items-center opacity-20">
        <ImageIcon size={48} />
        <p className="mt-4 font-black uppercase tracking-widest">{title || "图片占位"}</p>
      </div>
    )}
  </div>
);

// --- 核心功能演示 ---

const MomentSimulator = () => {
  const [step, setStep] = useState(0);
  const inputExample = "去地铁路上，没有戴耳机，反而看到了路边泛黄的梧桐叶，烤红薯大爷还笑着问要不要带一个。日子平静而美好。";

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="p-8 bg-indigo-50/30 rounded-3xl border border-indigo-100">
          <h3 className="text-2xl font-black mb-4 text-indigo-900 uppercase tracking-tight">瞬间卡片：复刻场景</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
            从多模态原始输入到 AI 结构化还原，Epoch 旨在复刻用户最真实的表达口吻，通过三层职责架构开启深度自察旅程。
          </p>
          <div className="space-y-4 text-left">
            {[
              { id: 0, label: "01. 原始输入层 (Input)", content: "保持原汁原味。支持文字、图片、语音（自动转录）及链接，构建非结构化语料库。" },
              { id: 1, label: "02. AI 场景还原层 (Context)", content: "自动捕捉时空上下文（天气、位置、感性标签），构建时空底座，复刻物理现场。" },
              { id: 2, label: "03. AI 洞察挖掘层 (Dialogue)", content: "Mer 基于思维链（COT）发起启发式 Spark 提问，深挖认知盲区并启动实时对话。" }
            ].map((s) => (
              <div key={s.id} className={`p-5 rounded-2xl border transition-all cursor-pointer ${step === s.id ? 'bg-white border-indigo-200 shadow-md translate-x-2' : 'bg-transparent border-transparent opacity-40 hover:opacity-60'}`} onClick={() => setStep(s.id)}>
                <div className="flex items-center gap-3 mb-2 font-black text-sm text-gray-800">
                  <span className={`w-5 h-5 rounded text-[10px] flex items-center justify-center ${step === s.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{s.id + 1}</span>
                  {s.label}
                </div>
                <p className={`text-xs ${s.id === 2 ? 'text-indigo-600 italic font-medium' : 'text-gray-500'}`}>{s.content}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setStep((step + 1) % 3)}
            className="mt-8 w-full py-4 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-all text-sm tracking-widest uppercase"
          >
            下一步流程演示
          </button>
        </div>
      </div>
      {/* 关联本地资源：moment-1.mp4 */}
      <VideoSlot title="瞬间卡片功能演示" src="/moment-1.mp4" />
    </div>
  );
};

// --- 周刊板块 ---

const WeeklyDetails = () => {
  const parts = [
    {
      title: "情感气候概览",
      icon: <Wind size={20} className="text-blue-500" />,
      desc: "告别枯燥饼图。将主导情绪权重映射至动态气候（如迷雾、转晴），通过叙事性生成实现长周期的宏观心理预警。"
    },
    {
      title: "能量审计账单",
      icon: <Zap size={20} className="text-yellow-500" />,
      desc: "识别实体并与其能量关联。交叉分析人物、任务对用户的“滋养”或“消耗”，基于数据提供生活社交决策导航。"
    },
    {
      title: "潜意识连线",
      icon: <Layers size={20} className="text-purple-500" />,
      desc: "利用向量空间检索跨文本寻找语义接近的记录。识别深层心理模式（如失控感），穿透行为层洞察核心人格画像。"
    },
    {
      title: "本周的回响",
      icon: <MessageCircle size={20} className="text-green-500" />,
      desc: "针对周刊主题抛出终极提问并引导回复。记录认知进化路径，在低谷时智能调取曾经的“高价值”成功记录进行激励。"
    }
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* 关联本地资源：weekly_report-1.mp4 */}
      <VideoSlot title="心灵周刊生成演示" src="/weekly_report-1.mp4" />
      <div className="space-y-10 text-left">
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">心灵周刊：连接碎片，构建叙事</h3>
          <p className="text-gray-500 text-sm font-medium">将离散的感性体验转化为系统性的自我觉察逻辑，见证用户在同一认知主题上的进化轨迹。</p>
        </div>
        <div className="grid gap-4">
          {parts.map((p, i) => (
            <div key={i} className="group p-6 bg-white border border-gray-100 rounded-[2rem] hover:border-indigo-200 transition-all shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                  {p.icon}
                </div>
                <h4 className="font-black text-gray-800">{p.title}</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- “我”页面设计思考 ---

const MePageDesign = () => {
  return (
    <div className="bg-gray-950 text-white rounded-[4rem] p-12 lg:p-20 overflow-hidden relative border border-white/5 text-left">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64 opacity-60"></div>
      
      <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-black flex items-center gap-3">
              <History className="text-indigo-400" /> “我”页面：索引中心
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              打造数字生命的“索引中心”。我们通过非线性的日历矩阵排版，让数据存档超越枯燥的列表，成为富有温度的视觉图谱。
            </p>
          </div>
          
          <div className="grid gap-6">
            {[
              { label: "日历矩阵 (Matrix View)", desc: "采用网格化布局，根据当日记录的情绪极性赋予色彩呼吸感，直观展现长周期的心境律动。" },
              { label: "今日总结摘要", desc: "位于矩阵底部。点击日期即可预览当日 AI 提炼的核心观点与成长微光，实现最高效的高频自省。" },
              { label: "行交互逻辑", desc: "每一行日历行右侧均设有“周刊”与“瞬间”入口，支持用户在叙事报告与碎片记忆间进行一键穿梭。" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border-l-2 border-indigo-500/30 pl-6 py-2">
                <div>
                  <h4 className="font-black text-indigo-400 text-sm mb-1 uppercase tracking-tighter">{item.label}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 关联本地资源：me-1.mp4 */}
        <VideoSlot title="“我”页面设计演示" src="/me-1.mp4" />
      </div>
    </div>
  );
};

// --- 用户体验全链路 ---

const VisualSPath = () => {
  const steps = [
    { label: "录入 (Input)", sub: "非结构化语料库", icon: <MessageCircle />, desc: "支持多模态输入，保持用户原汁原味的叙述口吻，建立语言风格模型实现同频交流。" },
    { label: "解析 (Analysis)", sub: "时空上下文底座", icon: <Search />, desc: "自动捕捉物理环境标签（天气/位置），提炼情绪极性与感官偏好，建立用户情绪基准。" },
    { label: "启发 (Spark)", sub: "思维链 (COT) 推理", icon: <Target />, desc: "利用启发式思维引擎抛出激发思考的问题，记录用户反复纠结的关键点以识别认知盲区。" },
    { label: "沉淀 (Sediment)", sub: "高价值 RAG 向量库", icon: <Database />, desc: "构建 Embedding 向量数据库，存储深度对话产生的“共识”与“反思”，作为数字孪生雏形。" },
    { label: "叙事 (Narrative)", sub: "数字孪生自律动", icon: <GitBranch />, desc: "穿透行为层理解用户的价值观与渴望，最终生成具身化、叙事性的心灵周刊报告。" }
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="relative py-10 px-6 text-left">
        <div className="absolute top-0 left-[28px] w-0.5 h-full bg-indigo-50 -z-10"></div>
        <div className="space-y-16">
          {steps.map((s, i) => (
            <div key={i} className={`flex gap-8 items-center group ${i % 2 === 1 ? 'lg:translate-x-12' : ''} transition-transform`}>
              <div className="w-14 h-14 bg-white border-2 border-indigo-500 rounded-2xl flex items-center justify-center text-indigo-500 shadow-md group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <p className="font-black text-gray-900 text-base">{s.label}</p>
                   <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">{s.sub}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed max-w-sm font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky top-32">
        {/* 关联本地资源：流程图.png */}
        <ImageSlot title="用户全链路逻辑流程图" src="/流程图.png" />
        <p className="text-center mt-4 text-[10px] font-black text-gray-300 uppercase tracking-widest">User Flow Diagram</p>
      </div>
    </div>
  );
};

// --- 技术架构与数据库 ---

const TechnicalArchitecture = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
      <div className="flex justify-center">
        {/* 关联本地资源：技术架构拆解.png */}
        <ImageSlot title="技术架构层级拆解图" ratio="aspect-auto" src="/技术架构拆解.png" />
      </div>
      <div className="space-y-12">
        <div className="space-y-4">
           <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">三位一体：数据底座支撑</h3>
           <p className="text-gray-500 text-sm font-medium">采用多模态集成与分层渲染技术，确保数字记忆的精准持久与能量网格的非线性关联。</p>
        </div>
        <div className="grid gap-6">
          {[
            { icon: <Database />, name: "PostgreSQL", role: "核心业务枢纽", usage: "存储场景标签（天气/位置）、实体关系标签、隐私偏好及周刊记录。" },
            { icon: <Layers />, name: "Pinecone / Milvus", role: "语义记忆引擎", usage: "存储向量嵌入（Embeddings），实现跨记录语义检索与潜意识连线功能。" },
            { icon: <Network />, name: "Neo4j", role: "能量网格中枢", usage: "记录实体（人物/任务）与能量损益间的非线性因果关系，辅助关系网络评分。" }
          ].map((db, i) => (
            <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">{db.icon}</div>
                <div>
                   <h4 className="font-black text-gray-900">{db.name}</h4>
                   <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{db.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">{db.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 核心优化与指标 ---

const MetricsTable = () => {
  const tableData = [
    { 
      stage: "感知还原", 
      metric: "场景保真度", 
      method: "人工对照测试：AI 生成场景标签与用户实际物理环境的一致性评分。", 
      strategy: "接入更多维 API，优化 CV 模型对图片中感性意象及复杂时空特征的识别。" 
    },
    { 
      stage: "洞察挖掘", 
      metric: "共情基准准确率", 
      method: "LLM-as-a-Judge：使用旗舰模型对 Mer 提取的情绪极性进行二次审核及评分。", 
      strategy: "Few-shot Prompting：提供用户高频表达样本，微调 AI 共情基准线，捕捉异常波动。" 
    },
    { 
      stage: "Spark 提问", 
      metric: "引导回复率", 
      method: "交互漏斗分析：量化分析用户对 Spark 问题的回答深度、反馈速度与回复意愿。", 
      strategy: "优化 COT 推理逻辑，深挖用户回避的关键矛盾点，提升问题启发度与破局感。" 
    },
    { 
      stage: "潜意识连线", 
      metric: "动机识别率", 
      method: "用户认同闭环：通过‘封存回响’中用户对关联动机的认同反馈来计算聚类准确度。", 
      strategy: "动态微调 RAG 检索权重：将用户标记的高价值回复作为语料重新反哺检索库。" 
    }
  ];
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 text-left">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="px-6 py-6 font-black uppercase tracking-widest">优化环节</th>
              <th className="px-6 py-6 font-black uppercase tracking-widest">核心指标</th>
              <th className="px-6 py-6 font-black uppercase tracking-widest">测评方法</th>
              <th className="px-6 py-6 font-black uppercase tracking-widest">优化策略</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tableData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-6 py-8 font-black text-gray-900 whitespace-nowrap">{row.stage}</td>
                <td className="px-6 py-8 font-bold text-indigo-600 whitespace-nowrap">{row.metric}</td>
                <td className="px-6 py-8 text-gray-500 font-medium leading-relaxed max-w-[280px]">{row.method}</td>
                <td className="px-6 py-8 text-gray-600 font-medium leading-relaxed">{row.strategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-indigo-600" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Quality Assurance Protocol v3.0</span>
        </div>
      </div>
    </div>
  );
};

// --- [核心定义] 主页面架构 ---

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">E</div>
          <span className="text-2xl font-black tracking-tighter uppercase">Epoch</span>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#moment" className="hover:text-indigo-600 transition-colors">Moment</a>
          <a href="#weekly" className="hover:text-indigo-600 transition-colors">Weekly</a>
          <a href="#me" className="hover:text-indigo-600 transition-colors">Archive</a>
          <a href="#flow" className="hover:text-indigo-600 transition-colors">Journey</a>
          <a href="#tech" className="hover:text-indigo-600 transition-colors">Architecture</a>
        </div>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase shadow-xl hover:bg-indigo-600 transition-all">
          Alpha Trial
        </button>
      </nav>

      <header className="pt-52 pb-24 px-10 text-center max-w-7xl mx-auto">
        <div className="inline-block px-5 py-2 mb-12 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] border border-indigo-100">
          Digital Twin Prototype v3.0
        </div>
        <h1 className="text-7xl md:text-[9rem] font-black text-gray-900 mb-12 tracking-tighter leading-[0.85]">
          每一刻<br />
          都有<span className="text-indigo-600 italic underline decoration-indigo-100 decoration-8 underline-offset-10">回响</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-20 font-medium leading-relaxed tracking-tight">
          Epoch 捕捉瞬时灵感，AI 沉淀长效洞察。通过自察对话，复刻你的生活现场，见证并驱动你的自我进化。
        </p>
        <div className="flex justify-center">
           <button className="group bg-indigo-600 text-white px-12 py-7 rounded-3xl font-black text-xl hover:shadow-2xl hover:shadow-indigo-200 transition-all flex items-center gap-4">
            开启数字分身 <ArrowRight size={24} />
          </button>
        </div>
      </header>

      <section id="moment" className="py-48 px-10"><SectionTitle subtitle="原汁原味捕捉生活现场，通过分层职责架构启动深度自察。">即刻瞬间 (Moment)</SectionTitle><MomentSimulator /></section>
      <section id="weekly" className="py-48 px-10 bg-gray-50/50"><SectionTitle subtitle="连接碎片化卡片，穿透行为层理解用户的价值观与渴望。">心灵周刊 (Weekly)</SectionTitle><WeeklyDetails /></section>
      <section id="me" className="py-48 px-10"><SectionTitle subtitle="富有温度的视觉回顾，让每一个 Epoch 生命周期节点都触手可及。">“我”页面设计哲学</SectionTitle><MePageDesign /></section>
      <section id="flow" className="py-48 px-10 bg-gray-50/50"><SectionTitle subtitle="体验全链路：从非结构化录入到叙事生成的逻辑闭环。">用户全链路逻辑</SectionTitle><VisualSPath /></section>
      <section id="tech" className="py-48 px-10"><SectionTitle subtitle="支撑数字分身运行的敏锐技术层级与三位一体数据库选型。">技术架构与数据库</SectionTitle><TechnicalArchitecture /></section>
      <section id="metrics" className="py-48 px-10 bg-gray-50/50"><SectionTitle subtitle="基于精准数据追踪，通过闭环反馈持续优化 AI 的共情与推理深度。">核心指标与优化</SectionTitle><MetricsTable /></section>

      <footer className="py-32 border-t border-gray-100 text-center bg-white">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl">E</div>
          <span className="text-3xl font-black tracking-tighter uppercase">Epoch Team</span>
        </div>
        <p className="text-gray-400 text-sm font-medium tracking-tight">© 2026 Epoch Project. 让每一刻都值得被看见。</p>
      </footer>
    </div>
  );
};

export default App;