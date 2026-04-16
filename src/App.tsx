import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight, Github, Instagram, Linkedin, Mail, Play, Image as ImageIcon, Sparkles, ExternalLink, Phone, Twitter, Youtube, Palette, Zap, Film, Target, Clock, Briefcase, Globe, TrendingUp, CheckCircle2, Wrench } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ThumbnailsPage from './pages/Thumbnails';
import PostersPage from './pages/Posters';
import AdCreativesPage from './pages/AdCreatives';
import SocialMediaPage from './pages/SocialMedia';

// --- Types ---
type WorkCategory = 'Graphic' | 'Video';

interface WorkItem {
  id: number;
  title: string;
  category: WorkCategory;
  thumbnail: string;
  description: string;
  externalUrl?: string;
}

// --- Constants ---
const WORK_ITEMS: WorkItem[] = [
  // Graphic
  { id: 1, title: 'Social Media Design', category: 'Graphic', thumbnail: 'https://lh3.googleusercontent.com/d/1dCSRYgiaieWkudVzbkHqLnXR1BVCrJdt', description: 'Dynamic social media assets for modern brands.' },
  { id: 3, title: 'Thumbnails', category: 'Graphic', thumbnail: 'https://lh3.googleusercontent.com/d/1j-PKamp44uGfIwFUlGMdnTgWBBi-pVJ0', description: 'High-CTR thumbnails for creators.' },
  { id: 4, title: 'Posters', category: 'Graphic', thumbnail: 'https://lh3.googleusercontent.com/d/1dwJaaAQacym9Xkph2y83rZhj8cekzWGw', description: 'Minimalist and bold poster designs.' },
  { id: 5, title: 'Ad Creatives', category: 'Graphic', thumbnail: 'https://lh3.googleusercontent.com/d/1FipRaKzz3O1iQytt44kMA39WxCNxNcPg', description: 'Performance-driven advertising visuals.' },
  
  // Video
  { id: 7, title: 'SaaS Intro Video Edit for Legitt AI', category: 'Video', thumbnail: 'https://img.youtube.com/vi/0hhsYt733pg/hqdefault.jpg', description: 'Professional motion graphics and storytelling for SaaS.', externalUrl: 'https://youtu.be/0hhsYt733pg' },
  { id: 8, title: 'Motion Graphics Elements Showcase', category: 'Video', thumbnail: 'https://img.youtube.com/vi/EsANa_cgzp4/hqdefault.jpg', description: 'Dynamic visual elements and animation showcase.', externalUrl: 'https://youtu.be/EsANa_cgzp4' },
  { id: 9, title: 'News Animation Package', category: 'Video', thumbnail: 'https://img.youtube.com/vi/uagz_RSxgMI/hqdefault.jpg', description: 'Broadcast-quality news motion design package.', externalUrl: 'https://youtu.be/uagz_RSxgMI' },
  { id: 10, title: '3D Animation Showcase', category: 'Video', thumbnail: 'https://img.youtube.com/vi/gcvbEl7BZAc/hqdefault.jpg', description: 'Creative 3D motion design and animation.', externalUrl: 'https://youtu.be/gcvbEl7BZAc' },
  { id: 11, title: 'Podcast Intro Video Edit', category: 'Video', thumbnail: 'https://img.youtube.com/vi/oIgSewPzRyI/hqdefault.jpg', description: 'Engaging podcast intro with dynamic sound sync.', externalUrl: 'https://youtu.be/oIgSewPzRyI' },
  { id: 12, title: 'Faceless YouTube Short Edit', category: 'Video', thumbnail: 'https://img.youtube.com/vi/i43h7B7_D_M/hqdefault.jpg', description: 'High-retention storytelling for faceless channels.', externalUrl: 'https://youtube.com/shorts/i43h7B7_D_M?feature=share' },
  { id: 13, title: 'Subway ki Asli Kahani', category: 'Video', thumbnail: 'https://img.youtube.com/vi/uGy8kW6QE7E/hqdefault.jpg', description: 'Documentary-style investigative video edit.', externalUrl: 'https://youtube.com/shorts/uGy8kW6QE7E?si=d8_1dRhhnCcOtlEN' },
  { id: 14, title: 'Talking Head Social Media Edit', category: 'Video', thumbnail: 'https://img.youtube.com/vi/OahMsXXxtJo/hqdefault.jpg', description: 'Professional social media edit for talking head videos.', externalUrl: 'https://youtube.com/shorts/OahMsXXxtJo?feature=share' },
  { id: 15, title: 'Medical Mafia Exposed', category: 'Video', thumbnail: 'https://img.youtube.com/vi/bj_9eliOj8M/hqdefault.jpg', description: 'Deep-dive investigative storytelling edit.', externalUrl: 'https://youtu.be/bj_9eliOj8M?si=zETNxFrNoDYv-rAE' },
  { id: 16, title: 'Wedding Invitation Animation', category: 'Video', thumbnail: 'https://img.youtube.com/vi/u3BFu7yzAGQ/hqdefault.jpg', description: 'Elegant motion graphics for wedding invitations.', externalUrl: 'https://youtube.com/shorts/u3BFu7yzAGQ?feature=share' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-display font-bold tracking-tighter"
          onClick={() => window.scrollTo(0, 0)}
        >
          JAI<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5 py-2 bg-white text-background rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-colors"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-lg font-medium text-secondary hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-8"
          >
            Available for Projects
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
            Jai Rahwal<br />
            <span className="text-secondary">
              <motion.span
                animate={{ 
                  scale: [1, 1.05, 1],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                className="text-accent inline-block cursor-default"
              >
                Motion
              </motion.span> Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mb-12 leading-relaxed font-medium">
            Designing motion graphics, video edits, and AI-powered visuals that help brands communicate clearly and stand out in the digital noise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#work" 
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors group border border-accent/20"
            >
              View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full sm:w-auto px-10 py-5 glass text-white rounded-full font-bold hover:bg-white/10 transition-colors border border-white/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState<WorkCategory>('Graphic');
  const navigate = useNavigate();

  const filteredItems = WORK_ITEMS.filter(item => item.category === activeTab);

  const tabs: { name: WorkCategory; icon: any }[] = [
    { name: 'Graphic', icon: ImageIcon },
    { name: 'Video', icon: Play },
  ];

  const handleCardClick = (item: WorkItem) => {
    if (item.title === 'Social Media Design') {
      navigate('/social-media');
      window.scrollTo(0, 0);
    } else if (item.title === 'Thumbnails') {
      navigate('/thumbnails');
      window.scrollTo(0, 0);
    } else if (item.title === 'Posters') {
      navigate('/posters');
      window.scrollTo(0, 0);
    } else if (item.title === 'Ad Creatives') {
      navigate('/ad-creatives');
      window.scrollTo(0, 0);
    } else if (item.externalUrl) {
      window.open(item.externalUrl, '_blank');
    }
  };

  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-10"
          >
            Explore My Work
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="inline-flex glass p-2 rounded-full relative"
          >
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`relative flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 z-10 ${
                  activeTab === tab.name ? 'text-white' : 'text-secondary hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.name}
                {activeTab === tab.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-lg shadow-accent/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleCardClick(item)}
                className={`group glass rounded-3xl overflow-hidden border-white/5 hover:border-accent/30 transition-all ${item.title === 'Thumbnails' || item.externalUrl ? 'cursor-pointer' : ''}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                      {item.category === 'Video' ? <Play size={20} /> : <ExternalLink size={20} />}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed line-clamp-2">{item.description}</p>
                  {(item.title === 'Thumbnails' || item.externalUrl) && (
                    <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                      {item.title === 'Thumbnails' ? 'View Gallery' : 'Watch Video'} <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'YouTube Editing',
      description: 'Retention-focused edits that keep viewers hooked till the end.',
      icon: Youtube,
      color: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-red-500'
    },
    {
      title: 'Graphic Designing',
      description: 'Creative visuals that enhance brand identity and engagement.',
      icon: Palette,
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Motion Graphics',
      description: 'Dynamic animations that make content more engaging.',
      icon: Zap,
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Documentary Editing',
      description: 'Story-driven edits that create emotion and impact.',
      icon: Film,
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500'
    },
    {
      title: 'Logo Animation',
      description: 'Clean and modern animations for strong brand presence.',
      icon: Target,
      color: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Thumbnail Editing',
      description: 'Eye-catching thumbnails designed to increase clicks.',
      icon: ImageIcon,
      color: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-500'
    },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6"
          >
            What I Can Do <span className="text-accent">for You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary max-w-2xl mx-auto text-lg"
          >
            If you're looking for someone who blends creativity with technical skill, communicates clearly, and truly cares about results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.03, 
                borderColor: 'rgba(99, 102, 241, 0.3)',
                boxShadow: '0 10px 30px -15px rgba(99, 102, 241, 0.2)'
              }}
              className="glass p-10 rounded-[2.5rem] group transition-all duration-500 border-white/5 flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} p-5 mb-8 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} className={service.iconColor} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-secondary leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { icon: Clock, label: '2+ Years Experience' },
    { icon: Briefcase, label: 'SaaS Industry Experience' },
    { icon: Globe, label: 'Remote Ready' },
    { icon: TrendingUp, label: 'High-Retention Focus' },
  ];

  const specializations = [
    'Video Editing',
    'Motion Design',
    'Graphic Designing',
    'AI Tools',
    'Visual Content Strategy',
  ];

  const tools = [
    'After Effects',
    'Premiere Pro',
    'Photoshop',
    'Adobe Illustrator',
    'AI Tools',
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Right: Text + Stats (Now Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">The Mind Behind the Edits</h2>
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-8">Visual Storyteller • Motion Designer • Problem Solver</p>
              
              <p className="text-2xl text-white mb-6 leading-tight font-medium">
                I’m Jai — I turn raw footage into content people actually watch.
              </p>
              <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Focused on high-retention edits, clean visuals, and storytelling that keeps attention till the last second.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="glass p-5 rounded-2xl border-white/5 hover:border-accent/30 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-sm font-bold text-secondary group-hover:text-white transition-colors leading-tight text-left">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Specialization & Tools */}
            <div className="grid md:grid-cols-2 gap-10 mb-12 text-left">
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                  <CheckCircle2 size={14} /> Specialization
                </h4>
                <ul className="space-y-3">
                  {specializations.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                  <Wrench size={14} /> Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-secondary hover:text-white hover:border-accent/50 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 border-t border-white/5"
            >
              <p className="text-xl italic font-display text-white/80 leading-relaxed">
                "Good editing is invisible. <span className="text-accent">Great editing is unforgettable.</span>"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12"
        >
          Let's create something <span className="text-accent">impactful</span> together.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <motion.a 
              href="mailto:jairahawal56@gmail.com" 
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group relative px-8 py-6 bg-white text-background rounded-full text-xl font-bold overflow-hidden flex-1 max-w-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail size={20} /> jairahawal56@gmail.com
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            <motion.a 
              href="tel:+919671153282" 
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group relative px-8 py-6 glass text-white rounded-full text-xl font-bold overflow-hidden flex-1 max-w-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-background transition-colors">
                <Phone size={20} /> +91 96711 53282
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: Twitter, href: 'https://x.com/JaiRahwal' },
              { icon: Instagram, href: 'https://www.instagram.com/jai_rahwal?igsh=bzN4ZjdvZmtoYWpv' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jai-rahwal-468279362/' },
              { icon: Mail, href: 'mailto:jairahawal56@gmail.com' },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass flex items-center justify-center text-secondary hover:text-white hover:border-accent transition-all"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Jai Rahwal. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors">Terms of Service</a>
        </div>
        <p className="text-secondary text-sm flex items-center gap-2">
          Built with <span className="text-accent">♥</span> and AI
        </p>
      </div>
    </footer>
  );
};

const MainContent = () => {
  return (
    <>
      <Hero />
      <WorkTabs />
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/thumbnails" element={<ThumbnailsPage />} />
            <Route path="/posters" element={<PostersPage />} />
            <Route path="/ad-creatives" element={<AdCreativesPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
