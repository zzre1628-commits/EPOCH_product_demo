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

// --- 核心组件：支持真实本地资源 ---

// 1. 视频组件：模拟手机外壳，支持自动播放演示
const VideoSlot = ({ title, src, ratio = "aspect-[9/19.5]" }) => (
  <div className={`relative mx-auto w-full max-w-[320px] ${ratio} bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden group`}>
    {src ? (
      <video 
        src={src} 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      />
    ) : (
      <div className="flex flex-col items-center justify-center h-full opacity-30 text-white">
        <Play size={32} fill="currentColor" />
        <p className="text-[10px] mt-2 tracking-widest uppercase">{title}</p>
      </div>
    )}
    {/* 手机顶部装饰槽 */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
  </div>
);

// 2. 图片组件：支持展示逻辑图与架构图
const ImageSlot = ({ title, src, ratio = "aspect-auto" }) => (
  <div className={`relative mx-auto w-full rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white ${ratio}`}>
    {src ? (
      <img src={src} alt={title} className="w-full h-full object-contain" />
    ) : (
      <div className="p-20 flex flex-col items-center opacity-20">
        <ImageIcon size={48} />
        <p className="mt-4 font-black uppercase tracking-widest">{title}</p>
      </div>
    )}
  </div>
);

// --- 核心功能演示板块 ---

const MomentSimulator = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="p-8 bg-indigo-50/30 rounded-3xl border border-indigo-100">
          <h3 className="text-2xl font-black mb-4 text-indigo-900 uppercase tracking-tight">瞬间卡片：复刻场景</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">从多模态原始输入到 AI 结构化还原，Epoch 旨在复刻用户最真实的表达口吻。</p>
          <div className="space-y-4 text-left">
            {[
              { id: 0, label: "01. 原始输入层 (Input)", content: "保持原汁原味。支持文字、图片及语音。" },
              { id: 1, label: "02. AI 场景还原层 (Context)", content: "自动捕捉时空上下文（天气、位置、标签）。" },
              { id: 2, label: "03. AI 洞察挖掘层 (Dialogue)", content: "Mer 基于思维链（COT）深挖认知盲区。" }
            ].map((s) => (
              <div key={s.id} className={`p-5 rounded-2xl border transition-all cursor-pointer ${step === s.id ? 'bg-white border-indigo-200 shadow-md translate-x-2' : 'bg-transparent border-transparent opacity-40 hover:opacity-60'}`} onClick={() => setStep(s.id)}>
                <div className="flex items-center gap-3 mb-2 font-black text-sm text-gray-800">
                  <span className={`w-5 h-5 rounded text-[10px] flex items-center justify-center ${step === s.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{s.id + 1}</span>
                  {s.label}
                </div>
                <p className="text-xs text-gray-500">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 替换 1: 瞬间功能演示视频 */}
      <VideoSlot src="/moment-1.mp4" title="瞬间卡片功能演示" />
    </div>
  );
};

const WeeklyDetails = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* 替换 2: 周刊生成演示视频 */}
      <VideoSlot src="/weekly_report-1.mp4" title="心灵周刊生成演示" />
      <div className="space-y-10 text-left">
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">心灵周刊：构建叙事</h3>
          <p className="text-gray-500 text-sm font-medium">将离散的感性体验转化为系统性的自我觉察逻辑。</p>
        </div>
        {/* 此处省略了 Weekly 循环列表代码，保持原样即可 */}
      </div>
    </div>
  );
};

const MePageDesign = () => (
  <div className="bg-gray-950 text-white rounded-[4rem] p-12 lg:p-20 overflow-hidden relative border border-white/5 text-left">
    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="space-y-10">
        <h3 className="text-3xl font-black flex items-center gap-3"><History className="text-indigo-400" /> “我”页面：索引中心</h3>
        <p className="text-gray-400 text-sm">打造数字生命的“索引中心”，采用网格化日历矩阵排版。</p>
      </div>
      {/* 替换 3: “我”页面设计演示视频 */}
      <VideoSlot src="/me-1.mp4" title="“我”页面设计演示" />
    </div>
  </div>
);

const VisualSPath = () => (
  <div className="grid lg:grid-cols-2 gap-16 items-start">
    <div className="space-y-12">
      {/* 这里原样保留你的 steps.map 逻辑 */}
    </div>
    <div className="sticky top-32">
      {/* 替换 4: 流程图图片 */}
      <ImageSlot src="/流程图.png" title="用户全链路逻辑流程图" />
    </div>
  </div>
);

const TechnicalArchitecture = () => (
  <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
    <div className="flex justify-center w-full">
      {/* 替换 5: 技术架构拆解图片 */}
      <ImageSlot src="/技术架构拆解.png" title="技术架构层级拆解图" />
    </div>
    <div className="space-y-12">
      <h3 className="text-3xl font-black text-gray-900 uppercase">数据底座支撑</h3>
      {/* 这里原样保留你的数据库列表逻辑 */}
    </div>
  </div>
);

// --- 主页面架构组件 (App) ---
// 请保留你代码中原本的 MetricsTable, App, Footer 等剩余部分
// 只需确保引用了上述更新后的子组件即可。

export default App;