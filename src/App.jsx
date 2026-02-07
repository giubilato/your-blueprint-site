import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  ChevronRight, 
  ChevronDown,
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
  Layout,
  Tablet,
  Smartphone,
  Cpu,
  Download,
  HelpCircle,
  Plus,
  Minus,
  FileText,
  ArrowLeft,
  Calendar
} from 'lucide-react';

// --- MOCK BLOG DATA ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Paper Tablets Are The Future of Deep Work",
    excerpt: "In a world of constant notifications, the reMarkable ecosystem offers a sanctuary for focused thought. Here is how to leverage it.",
    date: "OCT 12, 2025",
    readTime: "5 MIN READ",
    content: (
      <>
        <p className="mb-6">The modern workspace is a minefield of distractions. Slack pings, email notifications, and browser tabs are the enemies of deep work. This is why devices like the reMarkable 2 and the new Paper Pro are not just gadgets; they are productivity moats.</p>
        <h3 className="text-xl font-bold text-white mb-4">The Cost of Context Switching</h3>
        <p className="mb-6">Research shows it takes an average of 23 minutes to regain focus after an interruption. If you check your email every 10 minutes, you are effectively never working at your cognitive peak.</p>
        <h3 className="text-xl font-bold text-white mb-4">Analog Feel, Digital Power</h3>
        <p className="mb-6">The tactile sensation of writing on e-ink triggers different cognitive processes than typing. It slows you down just enough to think, but the digital nature allows for infinite editing. Our Blueprint system is built on this paradox: structured like a paper planner, but architected with hyperlinks for speed.</p>
      </>
    )
  },
  {
    id: 2,
    title: "The Quarterly Roadmap: Stop Planning Day-to-Day",
    excerpt: "Most people fail because they plan their days before they plan their quarters. Learn the top-down architectural approach.",
    date: "SEP 28, 2025",
    readTime: "8 MIN READ",
    content: (
      <>
        <p className="mb-6">Micro-management is a trap. If you wake up every morning wondering "what should I do today?", you have already lost. High performance requires a separation of Strategy and Execution.</p>
        <h3 className="text-xl font-bold text-white mb-4">The Strategy Tower Concept</h3>
        <p className="mb-6">Think of your productivity system as a building. The foundation is your Yearly Vision. The floors are your Quarterly Roadmaps. The rooms are your Weekly Sprints. The furniture is your Daily Task list.</p>
        <p className="mb-6">You cannot arrange the furniture if you haven't built the floor. Our system forces you to define the Q1 Roadmap before you ever touch a Monday morning schedule.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Eisenhower Matrix 2.0: Beyond Urgent & Important",
    excerpt: "The classic matrix is useful, but we've adapted it for the executive mind. How to categorize tasks when everything seems critical.",
    date: "SEP 10, 2025",
    readTime: "4 MIN READ",
    content: (
      <>
        <p className="mb-6">General Dwight D. Eisenhower famously said: 'What is important is seldom urgent, and what is urgent is seldom important.' But in a startup or high-stakes corporate environment, everything feels urgent.</p>
        <h3 className="text-xl font-bold text-white mb-4">The Delete Quadrant</h3>
        <p className="mb-6">The most underused quadrant in our Blueprint is 'Delete'. We often feel compelled to do things simply because they are on a list. The highest leverage skill you can develop is the ability to look at a task and simply decide it will not happen.</p>
      </>
    )
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // NAVIGATION STATE
  // 'home' = Landing Page
  // 'blog' = List of articles
  // 'post' = Single article view
  const [currentView, setCurrentView] = useState('home');
  const [activePost, setActivePost] = useState(null);

  // CONFIGURATION: Replace this URL with your actual Lemon Squeezy / Gumroad / Stripe link
  const CHECKOUT_URL = "https://your-checkout-link.com/buy/blueprint-2026"; 

  // Gallery Logic
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic Scroll Effect (Only active on Home)
  useEffect(() => {
    if (currentView !== 'home') return;
    
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
  }, [isPaused, currentView]); // Added currentView to deps

  // Smooth Scroll Function
  const scrollToPricing = (e) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      // Wait for render then scroll
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- NAVIGATION HANDLERS ---
  const goToHome = () => {
    setCurrentView('home');
    setActivePost(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const goToBlog = () => {
    setCurrentView('blog');
    setActivePost(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const goToPost = (post) => {
    setActivePost(post);
    setCurrentView('post');
    window.scrollTo(0, 0);
  };

  // --- CONTENT DATA ---
  const features = [
    {
      title: "The Strategy Tower",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      desc: "Yearly Milestones & Quarterly Roadmaps to keep your vision clear.",
      longDesc: "Most planners let you write, but they don't help you build. The Strategy Tower aligns your daily grind with your life's biggest ambitions using a top-down architectural approach.",
      details: ["Yearly Milestones", "Quarterly Roadmaps", "OKR Dashboard"]
    },
    {
      title: "The Execution Core",
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      desc: "Daily & Weekly layouts optimized for Deep Work and Time Blocking.",
      longDesc: "Instantly separate the Urgent from the Important on every daily page. A pure, white-space-dominant environment that forces clarity and protects your attention span.",
      details: ["Weekly Deep Work", "Daily Performance Page", "Eisenhower Matrix"]
    },
    {
      title: "The Management Hub",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      desc: "Smart-indexed Meeting Notes and Delegation Trackers.",
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

  const specs = [
    { label: "Yearly Milestone Log", value: "2 Pages" },
    { label: "Quarterly Strategy", value: "8 Pages" },
    { label: "Monthly OKR Dashboard", value: "12 Pages" },
    { label: "Weekly Deep Work", value: "52 Pages" },
    { label: "Daily Performance", value: "365 Pages" },
    { label: "Project Gantt Charts", value: "12 Pages" },
    { label: "Meeting Notes (Indexed)", value: "100 Pages" },
    { label: "Delegation Tracker", value: "12 Pages" },
    { label: "Decision Logs", value: "12 Pages" },
    { label: "Brain Dump Grid", value: "50 Pages" },
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
               <div>
                 <div className="flex justify-between items-end mb-2">
                   <span className="font-bold text-sm uppercase tracking-wide text-slate-800">Launch V2</span>
                   <span className="font-mono text-xs text-slate-600">30%</span>
                 </div>
                 <div className="w-full h-3 bg-slate-300 relative">
                   <div className="absolute left-0 top-0 h-full w-[30%] bg-blue-900"></div>
                 </div>
               </div>
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

  // --- RENDER VIEWS ---

  // 1. HOME VIEW (LANDING PAGE)
  const renderHome = () => (
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
                onClick={handlePurchase}
                className="bg-slate-100 text-[#0f172a] px-8 py-4 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                Download Architecture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Abstract Device Visualization */}
          <div className="relative h-[650px] w-full hidden md:block">
             <div className="absolute top-0 right-0 w-[90%] h-full bg-[#0f172a] border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 rotate-[-2deg] hover:rotate-0 transition-all duration-700 group">
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

      {/* 2. SCHEMATIC GALLERY (BLUEPRINT ROLL) */}
      <section className="py-20 bg-[#0a0a0a] border-b border-slate-900 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 mb-10">
           <h3 className="text-xs font-mono uppercase text-blue-500 tracking-widest mb-2">Technical Schematics</h3>
           <p className="text-2xl font-bold text-white">Full System Overview</p>
         </div>
         {/* Infinite Scroll Container */}
         <div 
           ref={scrollRef}
           className="flex gap-8 px-6 overflow-x-auto pb-8 no-scrollbar cursor-grab active:cursor-grabbing"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
           onTouchStart={() => setIsPaused(true)}
           onTouchEnd={() => setIsPaused(false)}
         >
            {/* Duplicated items to allow for scrolling illusion */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] h-[360px] border border-slate-800 bg-[#0d1219] p-4 relative group hover:border-blue-500/50 transition-colors">
                 <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-600 group-hover:text-blue-400">FIG 0{(i % 6) + 1}</div>
                 <div className="w-full h-full border border-dashed border-slate-700 opacity-50 flex items-center justify-center">
                    <div className="text-center">
                       <Layout className="w-8 h-8 text-slate-700 mx-auto mb-2"/>
                       <span className="text-xs font-mono text-slate-700 uppercase">Wireframe View</span>
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 text-xs font-bold text-slate-400">Page Layout 0{(i % 6) + 1}</div>
              </div>
            ))}
         </div>
      </section>

      {/* The System (Features) */}
      <section id="system" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
             <h2 className="text-xs font-mono uppercase text-blue-500 mb-2 tracking-widest">Productivity Architecture</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white">What's Inside the System</h3>
          </div>

          <div className="hidden md:flex flex-row gap-12">
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

            <div className="w-2/3 grid grid-cols-2 bg-[#111827] border border-slate-800 min-h-[600px] relative">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
               
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

               <div className="p-8 flex items-center justify-center bg-[#0b101b] overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="w-full aspect-[3/4] transition-all duration-500 hover:scale-[1.02] z-10">
                     {renderFeatureMockup(activeFeature)}
                  </div>
               </div>
            </div>
          </div>

          {/* Mobile Stacked View */}
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
                     <div className="w-full h-full shadow-2xl z-10">{renderFeatureMockup(idx)}</div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE REVIEWS (High Status) */}
      <section className="py-24 px-6 bg-[#0d1219] border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xs font-mono uppercase text-blue-500 mb-16 tracking-widest">Executive Field Reports</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Finally a system that respects my executive bandwidth. No stickers, no fluff. Just pure strategy execution.", author: "Marco R.", role: "Chief Operating Officer" },
              { text: "I've tried every digital planner on the market. This is the only one that actually mirrors how a C-Level mind works.", author: "Sarah L.", role: "VP of Engineering" },
              { text: "The architectural approach to quarterly planning changed how I lead my team. Worth 10x the price.", author: "David K.", role: "Founder & CEO" }
            ].map((review, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-slate-800 p-8 relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-900/30"></div>
                 <p className="text-slate-300 leading-relaxed mb-6 italic">"{review.text}"</p>
                 <div>
                    <div className="font-bold text-white">{review.author}</div>
                    <div className="text-xs font-mono text-blue-500 uppercase mt-1">{review.role}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECS TABLE */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-slate-900">
         <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-bold text-white">System Specifications</h3>
               <span className="text-xs font-mono text-slate-500">REF: YBP-2026</span>
            </div>
            <div className="border border-slate-800">
               {specs.map((spec, i) => (
                 <div key={i} className={`flex justify-between p-4 ${i !== specs.length - 1 ? 'border-b border-slate-800' : ''} hover:bg-slate-900/30 transition-colors`}>
                    <span className="font-mono text-sm text-slate-400">{spec.label}</span>
                    <span className="font-mono text-sm text-blue-400 font-bold">{spec.value}</span>
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

              <button 
                onClick={handlePurchase}
                className="w-full bg-slate-100 text-[#0f172a] py-4 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                Purchase Blueprint
              </button>
              <p className="mt-4 text-xs text-slate-600">Compatible with reMarkable 1, 2 & Paper Pro. Also works on Supernote & Boox.</p>
           </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-slate-900">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-800 bg-[#0d1219]">
                     <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-900/50 transition-colors"
                     >
                        <span className="font-bold text-slate-200">{faq.q}</span>
                        {openFaq === i ? <Minus className="w-5 h-5 text-blue-500"/> : <Plus className="w-5 h-5 text-slate-500"/>}
                     </button>
                     {openFaq === i && (
                        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-900 pt-4">
                           {faq.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );

  // 2. BLOG INDEX VIEW
  const renderBlog = () => (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0a0a0a]">
       <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
             <div className="inline-block px-3 py-1 border border-blue-900/50 text-blue-400 text-xs uppercase tracking-[0.2em] mb-6 bg-blue-950/20 backdrop-blur-sm">
                Architect's Log
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Thoughts on <span className="text-blue-500">Execution</span></h1>
             <p className="text-lg text-slate-400 max-w-xl mx-auto">Strategies, systems, and philosophies for the high-performance mind.</p>
          </div>

          <div className="grid gap-8">
             {BLOG_POSTS.map(post => (
                <article key={post.id} className="group bg-[#0d1219] border border-slate-800 hover:border-blue-500/50 transition-all p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden cursor-pointer" onClick={() => goToPost(post)}>
                   <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                   
                   <div className="flex-1">
                      <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
                         <span>{post.date}</span>
                         <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                         <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                      <p className="text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
                      <span className="text-blue-500 font-bold uppercase text-xs tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                         Read Article <ArrowRight className="w-4 h-4"/>
                      </span>
                   </div>
                </article>
             ))}
          </div>
       </div>
    </div>
  );

  // 3. SINGLE POST VIEW
  const renderPost = () => (
     <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0a0a0a]">
        <article className="max-w-3xl mx-auto">
           <button onClick={goToBlog} className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 mb-8 hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Log
           </button>

           <header className="mb-12 border-b border-slate-800 pb-12">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-blue-500 mb-6">
                  <span>{activePost.date}</span>
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  <span>{activePost.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">{activePost.title}</h1>
              <p className="text-xl text-slate-400 leading-relaxed">{activePost.excerpt}</p>
           </header>

           <div className="prose prose-invert prose-lg prose-headings:font-bold prose-headings:text-white prose-p:text-slate-400 prose-p:leading-8 prose-strong:text-slate-200">
              {activePost.content}
           </div>

           <div className="mt-16 pt-16 border-t border-slate-800">
              <div className="bg-[#111827] border border-slate-800 p-8 text-center">
                 <h3 className="text-xl font-bold text-white mb-4">Ready to build your system?</h3>
                 <p className="text-slate-400 mb-6">This concept is built directly into the Blueprint architecture.</p>
                 <button 
                    onClick={handlePurchase}
                    className="bg-slate-100 text-[#0f172a] px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center gap-2"
                 >
                    Get the Blueprint
                 </button>
              </div>
           </div>
        </article>
     </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-900/50 selection:text-blue-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-slate-800 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={goToHome}>
            <div className="h-12 w-12 bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
               <Layout className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100 uppercase font-mono">Your Blueprint</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            {/* CONDITIONAL MENU ITEM: Only show News/Blog if NOT on Home (or if preferred to always allow access) */}
            {currentView !== 'home' && (
              <button onClick={goToBlog} className="hover:text-white transition-colors">
                News
              </button>
            )}

            <a href="#pricing" onClick={scrollToPricing} className="bg-slate-100 text-[#0f172a] px-6 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] cursor-pointer">
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
            {currentView !== 'home' && (
               <button onClick={goToBlog} className="text-left font-bold text-slate-300 py-2 border-b border-slate-800">News</button>
            )}
            <a href="#pricing" onClick={(e) => { setIsMenuOpen(false); scrollToPricing(e); }} className="bg-slate-100 text-[#0f172a] px-6 py-3 w-full font-bold text-center block shadow-lg cursor-pointer">
              Get Access
            </a>
          </div>
        )}
      </nav>

      {/* RENDER CONTENT BASED ON VIEW STATE */}
      {currentView === 'home' && renderHome()}
      {currentView === 'blog' && renderBlog()}
      {currentView === 'post' && activePost && renderPost()}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 text-slate-600 text-sm bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
            <div className="h-6 w-6 bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.5)]">
              <Layout className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold uppercase tracking-widest font-mono text-slate-400">Your Blueprint</span>
          </div>
          <div className="flex gap-6">
             <button onClick={goToBlog} className="hover:text-blue-400 transition-colors">Articles</button>
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
