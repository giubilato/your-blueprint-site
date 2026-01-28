import React, { useState, useEffect } from 'react';
import { 
  Target, 
  ChevronRight, 
  Briefcase, 
  TrendingUp, 
  Layers, 
  CheckSquare, 
  Menu, 
  X,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  MoveHorizontal,
  Feather,
  Layout
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "The Strategy Tower",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      desc: "Yearly Milestones & Quarterly Roadmaps to keep your vision clear. Don't just work—direct.",
      longDesc: "Most planners let you write, but they don't help you build. The Strategy Tower aligns your daily grind with your life's biggest ambitions using a top-down architectural approach.",
      details: ["Yearly Milestones", "Quarterly Roadmaps", "OKR Dashboard"]
    },
    {
      title: "The Execution Core",
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      desc: "Daily & Weekly layouts optimized for Deep Work and Time Blocking. Separate the Urgent from the Important.",
      longDesc: "Instantly separate the Urgent from the Important on every daily page. A pure, white-space-dominant environment that forces clarity and protects your attention span.",
      details: ["Weekly Deep Work", "Daily Performance Page", "Eisenhower Matrix"]
    },
    {
      title: "The Management Hub",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      desc: "Smart-indexed Meeting Notes and Delegation Trackers to never lose a detail. A command center for your team.",
      longDesc: "Stop reacting and start orchestrating. Never lose a detail with smart-indexed meeting notes and delegation trackers designed to keep your team accountable.",
      details: ["Indexed Meeting Notes", "Delegation Tracker", "Project Roadmaps"]
    },
    {
      title: "The Growth Engine",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      desc: "Refine your performance. Document your logic to learn from every choice.",
      longDesc: "Success isn't an accident; it's a blueprint. Track your habits and document your decision logic to refine your performance quarter over quarter.",
      details: ["Decision Logs", "Habit Trackers", "Brain Dump Grid"]
    }
  ];

  // Component to render different CSS mockups based on the active feature
  const renderFeatureMockup = (index) => {
    switch(index) {
      case 0: // Strategy Tower (Roadmap View)
        return (
          <div className="w-full h-full bg-[#f0f4f8] text-[#0f172a] p-8 font-serif relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-200/50 rounded-sm">
             <div className="flex justify-between border-b-2 border-slate-900 pb-4 mb-6">
               <span className="uppercase font-bold tracking-widest text-sm text-slate-900">Q1 Roadmap</span>
               <span className="font-mono text-xs text-blue-700">2026-2027</span>
             </div>
             <div className="space-y-6">
               {/* Objective 1 */}
               <div>
                 <div className="flex justify-between items-end mb-2">
                   <span className="font-bold text-sm uppercase tracking-wide text-slate-800">Scale Operations</span>
                   <span className="font-mono text-xs text-slate-600">75%</span>
                 </div>
                 <div className="w-full h-3 bg-slate-300 relative">
                   <div className="absolute left-0 top-0 h-full w-3/4 bg-blue-900"></div>
                 </div>
                 <div className="flex gap-3 mt-3">
                   <div className="w-1/3 h-10 border border-slate-400 p-1"><div className="w-full h-full bg-slate-300"></div></div>
                   <div className="w-1/3 h-10 border border-slate-400 p-1"></div>
                   <div className="w-1/3 h-10 border border-slate-400 p-1"></div>
                 </div>
               </div>
               {/* Objective 2 */}
               <div>
                 <div className="flex justify-between items-end mb-2">
                   <span className="font-bold text-sm uppercase tracking-wide text-slate-800">Launch V2</span>
                   <span className="font-mono text-xs text-slate-600">30%</span>
                 </div>
                 <div className="w-full h-3 bg-slate-300 relative">
                   <div className="absolute left-0 top-0 h-full w-[30%] bg-blue-900"></div>
                 </div>
               </div>
               {/* OKR Mini Table */}
               <div className="mt-8 border border-slate-900 p-4">
                  <div className="text-xs font-bold uppercase mb-3 border-b border-slate-400 pb-2 text-slate-900">Key Results</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3"><div className="w-2 h-2 border border-slate-900"></div> <div className="h-1.5 w-2/3 bg-slate-400"></div></div>
                    <div className="flex items-center gap-3"><div className="w-2 h-2 border border-slate-900"></div> <div className="h-1.5 w-1/2 bg-slate-400"></div></div>
                  </div>
               </div>
             </div>
          </div>
        );
      case 1: // Execution Core (Weekly/Daily)
        return (
          <div className="w-full h-full bg-[#f0f4f8] text-[#0f172a] p-8 font-serif relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-200/50 rounded-sm">
            <div className="grid grid-cols-2 gap-6 h-full">
               <div className="border-r border-slate-400 pr-4">
                 <div className="uppercase font-bold text-sm mb-4 border-b border-slate-900 pb-1 text-slate-900">Mon 12</div>
                 <div className="space-y-3">
                    <div className="bg-slate-300 h-8 w-full flex items-center px-2 text-[10px] font-mono text-slate-700">09:00 Strat. Meeting</div>
                    <div className="h-6 border-b border-slate-300"></div>
                    <div className="bg-blue-900/10 h-16 w-full flex items-center px-2 text-[10px] font-mono border-l-4 border-blue-900 font-bold text-blue-900">DEEP WORK</div>
                    <div className="h-6 border-b border-slate-300"></div>
                    <div className="h-6 border-b border-slate-300"></div>
                 </div>
               </div>
               <div>
                 <div className="uppercase font-bold text-sm mb-4 border-b border-slate-900 pb-1 text-slate-900">Priorities</div>
                 <div className="border border-slate-400 h-24 mb-3 p-2 bg-white">
                   <span className="text-[9px] uppercase font-bold text-slate-500 block mb-2">Urgent / Important</span>
                   <div className="space-y-2">
                     <div className="w-full h-1.5 bg-slate-900"></div>
                     <div className="w-2/3 h-1.5 bg-slate-900"></div>
                   </div>
                 </div>
                 <div className="border border-slate-300 h-24 p-2 opacity-60">
                   <span className="text-[9px] uppercase font-bold text-slate-500">Schedule</span>
                 </div>
               </div>
            </div>
          </div>
        );
      case 2: // Management Hub (Meeting Notes)
        return (
          <div className="w-full h-full bg-[#f0f4f8] text-[#0f172a] p-8 font-serif relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-200/50 rounded-sm">
             <div className="flex gap-4 mb-6 border-b border-slate-900 pb-4">
                <div className="w-10 h-10 border-2 border-slate-900 flex items-center justify-center font-bold text-lg bg-white text-slate-900">M</div>
                <div>
                   <div className="text-sm font-bold uppercase tracking-wide text-slate-900">Board Meeting</div>
                   <div className="text-[10px] text-blue-700 font-mono mt-1">Attendees: CEO, CTO, VP</div>
                </div>
             </div>
             <div className="flex h-full gap-6">
                <div className="w-1/3 border-r border-slate-400 pr-4 space-y-3">
                   <div className="text-[10px] font-bold uppercase text-slate-500">Agenda</div>
                   <div className="w-full h-1.5 bg-slate-600"></div>
                   <div className="w-2/3 h-1.5 bg-slate-600"></div>
                   <div className="w-3/4 h-1.5 bg-slate-600"></div>
                   <div className="w-1/2 h-1.5 bg-slate-600"></div>
                </div>
                <div className="w-2/3 space-y-4">
                   <div className="text-[10px] font-bold uppercase text-slate-500">Notes & Actions</div>
                   <div className="w-full h-1.5 bg-slate-300"></div>
                   <div className="w-full h-1.5 bg-slate-300"></div>
                   <div className="w-full h-1.5 bg-slate-300"></div>
                   <div className="mt-6 border border-slate-400 p-3 bg-white/50">
                      <div className="flex gap-3 items-center mb-2">
                        <div className="w-3 h-3 border border-slate-900"></div>
                        <div className="w-full h-1.5 bg-slate-600"></div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-3 h-3 border border-slate-900"></div>
                        <div className="w-3/4 h-1.5 bg-slate-600"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
      case 3: // Growth Engine (Habits)
        return (
          <div className="w-full h-full bg-[#f0f4f8] text-[#0f172a] p-8 font-serif relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-200/50 rounded-sm">
             <div className="uppercase font-bold tracking-widest text-sm border-b-2 border-slate-900 pb-3 mb-6 text-slate-900">Habit Tracker</div>
             <div className="space-y-5">
                <div className="flex items-center gap-4">
                   <span className="w-20 text-[10px] uppercase font-bold text-right tracking-wider text-slate-700">Read</span>
                   <div className="flex-1 flex gap-1.5">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`h-5 w-5 border border-slate-500 ${i < 5 ? 'bg-blue-900' : 'bg-transparent'}`}></div>
                      ))}
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <span className="w-20 text-[10px] uppercase font-bold text-right tracking-wider text-slate-700">Deep Work</span>
                   <div className="flex-1 flex gap-1.5">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`h-5 w-5 border border-slate-500 ${i % 2 === 0 ? 'bg-slate-400' : 'bg-transparent'}`}></div>
                      ))}
                   </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-400">
                   <div className="uppercase font-bold text-[10px] mb-3 text-slate-600">Decision Log</div>
                   <div className="bg-white border border-slate-300 p-3 text-[9px] font-mono leading-relaxed shadow-sm text-slate-800">
                      <span className="font-bold">DECISION:</span> Hire VP of Sales.<br/>
                      <span className="font-bold">LOGIC:</span> Revenue flat for Q2.<br/>
                      <span className="font-bold">OUTCOME:</span> TBD.
                   </div>
                </div>
             </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-900/50 selection:text-blue-200 overflow-x-hidden">
      
      {/* Navigation - Modified layout for left alignment */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-slate-800 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent py-6'}`}>
        {/* Full width container, no padding on left, padding right for menu */}
        <div className="w-full flex justify-between items-center pl-0 pr-6">
          <div className="flex items-center gap-4">
            {/* Logo box touches the edge */}
            <div className="h-12 w-12 bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
               <Layout className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100 uppercase font-mono">Your Blueprint</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            <a href="#pricing" className="bg-slate-100 text-[#0f172a] px-6 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Get Access
            </a>
          </div>

          <button className="md:hidden text-slate-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden">
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="bg-slate-100 text-[#0f172a] px-6 py-3 w-full font-bold text-center block shadow-lg">
              Get Access
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-slate-900">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           {/* Technical Blue Grid Background */}
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 border border-blue-900/50 text-blue-400 text-xs uppercase tracking-[0.2em] mb-6 bg-blue-950/20 backdrop-blur-sm">
              For reMarkable 2 & Paper Pro
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Stop Reacting. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500">Start Orchestrating.</span>
            </h1>
            <h2 className="text-lg font-bold text-slate-300 uppercase tracking-wider mb-6">
              The Ultimate Productivity System for reMarkable 2 & Paper Pro.
            </h2>
            <p className="text-lg text-slate-400 mb-6 max-w-lg leading-relaxed">
              Most digital planners are just endless pages of blank lines. They let you write, but they don't help you build. 
              <span className="text-blue-400 font-medium"> Your Blueprint</span> is different. It is a complete Productivity Architecture designed for high-performers.
            </p>
            <p className="text-sm text-slate-500 mb-10 max-w-lg leading-relaxed border-l-2 border-blue-900 pl-4">
              Integrates the world’s most effective methodologies—GTD®, OKRs, and Time Blocking—into one seamless, distraction-free workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="bg-slate-100 text-[#0f172a] px-8 py-4 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Download Architecture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Abstract Device Visualization */}
          <div className="relative h-[650px] w-full hidden md:block">
             <div className="absolute top-0 right-0 w-[90%] h-full bg-[#0f172a] border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 rotate-[-2deg] hover:rotate-0 transition-all duration-700 group">
                {/* Glow effect behind */}
                <div className="absolute -inset-2 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="w-full h-full bg-[#f0f4f8] text-[#0f172a] p-8 flex flex-col relative overflow-hidden font-serif shadow-inner">
                   <div className="absolute inset-0 pointer-events-none opacity-5"></div>
                   
                   <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
                      <div>
                        <h3 className="text-3xl font-bold uppercase tracking-tighter text-slate-900">Daily Performance</h3>
                        <p className="text-sm italic text-slate-600">October 12, Tuesday</p>
                      </div>
                      <div className="text-xs font-mono border border-slate-900 px-2 py-1 text-slate-900">Q4 / Wk 41</div>
                   </div>

                   <div className="grid grid-cols-2 gap-8 h-full">
                      <div className="space-y-6">
                         <div className="space-y-2">
                           <h4 className="font-bold uppercase text-xs tracking-widest border-b border-slate-900 pb-1 text-slate-900">Eisenhower Matrix</h4>
                           <div className="grid grid-cols-2 gap-2 h-32">
                              <div className="border border-slate-400 bg-slate-200/50 p-2 text-xs text-slate-800">Do First</div>
                              <div className="border border-slate-300 p-2 text-xs text-slate-500">Schedule</div>
                              <div className="border border-slate-300 p-2 text-xs text-slate-500">Delegate</div>
                              <div className="border border-slate-300 p-2 text-xs text-slate-500">Delete</div>
                           </div>
                         </div>
                         <div className="space-y-2">
                            <h4 className="font-bold uppercase text-xs tracking-widest border-b border-slate-900 pb-1 text-slate-900">Top 3 Targets</h4>
                            <ul className="space-y-3">
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-slate-900"></div> <div className="h-1 w-3/4 bg-slate-400"></div></li>
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-slate-900"></div> <div className="h-1 w-1/2 bg-slate-300"></div></li>
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-slate-900"></div> <div className="h-1 w-2/3 bg-slate-300"></div></li>
                            </ul>
                         </div>
                      </div>
                      <div className="border-l border-slate-900 pl-8 flex flex-col">
                        <h4 className="font-bold uppercase text-xs tracking-widest border-b border-slate-900 pb-1 mb-4 text-slate-900">Schedule (08:00 - 20:00)</h4>
                        <div className="flex-grow space-y-4">
                           {[...Array(6)].map((_, i) => (
                             <div key={i} className="flex gap-4 text-xs text-slate-400 border-b border-slate-300 pb-2">
                               <span className="font-mono">{8 + (i * 2)}:00</span>
                               <span className="h-1 w-full bg-slate-200 mt-2"></span>
                             </div>
                           ))}
                        </div>
                      </div>
                   </div>
                   
                   <div className="absolute left-0 top-0 bottom-0 w-6 bg-slate-200 border-r border-slate-300 flex flex-col gap-4 py-4 items-center">
                      <div className="w-3 h-3 rounded-full bg-slate-900 mb-4"></div>
                      <div className="w-3 h-3 border border-slate-500"></div>
                      <div className="w-3 h-3 border border-slate-500"></div>
                      <div className="w-3 h-3 border border-slate-500"></div>
                   </div>
                </div>
             </div>
             <div className="absolute top-8 right-8 w-[90%] h-full border border-slate-800 -z-10 rotate-2"></div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 border-b border-slate-900 bg-[#0d1219]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Silence the Noise. <span className="text-blue-500">Master the Execution.</span></h2>
          <p className="text-lg text-slate-400">
            Your brain is cluttered. Your digital planner shouldn’t be. In a world full of distractions, focus is the new currency. 
            <span className="text-white"> Your Blueprint</span> is the antidote to chaos.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Layers className="w-8 h-8 mb-4 text-blue-400" />,
              title: "Visual Silence",
              text: "We stripped away the fluff and decoration to give you a pure, white-space-dominant environment that forces clarity. No stickers. Just you and your goals."
            },
            { 
              icon: <Zap className="w-8 h-8 mb-4 text-blue-400" />,
              title: "Zero-Lag Architecture",
              text: "Engineered for speed. Smart hyperlinks connect your Yearly Vision down to your hourly schedule instantly. Reclaim your attention span."
            },
            { 
              icon: <Shield className="w-8 h-8 mb-4 text-blue-400" />,
              title: "Build Your Legacy",
              text: "The gap between where you are and where you want to be is simply a lack of a system. This aligns your daily grind with your life’s biggest ambitions."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#111827] p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The System (Features) - Desktop Interactive / Mobile Stacked */}
      <section id="system" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 md:mb-16">
             <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">Productivity Architecture</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white">What's Inside the System</h3>
          </div>

          {/* DESKTOP VIEW: Split Screen Interactive */}
          <div className="hidden md:flex flex-row gap-12">
            
            {/* Left: Menu */}
            <div className="w-1/3 space-y-2">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    activeFeature === idx 
                      ? 'bg-slate-900 border-blue-500 text-white shadow-[inset_3px_0_0_0_#3b82f6]' 
                      : 'bg-transparent border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  <div className="relative z-10">
                    <span className="font-bold tracking-wide block text-lg mb-1">{feature.title}</span>
                    <span className={`text-xs ${activeFeature === idx ? 'text-slate-400' : 'text-slate-600'} block font-normal`}>
                      {feature.desc}
                    </span>
                  </div>
                  {activeFeature === idx && <ChevronRight className="w-5 h-5 flex-shrink-0 text-blue-500" />}
                </button>
              ))}
            </div>

            {/* Right: Content & Mockup */}
            <div className="w-2/3 grid grid-cols-2 bg-[#111827] border border-slate-800 min-h-[600px] relative">
               {/* Background Grid for Content Area */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               
               {/* Description Side */}
               <div className="p-10 flex flex-col justify-center border-r border-slate-800/50 relative z-10">
                  <div className="mb-8 text-slate-100">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{features[activeFeature].title}</h3>
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                    {features[activeFeature].longDesc}
                  </p>
                  <div className="space-y-4">
                    {features[activeFeature].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300 border-b border-slate-800 pb-3">
                        <div className="w-1.5 h-1.5 bg-blue-500"></div>
                        <span className="font-mono text-sm uppercase tracking-wider">{detail}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Visual Mockup Side */}
               <div className="p-8 flex items-center justify-center bg-[#0b101b] overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="w-full aspect-[3/4] transition-all duration-500 hover:scale-[1.02] z-10">
                     {renderFeatureMockup(activeFeature)}
                  </div>
               </div>
            </div>
          </div>

          {/* MOBILE VIEW: Stacked Vertical Layout */}
          <div className="md:hidden space-y-16">
            {features.map((feature, idx) => (
              <div key={idx} className="border-t border-slate-800 pt-8">
                 <div className="flex items-center gap-3 mb-4 text-slate-100">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                 </div>
                 <p className="text-slate-400 mb-6 leading-relaxed">
                   {feature.longDesc}
                 </p>
                 <div className="space-y-3 mb-8">
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-500 border-b border-slate-800 pb-2">
                        <div className="w-1 h-1 bg-blue-600"></div>
                        <span className="font-mono text-xs uppercase tracking-wider">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile Mockup Area */}
                  <div className="w-full bg-[#111827] p-6 border border-slate-800 flex items-center justify-center relative overflow-hidden h-[400px]">
                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                     <div className="w-full h-full shadow-2xl z-10">
                        {renderFeatureMockup(idx)}
                     </div>
                  </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Specs & Pricing */}
      <section id="pricing" className="py-24 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-bold text-white mb-4">Don’t just plan your day.</h2>
           <h2 className="text-4xl font-bold text-slate-500 mb-12">Design your year.</h2>
           
           <div className="bg-[#0a0a0a] border border-slate-800 p-10 max-w-lg mx-auto relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.1)] group">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900/50 transition-colors pointer-events-none"></div>
              <div className="absolute top-0 right-0 bg-blue-900/30 text-blue-300 text-xs px-3 py-1 font-mono uppercase backdrop-blur-md border-l border-b border-blue-900/50">2026-2027 Edition</div>
              
              <div className="text-left mb-8">
                <p className="text-blue-500 text-sm uppercase tracking-widest mb-2 font-bold">The Full Architecture</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-slate-600 line-through">$49</span>
                </div>
              </div>

              <div className="text-left mb-8 space-y-2 border-b border-slate-800 pb-6">
                <p className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-2">Technical Specs</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MoveHorizontal className="w-4 h-4 text-blue-500" /> Left-Hand Friendly Layout
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Zap className="w-4 h-4 text-blue-500" /> Smart Hyperlinks (Zero-Lag)
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Feather className="w-4 h-4 text-blue-500" /> Ultra-lightweight PDF
                </div>
              </div>

              <ul className="text-left space-y-4 mb-10 text-slate-400">
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-white" /> Fully Dated (Jan - Dec)</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-white" /> Smart Navigation Sidebar</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-white" /> 630+ Architectural Pages</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-white" /> Instant PDF Delivery</li>
              </ul>

              <button className="w-full bg-slate-100 text-[#0f172a] py-4 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                Purchase Blueprint
              </button>
              <p className="mt-4 text-xs text-slate-600">Compatible with reMarkable 1, 2 & Paper Pro. Also works on Supernote & Boox.</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 text-slate-600 text-sm bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-slate-700 flex items-center justify-center bg-blue-900/20">
              <div className="w-1.5 h-1.5 bg-blue-500"></div>
            </div>
            <span className="font-bold uppercase tracking-widest font-mono text-slate-400">Your Blueprint</span>
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Installation Guide</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          </div>
          <div>
            &copy; 2026 Blueprint Systems.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;