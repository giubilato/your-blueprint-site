import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, ChevronRight, Briefcase, TrendingUp, Layers, CheckSquare, 
  ArrowRight, Shield, Clock, Zap, MoveHorizontal, Feather, Layout, Plus, Minus, Mail 
} from 'lucide-react';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // STATO WAITLIST
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // LOGICA FORMSPREE
  const handleJoinWaitlist = async (e) => {
    e.preventDefault();

    if (!privacyAccepted) {
      alert("Please confirm that you want to receive the notification.");
      return;
    }

    if (email) {
      try {
        const response = await fetch("https://formspree.io/f/xzdaekyy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ email: email })
        });

        if (response.ok) {
          setIsSubmitted(true);
          setEmail('');
          setPrivacyAccepted(false);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    }
  };

  const handleScrollToWaitlist = (e) => {
    if(e) e.preventDefault();
    const element = document.getElementById('waitlist-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId;
    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // IMMAGINI CAROSELLO
  const carouselImages = [
    "/images/1-yearly-milestone.png",
    "/images/2-monthly-planner.png",
    "/images/3-weekly-planner.png",
    "/images/4-daily-performance.png",
    "/images/5-important-notes.png"
  ];

  // Nomi personalizzati per le etichette del carosello
  const carouselLabels = [
    "Yearly Milestone",
    "Monthly Planner",
    "Weekly Planner",
    "Daily Performance",
    "Important Notes"
  ];

  // DATI CONTENUTO AGGIORNATI CON LE 5 PAGINE REALI E LE IMMAGINI
  const features = [
    {
      title: "Yearly Milestone Log",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      desc: "Map your long-term vision and track major objectives on a single page.",
      longDesc: "Stop losing sight of the big picture. The Yearly Milestone Log lets you plot out massive goals across 12 months, ensuring your daily grind aligns with your true north.",
      details: ["Yearly Objectives", "Macro Planning", "Progress Tracking"],
      image: "/images/1-yearly-milestone.png"
    },
    {
      title: "Monthly Planner & OKRs",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      desc: "Break down your yearly goals into actionable monthly metrics.",
      longDesc: "Bridge the gap between vision and execution. Set monthly Objectives and Key Results, review past performance, and meticulously align your next 30 days.",
      details: ["Monthly OKRs", "Habit Tracking Setup", "Performance Review"],
      image: "/images/2-monthly-planner.png"
    },
    {
      title: "Weekly Deep Work",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      desc: "Time-block your week to protect your most valuable asset: attention.",
      longDesc: "A visual schedule to allocate Deep Work blocks, manage recurring meetings, and identify bottlenecks before the week even begins. Protect your focus at all costs.",
      details: ["Time Blocking", "Weekly Priorities", "Capacity Planning"],
      image: "/images/3-weekly-planner.png"
    },
    {
      title: "Daily Performance",
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      desc: "Instantly separate the Urgent from the Important every single day.",
      longDesc: "A pure, white-space-dominant environment that forces clarity. Prioritize tasks with the Eisenhower Matrix and track daily progress without digital distraction.",
      details: ["Eisenhower Matrix", "Schedule Sync", "Daily Debrief"],
      image: "/images/4-daily-performance.png"
    },
    {
      title: "Brain Dump Grid (Notes)",
      icon: <Feather className="w-6 h-6 text-blue-400" />,
      desc: "Unstructured space for structured thinking. Capture ideas instantly.",
      longDesc: "Don't let brilliant ideas slip away. A dedicated, dot-grid environment for meeting notes, spontaneous brain dumps, and project sketching, seamlessly indexed.",
      details: ["Indexed Notes", "Dot-Grid Layout", "Idea Capture"],
      image: "/images/5-important-notes.png"
    }
  ];

  const specs = [
    { label: "Yearly Milestone Log", value: "2 Pages" },
    { label: "Monthly Planner & OKR Dashboard", value: "12 Pages" },
    { label: "Weekly Deep Work", value: "52 Pages" },
    { label: "Daily Performance", value: "365 Pages" },
    { label: "Brain Dump Grid (Notes)", value: "20 Pages" },
  ];

  const faqs = [
    {
      q: "Does this work on reMarkable 1, 2 and Paper Pro?",
      a: "Yes. The file is a hyperlinked PDF architected specifically for the reMarkable ecosystem. It works flawlessly on rM1, rM2, and the new Paper Pro (color supported)."
    },
    {
      q: "Is this a subscription?",
      a: "No. You pay once, you own it forever. This is a digital product purchase, not a recurring service."
    },
    {
      q: "How do I install it?",
      a: "It's simple. After purchase, you'll receive the PDF file. Drag and drop it into your reMarkable app (desktop or mobile), and it will sync to your tablet instantly."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-20 px-6 border-b border-slate-900">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScrollToWaitlist}
                className="bg-slate-100 text-[#0f172a] px-8 py-4 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative h-[650px] w-full hidden md:flex items-center justify-center">
             <div className="absolute top-[5%] right-0 w-[85%] h-[90%] rotate-[-2deg] hover:rotate-0 transition-transform duration-700 group">
                <img 
                   src="/images/daily-performance.png" 
                   alt="Daily Performance Layout" 
                   className="w-full h-full object-cover object-top rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
             </div>
          </div>
        </div>
      </header>

      <section id="philosophy" className="py-24 px-6 border-b border-slate-900 bg-[#0d1219]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Silence the Noise. <span className="text-blue-500">Master the Execution.</span></h2>
          <p className="text-lg text-slate-400">Your brain is cluttered. Your digital planner shouldn’t be. In a world full of distractions, focus is the new currency. <span className="text-white"> Your Blueprint</span> is the antidote to chaos.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Layers className="w-8 h-8 mb-4 text-blue-400" />, title: "Visual Silence", text: "We stripped away the fluff and decoration to give you a pure, white-space-dominant environment that forces clarity." },
            { icon: <Zap className="w-8 h-8 mb-4 text-blue-400" />, title: "Zero-Lag Architecture", text: "Engineered for speed. Smart hyperlinks connect your Yearly Vision down to your hourly schedule instantly." },
            { icon: <Shield className="w-8 h-8 mb-4 text-blue-400" />, title: "Build Your Legacy", text: "The gap between where you are and where you want to be is simply a lack of a system." }
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

      {/* --- CAROSELLO --- */}
      <section className="py-20 bg-[#0a0a0a] border-b border-slate-900 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 mb-10">
           <h3 className="text-xs font-mono uppercase text-blue-500 tracking-widest mb-2">Technical Schematics</h3>
           <p className="text-2xl font-bold text-white">Full System Overview</p>
         </div>
         <div 
           ref={scrollRef} 
           className="flex gap-8 px-6 overflow-x-auto pb-8 no-scrollbar cursor-grab active:cursor-grabbing" 
           onMouseEnter={() => setIsPaused(true)} 
           onMouseLeave={() => setIsPaused(false)} 
           onTouchStart={() => setIsPaused(true)} 
           onTouchEnd={() => setIsPaused(false)}
         >
            {[...carouselImages, ...carouselImages, ...carouselImages].map((imgSrc, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] h-[360px] border border-slate-800 bg-[#0d1219] p-4 relative group hover:border-blue-500/50 transition-colors overflow-hidden">
                 <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={imgSrc} 
                      alt={`Layout ${(i % 5) + 1}`} 
                      className="w-full h-full object-cover object-top rounded-sm bg-white/5"
                      loading="lazy"
                    />
                 </div>
                 <div className="absolute bottom-4 left-4 z-10 bg-[#0d1219]/90 px-3 py-1.5 text-xs font-bold text-slate-300 rounded shadow-xl backdrop-blur-sm border border-slate-800">
                    {carouselLabels[i % 5]}
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* --- ARCHITECTURE SECTION --- */}
      <section id="system" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
             <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">Productivity Architecture</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white">What's Inside the System</h3>
          </div>
          
          <div className="hidden md:flex flex-row gap-12">
            <div className="w-1/3 space-y-2">
              {features.map((feature, idx) => (
                <button key={idx} onClick={() => setActiveFeature(idx)} className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${activeFeature === idx ? 'bg-slate-900 border-blue-500 text-white shadow-[inset_3px_0_0_0_#3b82f6]' : 'bg-transparent border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'}`}>
                  <div className="relative z-10">
                    <span className="font-bold tracking-wide block text-lg mb-1">{feature.title}</span>
                    <span className={`text-xs ${activeFeature === idx ? 'text-slate-400' : 'text-slate-600'} block font-normal`}>{feature.desc}</span>
                  </div>
                  {activeFeature === idx && <ChevronRight className="w-5 h-5 flex-shrink-0 text-blue-500" />}
                </button>
              ))}
            </div>
            <div className="w-2/3 grid grid-cols-2 bg-[#111827] border border-slate-800 min-h-[600px] relative">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               
               <div className="p-10 flex flex-col justify-center border-r border-slate-800/50 relative z-10">
                  <div className="mb-8 text-slate-100">{features[activeFeature].icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-6">{features[activeFeature].title}</h3>
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed">{features[activeFeature].longDesc}</p>
                  <div className="space-y-4">
                    {features[activeFeature].details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300 border-b border-slate-800 pb-3">
                        <div className="w-1.5 h-1.5 bg-blue-500"></div>
                        <span className="font-mono text-sm uppercase tracking-wider">{detail}</span>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="p-8 flex items-center justify-center bg-[#0b101b] overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="w-full aspect-[3/4] transition-all duration-500 hover:scale-[1.02] z-10">
                     <img 
                       src={features[activeFeature].image} 
                       alt={features[activeFeature].title} 
                       className="w-full h-full object-cover object-top rounded-lg shadow-2xl border border-slate-700/50"
                     />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="md:hidden space-y-16">
            {features.map((feature, idx) => (
              <div key={idx} className="border-t border-slate-800 pt-8">
                 <div className="flex items-center gap-3 mb-4 text-slate-100">
                   {feature.icon}
                   <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                 </div>
                 <p className="text-slate-400 mb-6 leading-relaxed">{feature.longDesc}</p>
                 <div className="space-y-3 mb-8">
                   {feature.details.map((detail, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-500 border-b border-slate-800 pb-2">
                       <div className="w-1 h-1 bg-blue-600"></div>
                       <span className="font-mono text-xs uppercase tracking-wider">{detail}</span>
                     </div>
                   ))}
                 </div>
                 <div className="w-full bg-[#111827] p-6 border border-slate-800 flex items-center justify-center relative overflow-hidden h-[400px]">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="w-full h-full shadow-2xl z-10">
                      <img 
                         src={feature.image} 
                         alt={feature.title} 
                         className="w-full h-full object-cover object-top rounded-md border border-slate-700/50"
                      />
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xs font-mono uppercase text-blue-500 mb-16 tracking-widest">Executive Field Reports</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{ text: "Finally a system that respects my executive bandwidth.", author: "Marco R.", role: "COO" }, { text: "I've tried every digital planner. This is the only one that works.", author: "Sarah L.", role: "VP Eng" }, { text: "Worth 10x the price.", author: "David K.", role: "CEO" }].map((review, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-slate-800 p-8 relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-900/30"></div>
                 <p className="text-slate-300 leading-relaxed mb-6 italic">"{review.text}"</p>
                 <div><div className="font-bold text-white">{review.author}</div><div className="text-xs font-mono text-blue-500 uppercase mt-1">{review.role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-slate-900">
         <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8"><h3 className="text-xl font-bold text-white">System Specifications</h3></div>
            <div className="border border-slate-800">
               {specs.map((spec, i) => (<div key={i} className={`flex justify-between p-4 ${i !== specs.length - 1 ? 'border-b border-slate-800' : ''} hover:bg-slate-900/30 transition-colors`}><span className="font-mono text-sm text-slate-400">{spec.label}</span><span className="font-mono text-sm text-blue-400 font-bold">{spec.value}</span></div>))}
            </div>
         </div>
      </section>

      {/* WAITLIST SECTION */}
      <section id="waitlist-section" className="py-24 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">The Blueprint is coming.</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We are finalizing the architecture. Join the waitlist to receive a <span className="text-blue-400 font-bold">special launch price</span> when we go live.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#0a0a0a] border border-slate-700 text-white pl-12 pr-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-600 font-sans"
                    />
                  </div>
                  <button type="submit" className="bg-slate-100 text-[#0f172a] px-8 py-4 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                    Notify Me
                  </button>
                </div>

                <div className="flex items-start justify-center gap-3 text-left">
                  <input
                    type="checkbox"
                    id="privacy-check"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-blue-600 bg-[#0a0a0a] border-slate-700 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="privacy-check" className="text-xs text-slate-400 cursor-pointer select-none">
                    I consent to receive a notification <strong>solely regarding the availability</strong> of Your Blueprint.
                    <Link to="/privacy" className="text-blue-500 hover:underline ml-1">Read Privacy Policy</Link>.
                  </label>
                </div>
              </form>
            ) : (
              <div className="bg-blue-900/10 border border-blue-900/50 text-blue-400 p-8 max-w-md mx-auto backdrop-blur-sm animate-fade-in">
                 <p className="font-bold text-lg mb-2">You're on the list!</p>
                 <p className="text-sm text-slate-300">We'll be in touch soon with your early access invite.</p>
              </div>
            )}
            
            <p className="mt-8 text-xs text-slate-600 uppercase tracking-widest flex items-center justify-center gap-2">
              <Shield className="w-3 h-3" /> No spam. Secure data processing.
            </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-slate-900">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-800 bg-[#0d1219]">
                     <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900/50 transition-colors"><span className="font-bold text-slate-200">{faq.q}</span>{openFaq === i ? <Minus className="w-5 h-5 text-blue-500"/> : <Plus className="w-5 h-5 text-slate-500"/>}</button>
                     {openFaq === i && (<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-900 pt-4">{faq.a}</div>)}
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;