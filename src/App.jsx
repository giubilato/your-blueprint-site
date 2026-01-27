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
  Feather
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
      icon: <Target className="w-6 h-6" />,
      desc: "Yearly Milestones & Quarterly Roadmaps to keep your vision clear. Don't just work—direct.",
      details: ["Yearly Milestones", "Quarterly Roadmaps", "OKR Dashboard"]
    },
    {
      title: "The Execution Core",
      icon: <Clock className="w-6 h-6" />,
      desc: "Daily & Weekly layouts optimized for Deep Work and Time Blocking. Separate the Urgent from the Important.",
      details: ["Weekly Deep Work", "Daily Performance Page", "Eisenhower Matrix"]
    },
    {
      title: "The Management Hub",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Smart-indexed Meeting Notes and Delegation Trackers to never lose a detail. A command center for your team.",
      details: ["Indexed Meeting Notes", "Delegation Tracker", "Project Roadmaps"]
    },
    {
      title: "The Growth Engine",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Refine your performance. Document your logic to learn from every choice.",
      details: ["Decision Logs", "Habit Trackers", "Brain Dump Grid"]
    }
  ];

  // Component to render different CSS mockups based on the active feature
  const renderFeatureMockup = (index) => {
    switch(index) {
      case 0: // Strategy Tower (Roadmap View)
        return (
          <div className="w-full h-full bg-[#e8e8e5] text-[#121212] p-6 font-serif relative overflow-hidden shadow-inner">
             <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
               <span className="uppercase font-bold tracking-widest text-sm">Q1 Roadmap</span>
               <span className="font-mono text-xs">2026-2027</span>
             </div>
             <div className="space-y-4">
               {/* Objective 1 */}
               <div>
                 <div className="flex justify-between items-end mb-1">
                   <span className="font-bold text-xs uppercase">Scale Operations</span>
                   <span className="font-mono text-[10px]">75%</span>
                 </div>
                 <div className="w-full h-2 bg-stone-300 relative">
                   <div className="absolute left-0 top-0 h-full w-3/4 bg-black"></div>
                 </div>
                 <div className="flex gap-2 mt-2">
                   <div className="w-1/3 h-8 border border-stone-400 p-1"><div className="w-full h-full bg-stone-200"></div></div>
                   <div className="w-1/3 h-8 border border-stone-400 p-1"></div>
                   <div className="w-1/3 h-8 border border-stone-400 p-1"></div>
                 </div>
               </div>
               {/* Objective 2 */}
               <div>
                 <div className="flex justify-between items-end mb-1">
                   <span className="font-bold text-xs uppercase">Launch V2</span>
                   <span className="font-mono text-[10px]">30%</span>
                 </div>
                 <div className="w-full h-2 bg-stone-300 relative">
                   <div className="absolute left-0 top-0 h-full w-[30%] bg-black"></div>
                 </div>
               </div>
               {/* OKR Mini Table */}
               <div className="mt-6 border border-black p-2">
                  <div className="text-[10px] font-bold uppercase mb-2 border-b border-stone-400 pb-1">Key Results</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 border border-black"></div> <div className="h-1 w-2/3 bg-stone-400"></div></div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 border border-black"></div> <div className="h-1 w-1/2 bg-stone-400"></div></div>
                  </div>
               </div>
             </div>
          </div>
        );
      case 1: // Execution Core (Weekly/Daily)
        return (
          <div className="w-full h-full bg-[#e8e8e5] text-[#121212] p-6 font-serif relative overflow-hidden shadow-inner">
            <div className="grid grid-cols-2 gap-4 h-full">
               <div className="border-r border-stone-400 pr-2">
                 <div className="uppercase font-bold text-xs mb-3 border-b border-black">Mon 12</div>
                 <div className="space-y-2">
                    <div className="bg-stone-300 h-6 w-full flex items-center px-1 text-[10px] font-mono">09:00 Strat. Meeting</div>
                    <div className="h-4 border-b border-stone-300"></div>
                    <div className="bg-black/10 h-10 w-full flex items-center px-1 text-[10px] font-mono border-l-2 border-black">Deep Work</div>
                    <div className="h-4 border-b border-stone-300"></div>
                    <div className="h-4 border-b border-stone-300"></div>
                 </div>
               </div>
               <div>
                 <div className="uppercase font-bold text-xs mb-3 border-b border-black">Priorities</div>
                 <div className="border border-stone-400 h-20 mb-2 p-1">
                   <span className="text-[8px] uppercase font-bold text-stone-500">Urgent / Important</span>
                   <div className="mt-1 w-full h-1 bg-black/80"></div>
                   <div className="mt-1 w-2/3 h-1 bg-black/80"></div>
                 </div>
                 <div className="border border-stone-300 h-20 p-1 opacity-60">
                   <span className="text-[8px] uppercase font-bold text-stone-500">Schedule</span>
                 </div>
               </div>
            </div>
          </div>
        );
      case 2: // Management Hub (Meeting Notes)
        return (
          <div className="w-full h-full bg-[#e8e8e5] text-[#121212] p-6 font-serif relative overflow-hidden shadow-inner">
             <div className="flex gap-4 mb-4 border-b border-black pb-2">
                <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-sm">M</div>
                <div>
                   <div className="text-xs font-bold uppercase">Board Meeting</div>
                   <div className="text-[10px] text-stone-600">Attendees: CEO, CTO, VP</div>
                </div>
             </div>
             <div className="flex h-full gap-4">
                <div className="w-1/3 border-r border-stone-400 pr-2 space-y-2">
                   <div className="text-[10px] font-bold uppercase text-stone-500">Agenda</div>
                   <div className="w-full h-1 bg-stone-400"></div>
                   <div className="w-2/3 h-1 bg-stone-400"></div>
                   <div className="w-3/4 h-1 bg-stone-400"></div>
                </div>
                <div className="w-2/3 space-y-3">
                   <div className="text-[10px] font-bold uppercase text-stone-500">Notes & Actions</div>
                   <div className="w-full h-1 bg-stone-300"></div>
                   <div className="w-full h-1 bg-stone-300"></div>
                   <div className="w-full h-1 bg-stone-300"></div>
                   <div className="mt-4 border border-stone-400 p-2">
                      <div className="flex gap-2 items-center mb-1">
                        <div className="w-2 h-2 border border-black"></div>
                        <div className="w-full h-1 bg-stone-400"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
      case 3: // Growth Engine (Habits)
        return (
          <div className="w-full h-full bg-[#e8e8e5] text-[#121212] p-6 font-serif relative overflow-hidden shadow-inner">
             <div className="uppercase font-bold tracking-widest text-sm border-b-2 border-black pb-2 mb-4">Habit Tracker</div>
             <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <span className="w-16 text-[10px] uppercase font-bold text-right">Read</span>
                   <div className="flex-1 flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`h-4 w-4 border border-stone-400 ${i < 5 ? 'bg-black' : 'bg-transparent'}`}></div>
                      ))}
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-16 text-[10px] uppercase font-bold text-right">Deep Work</span>
                   <div className="flex-1 flex gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className={`h-4 w-4 border border-stone-400 ${i % 2 === 0 ? 'bg-stone-400' : 'bg-transparent'}`}></div>
                      ))}
                   </div>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-400">
                   <div className="uppercase font-bold text-[10px] mb-2">Decision Log</div>
                   <div className="bg-white border border-stone-300 p-2 text-[8px] font-mono leading-relaxed">
                      DECISION: Hire VP of Sales.<br/>
                      LOGIC: Revenue flat for Q2.<br/>
                      OUTCOME: TBD.
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
    <div className="min-h-screen bg-[#121212] text-stone-300 font-sans selection:bg-stone-700 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md border-stone-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-stone-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-stone-300"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-100 font-mono">Your Blueprint</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-stone-500">
            {/* Menu items removed as requested */}
            <a href="#pricing" className="bg-stone-100 text-[#121212] px-6 py-2 hover:bg-stone-300 transition-colors font-bold">
              Get Access
            </a>
          </div>

          <button className="md:hidden text-stone-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#121212] border-b border-stone-800 p-6 flex flex-col gap-6 md:hidden">
            {/* Mobile menu items removed */}
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="bg-stone-100 text-[#121212] px-6 py-3 w-full font-bold text-center block">
              Get Access
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section - "Authority" Frame */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-stone-900">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           {/* Grid Background */}
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 border border-stone-700 text-stone-500 text-xs uppercase tracking-[0.2em] mb-6">
              For reMarkable 2 & Paper Pro
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Stop Reacting. <br/><span className="text-stone-500">Start Orchestrating.</span>
            </h1>
            <h2 className="text-lg font-bold text-stone-300 uppercase tracking-wider mb-6">
              The Ultimate Productivity System for reMarkable 2 & Paper Pro.
            </h2>
            <p className="text-lg text-stone-400 mb-6 max-w-lg leading-relaxed">
              Most digital planners are just endless pages of blank lines. They let you write, but they don't help you build. 
              <span className="text-white font-medium"> Your Blueprint</span> is different. It is a complete Productivity Architecture designed for high-performers.
            </p>
            <p className="text-sm text-stone-500 mb-10 max-w-lg leading-relaxed border-l-2 border-stone-700 pl-4">
              Integrates the world’s most effective methodologies—GTD®, OKRs, and Time Blocking—into one seamless, distraction-free workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="bg-stone-100 text-[#121212] px-8 py-4 font-bold uppercase tracking-wide hover:bg-stone-300 transition-all flex items-center justify-center gap-2 group">
                Download Architecture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border border-stone-700 text-stone-300 px-8 py-4 font-medium uppercase tracking-wide hover:border-stone-500 hover:text-white transition-all">
                View Methodology
              </button>
            </div>
          </div>

          {/* Abstract Device Visualization */}
          <div className="relative h-[600px] w-full hidden md:block">
             <div className="absolute top-0 right-0 w-[85%] h-full bg-[#1a1a1a] border border-stone-800 shadow-2xl p-6 rotate-[-2deg] hover:rotate-0 transition-all duration-700">
                {/* Simulated Screen */}
                <div className="w-full h-full bg-[#e8e8e5] text-[#121212] p-8 flex flex-col relative overflow-hidden font-serif">
                   {/* E-Ink Texture Overlay - Removed bg-noise to fix error */}
                   <div className="absolute inset-0 pointer-events-none opacity-5"></div>
                   
                   {/* Header */}
                   <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
                      <div>
                        <h3 className="text-3xl font-bold uppercase tracking-tighter">Daily Performance</h3>
                        <p className="text-sm italic text-stone-600">October 12, Tuesday</p>
                      </div>
                      <div className="text-xs font-mono border border-black px-2 py-1">Q4 / Wk 41</div>
                   </div>

                   {/* Content Mockup */}
                   <div className="grid grid-cols-2 gap-8 h-full">
                      <div className="space-y-6">
                         <div className="space-y-2">
                           <h4 className="font-bold uppercase text-xs tracking-widest border-b border-black pb-1">Eisenhower Matrix</h4>
                           <div className="grid grid-cols-2 gap-2 h-32">
                              <div className="border border-stone-400 bg-stone-200/50 p-2 text-xs">Do First</div>
                              <div className="border border-stone-300 p-2 text-xs text-stone-500">Schedule</div>
                              <div className="border border-stone-300 p-2 text-xs text-stone-500">Delegate</div>
                              <div className="border border-stone-300 p-2 text-xs text-stone-500">Delete</div>
                           </div>
                         </div>
                         <div className="space-y-2">
                            <h4 className="font-bold uppercase text-xs tracking-widest border-b border-black pb-1">Top 3 Targets</h4>
                            <ul className="space-y-3">
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-black"></div> <div className="h-1 w-3/4 bg-stone-400"></div></li>
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-black"></div> <div className="h-1 w-1/2 bg-stone-300"></div></li>
                               <li className="flex gap-2 items-center"><div className="w-4 h-4 border border-black"></div> <div className="h-1 w-2/3 bg-stone-300"></div></li>
                            </ul>
                         </div>
                      </div>
                      <div className="border-l border-black pl-8 flex flex-col">
                        <h4 className="font-bold uppercase text-xs tracking-widest border-b border-black pb-1 mb-4">Schedule (08:00 - 20:00)</h4>
                        <div className="flex-grow space-y-4">
                           {[...Array(6)].map((_, i) => (
                             <div key={i} className="flex gap-4 text-xs text-stone-400 border-b border-stone-300 pb-2">
                               <span className="font-mono">{8 + (i * 2)}:00</span>
                               <span className="h-1 w-full bg-stone-200 mt-2"></span>
                             </div>
                           ))}
                        </div>
                      </div>
                   </div>
                   
                   {/* Sidebar Mockup */}
                   <div className="absolute left-0 top-0 bottom-0 w-6 bg-stone-200 border-r border-stone-300 flex flex-col gap-4 py-4 items-center">
                      <div className="w-3 h-3 rounded-full bg-black mb-4"></div>
                      <div className="w-3 h-3 border border-stone-500"></div>
                      <div className="w-3 h-3 border border-stone-500"></div>
                      <div className="w-3 h-3 border border-stone-500"></div>
                   </div>
                </div>
             </div>
             {/* Back Layer */}
             <div className="absolute top-8 right-8 w-[85%] h-full border border-stone-800 -z-10 rotate-2"></div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 border-b border-stone-900 bg-[#151515]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Design Your Days. <span className="text-stone-500">Build Your Legacy.</span></h2>
          <p className="text-lg text-stone-400">
            Success isn’t an accident. It’s a blueprint. The gap between where you are and where you want to be is simply a lack of a system.
            <span className="text-white"> Your Blueprint</span> turns your reMarkable tablet into a strategic command center.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Layers className="w-8 h-8 mb-4 text-stone-100" />,
              title: "Visual Silence",
              text: "A minimalist design that lowers cognitive load. No stickers. No distractions. Just you and your goals."
            },
            { 
              icon: <Zap className="w-8 h-8 mb-4 text-stone-100" />,
              title: "Zero-Lag Navigation",
              text: "Smart hyperlinks for instant access. Jump from Quarterly Strategy to Daily Execution in two taps."
            },
            { 
              icon: <Shield className="w-8 h-8 mb-4 text-stone-100" />,
              title: "High-Status Logic",
              text: "From the Yearly Vision down to the hourly schedule, every page is linked by a logic designed to move you forward."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 border border-stone-800 hover:border-stone-600 transition-colors group">
              <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The System (Features) - Interactive Mockups */}
      <section id="system" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left: Menu */}
            <div className="md:w-1/3 space-y-2">
              <h2 className="text-xs font-mono uppercase text-stone-500 mb-8 tracking-widest">What's Inside</h2>
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group ${
                    activeFeature === idx 
                      ? 'bg-stone-100 border-stone-100 text-[#121212]' 
                      : 'bg-transparent border-stone-800 text-stone-500 hover:border-stone-600 hover:text-stone-300'
                  }`}
                >
                  <span className="font-bold tracking-wide">{feature.title}</span>
                  {activeFeature === idx && <ChevronRight className="w-5 h-5" />}
                </button>
              ))}
            </div>

            {/* Right: Content & Mockup */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a] border border-stone-800">
               {/* Description Side */}
               <div className="p-8 md:p-12 flex flex-col justify-center border-r border-stone-800/50">
                  <div className="mb-6 text-stone-500 opacity-50">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">{features[activeFeature].title}</h3>
                  <p className="text-lg text-stone-400 mb-8 leading-relaxed">
                    {features[activeFeature].desc}
                  </p>
                  <div className="space-y-3">
                    {features[activeFeature].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-stone-300 border-b border-stone-800 pb-3">
                        <div className="w-1.5 h-1.5 bg-stone-500"></div>
                        <span className="font-mono text-sm uppercase tracking-wider">{detail}</span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Visual Mockup Side */}
               <div className="p-8 flex items-center justify-center bg-[#151515] overflow-hidden">
                  <div className="w-full aspect-[3/4] shadow-2xl rotate-1 hover:rotate-0 transition-all duration-500">
                     {renderFeatureMockup(activeFeature)}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs & Pricing */}
      <section id="pricing" className="py-24 px-6 bg-[#151515] border-t border-stone-900">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-bold text-white mb-4">Don’t just plan your day.</h2>
           <h2 className="text-4xl font-bold text-stone-500 mb-12">Design your year.</h2>
           
           <div className="bg-[#121212] border border-stone-700 p-10 max-w-lg mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-stone-800 text-stone-300 text-xs px-3 py-1 font-mono uppercase">2026-2027 Edition</div>
              
              <div className="text-left mb-8">
                <p className="text-stone-500 text-sm uppercase tracking-widest mb-2">The Full Architecture</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-stone-500 line-through">$49</span>
                </div>
              </div>

              <div className="text-left mb-8 space-y-2 border-b border-stone-800 pb-6">
                <p className="text-xs font-mono uppercase text-stone-500 tracking-wider mb-2">Technical Specs</p>
                <div className="flex items-center gap-2 text-sm text-stone-400">
                  <MoveHorizontal className="w-4 h-4" /> Left-Hand Friendly Layout
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-400">
                  <Zap className="w-4 h-4" /> Smart Hyperlinks (Zero-Lag)
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-400">
                  <Feather className="w-4 h-4" /> Ultra-lightweight PDF
                </div>
              </div>

              <ul className="text-left space-y-4 mb-10 text-stone-400">
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-stone-100" /> Fully Dated (Jan - Dec)</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-stone-100" /> Smart Navigation Sidebar</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-stone-100" /> 630+ Architectural Pages</li>
                <li className="flex gap-3"><CheckSquare className="w-5 h-5 text-stone-100" /> Instant PDF Delivery</li>
              </ul>

              <button className="w-full bg-stone-100 text-[#121212] py-4 font-bold uppercase tracking-widest hover:bg-stone-300 transition-colors">
                Purchase Blueprint
              </button>
              <p className="mt-4 text-xs text-stone-600">Compatible with reMarkable 1, 2 & Paper Pro. Also works on Supernote & Boox.</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-900 text-stone-600 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-stone-700 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-stone-700"></div>
            </div>
            <span className="font-bold uppercase tracking-widest font-mono">Your Blueprint</span>
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-stone-400">Support</a>
             <a href="#" className="hover:text-stone-400">Installation Guide</a>
             <a href="#" className="hover:text-stone-400">Privacy</a>
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