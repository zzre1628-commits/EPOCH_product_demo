import React, { useState } from 'react';
import { 
  MessageCircle, Calendar, Layers, Cpu, Search, Activity, ArrowRight, 
  Wind, Zap, ChevronRight, Play, Database, GitBranch, Smartphone, 
  BarChart3, ShieldCheck, Target, History, Network, CheckCircle2,
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

const VideoSlot = ({ title, src, ratio = "aspect-[9/19.5]" }) => (
  <div className={`relative mx-auto w-full max-w-[320px] ${ratio} bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden group`}>
    {src ? (
      <video src={src} className="w-full h-full object-cover" autoPlay loop muted playsInline />
    ) : (
      <div className="flex flex-col items-center justify-center h-full opacity-30 text-white">
        <Play size={32} fill="currentColor" />
        <p className="text-[10px] mt-2 tracking-widest uppercase">{title}</p>
      </div>
    )}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
  </div>
);

const ImageSlot = ({ title, src, ratio = "aspect-auto" }) => (
  <div className={`relative mx-auto w-full rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white ${ratio}`}>
    {src ? (
      <img src={src} alt={title} className="w-full h-full object-contain" />
    ) : (
      <div className="p-20 flex flex-col items-center opacity-20"><ImageIcon size={48} /><p className="mt-4 font-black uppercase tracking-widest">{title}</p></div>
    )}
  </div>
);

// --- 子功能组件 ---
const MomentSimulator = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="p-8 bg-indigo-50/30 rounded-3xl border border-indigo-100">
          <h3 className="text-2xl font-black mb-4 text-indigo-900 uppercase tracking-tight">瞬间卡片：复刻场景</h3>
          <div className="space-y-4 text-left">
            {[{ id: 0, label: "01. Input", content: "非结构化语料库" }, { id: 1, label: "02. Context", content: "时空上下文底座" }, { id: 2, label: "03. Dialogue", content: "Mer 启发式 Spark 提问" }].map((s) => (
              <div key={s.id} className={`p-5 rounded-2xl border transition-all cursor-pointer ${step === s.id ? 'bg-white border-indigo-200 shadow-md translate-x-2' : 'bg-transparent border-transparent opacity-40'}`} onClick={() => setStep(s.id)}>
                <div className="flex items-center gap-3 mb-2 font-black text-sm text-gray-800">
                  <span className={`w-5 h-5 rounded text-[10px] flex items-center justify-center ${step === s.id ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>{s.id + 1}</span>
                  {s.label}
                </div>
                <p className="text-xs text-gray-500">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VideoSlot src="/moment-1.mp4" title="瞬间演示" />
    </div>
  );
};

const WeeklyDetails = () => (
  <div className="grid lg:grid-cols-2 gap-16 items-start">
    <VideoSlot src="/weekly_report-1.mp4" title="周刊演示" />
    <div className="space-y-10 text-left">
      <h3 className="text-3xl font-black text-gray-900 uppercase">心灵周刊：构建叙事</h3>
      <p className="text-gray-500 text-sm font-medium">将离散的感性体验转化为系统性的自我觉察逻辑。</p>
    </div>
  </div>
);

const MePageDesign = () => (
  <div className="bg-gray-950 text-white rounded-[4rem] p-12 lg:p-20 overflow-hidden relative border border-white/5 text-left">
    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="space-y-10">
        <h3 className="text-3xl font-black flex items-center gap-3"><History className="text-indigo-400" /> “我”页面：索引中心</h3>
        <p className="text-gray-400 text-sm">打造数字生命的“索引中心”，采用网格化布局展现长周期的心境律动。</p>
      </div>
      <VideoSlot src="/me-1.mp4" title="个人页演示" />
    </div>
  </div>
);

const VisualSPath = () => (
  <div className="grid lg:grid-cols-2 gap-16 items-start">
    <div className="relative py-10 px-6 text-left"><p className="text-gray-500 text-sm">用户全链路逻辑闭环演示</p></div>
    <div className="sticky top-32"><ImageSlot src="/流程图.png" title="全链路流程图" /></div>
  </div>
);

const TechnicalArchitecture = () => (
  <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
    <div className="flex justify-center"><ImageSlot src="/技术架构拆解.png" title="技术架构图" /></div>
    <div className="space-y-12"><h3 className="text-3xl font-black text-gray-900 uppercase">三位一体：数据底座</h3></div>
  </div>
);

// --- 主页面架构组件 (这就是你刚才漏掉的部分) ---
const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">E</div>
          <span className="text-2xl font-black tracking-tighter uppercase">Epoch</span>
        </div>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase shadow-xl hover:bg-indigo-600 transition-all">Alpha Trial</button>
      </nav>

      <header className="pt-52 pb-24 px-10 text-center max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-[9rem] font-black text-gray-900 mb-12 tracking-tighter leading-[0.85]">每一刻 都有<span className="text-indigo-600">回响</span></h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-20 font-medium leading-relaxed tracking-tight">Epoch 捕捉瞬时灵感，AI 沉淀长效洞察。</p>
      </header>

      <section id="moment" className="py-48 px-10"><SectionTitle subtitle="原汁原味捕捉生活现场。">即刻瞬间 (Moment)</SectionTitle><MomentSimulator /></section>
      <section id="weekly" className="py-48 px-10 bg-gray-50/50"><SectionTitle subtitle="穿透行为层理解用户的价值观与渴望。">心灵周刊 (Weekly)</SectionTitle><WeeklyDetails /></section>
      <section id="me" className="py-48 px-10"><SectionTitle subtitle="富有温度的视觉回顾。">“我”页面设计哲学</SectionTitle><MePageDesign /></section>
      <section id="flow" className="py-48 px-10 bg-gray-50/50"><SectionTitle subtitle="从录入到叙事生成的逻辑闭环。">用户全链路逻辑</SectionTitle><VisualSPath /></section>
      <section id="tech" className="py-48 px-10"><SectionTitle subtitle="支撑数字分身运行的技术架构。">技术架构与数据库</SectionTitle><TechnicalArchitecture /></section>

      <footer className="py-32 border-t border-gray-100 text-center bg-white">
        <p className="text-gray-400 text-sm font-medium tracking-tight">© 2026 Epoch Project. 让每一刻都值得被看见。</p>
      </footer>
    </div>
  );
};

export default App; // 导出大写的 App