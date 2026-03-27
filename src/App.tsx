import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Instagram, Linkedin, Mail, Play, Image as ImageIcon, Sparkles, ExternalLink, Phone, Twitter } from 'lucide-react';

// --- Types ---
type WorkCategory = 'Graphic' | 'Video' | 'AI';

interface WorkItem {
  id: number;
  title: string;
  category: WorkCategory;
  thumbnail: string;
  description: string;
}

// --- Constants ---
const WORK_ITEMS: WorkItem[] = [
  // Graphic
  { id: 1, title: 'Social Media Design', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/social/800/600', description: 'Dynamic social media assets for modern brands.' },
  { id: 2, title: 'Branding', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/brand/800/600', description: 'Visual identity and brand guidelines.' },
  { id: 3, title: 'Thumbnails', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/thumb/800/600', description: 'High-CTR thumbnails for creators.' },
  { id: 4, title: 'Posters', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/poster/800/600', description: 'Minimalist and bold poster designs.' },
  { id: 5, title: 'Ad Creatives', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/ad/800/600', description: 'Performance-driven advertising visuals.' },
  { id: 6, title: 'UI Post Designs', category: 'Graphic', thumbnail: 'https://picsum.photos/seed/ui/800/600', description: 'Clean UI showcases for social platforms.' },
  
  // Video
  { id: 7, title: 'Typography Animation', category: 'Video', thumbnail: 'https://picsum.photos/seed/typo/800/600', description: 'Kinetic typography for impactful messaging.' },
  { id: 8, title: 'Reels Editing', category: 'Video', thumbnail: 'https://picsum.photos/seed/reels/800/600', description: 'Fast-paced, engaging short-form content.' },
  { id: 9, title: 'Long Form Editing', category: 'Video', thumbnail: 'https://picsum.photos/seed/long/800/600', description: 'Story-driven YouTube and documentary edits.' },
  { id: 10, title: '3D Documentary Edit', category: 'Video', thumbnail: 'https://picsum.photos/seed/doc/800/600', description: 'Immersive 3D visual storytelling.' },
  { id: 11, title: 'Explainer Videos', category: 'Video', thumbnail: 'https://picsum.photos/seed/explain/800/600', description: 'Clear and concise motion graphics explainers.' },
  { id: 12, title: 'Wedding Invitation Videos', category: 'Video', thumbnail: 'https://picsum.photos/seed/wedding/800/600', description: 'Elegant and personalized motion invites.' },
  { id: 13, title: 'SaaS Videos', category: 'Video', thumbnail: 'https://picsum.photos/seed/saas/800/600', description: 'Product demos and SaaS marketing videos.' },

  // AI
  { id: 14, title: 'AI Generated Videos', category: 'AI', thumbnail: 'https://picsum.photos/seed/aivid/800/600', description: 'Cutting-edge AI video generation experiments.' },
  { id: 15, title: 'AI Generated Images', category: 'AI', thumbnail: 'https://picsum.photos/seed/aiimg/800/600', description: 'Conceptual AI-driven image creation.' },
  { id: 16, title: 'AI Visual Experiments', category: 'AI', thumbnail: 'https://picsum.photos/seed/aiexp/800/600', description: 'Exploring the boundaries of AI in motion design.' },
];

const FEATURED_WORK = WORK_ITEMS.slice(0, 6);

const EXPERIMENTS = [
  { id: 1, title: 'Abstract Motion', thumbnail: 'https://picsum.photos/seed/exp1/800/600' },
  { id: 2, title: 'AI Dreamscapes', thumbnail: 'https://picsum.photos/seed/exp2/800/600' },
  { id: 3, title: 'Liquid Typography', thumbnail: 'https://picsum.photos/seed/exp3/800/600' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          JAI<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-white text-background rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all"
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
                  onClick={() => setIsMenuOpen(false)}
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for Projects
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            Jai Rahwal<br />
            <span className="text-secondary">Motion Designer</span>
          </h1>
          <p className="text-xl text-secondary max-w-lg mb-10 leading-relaxed">
            Designing motion graphics, video edits, and AI-powered visuals that help brands communicate clearly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-accent text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform group">
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square rounded-3xl overflow-hidden glass group"
        >
          <img 
            src="https://picsum.photos/seed/jai/1000/1000" 
            alt="Jai Rahwal" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedWork = () => {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-end mb-16">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white transition-all cursor-pointer">
              <ArrowRight size={20} className="rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:border-white transition-all cursor-pointer">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_WORK.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer"
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-secondary mb-6">{item.description}</p>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  View Project <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState<WorkCategory>('Graphic');

  const filteredItems = WORK_ITEMS.filter(item => item.category === activeTab);

  const tabs: { name: WorkCategory; icon: any }[] = [
    { name: 'Graphic', icon: ImageIcon },
    { name: 'Video', icon: Play },
    { name: 'AI', icon: Sparkles },
  ];

  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">Explore My Work</h2>
          <div className="inline-flex glass p-1.5 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.name ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-secondary hover:text-white'
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-secondary uppercase tracking-widest">{item.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const specializations = ['Motion Graphics', 'Video Editing', 'Social Media Visuals', 'AI-Assisted Creative Workflows'];
  const tools = ['After Effects', 'Photoshop', 'AI Video Tools', 'AI Image Generation Tools'];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">About Me</h2>
            <p className="text-2xl text-white mb-8 leading-snug">
              Creative video editor and motion designer working with brands like <span className="text-accent">Legitt AI</span> to transform ideas into engaging visual stories.
            </p>
            <p className="text-secondary text-lg mb-12">
              I specialize in creating high-impact visuals that bridge the gap between technology and creativity. My approach combines traditional design principles with cutting-edge AI tools to deliver unique results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Specialization</h4>
                <ul className="space-y-4">
                  {specializations.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Tools I Use</h4>
                <ul className="space-y-4">
                  {tools.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass">
              <img 
                src="https://picsum.photos/seed/about/800/1000" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-display font-bold text-accent mb-1">5+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experiments = () => {
  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">Creative Experiments</h2>
          <p className="text-secondary">Pushing the boundaries of motion and AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIMENTS.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden glass"
            >
              <img 
                src={exp.thumbnail} 
                alt={exp.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-xl font-bold">{exp.title}</h3>
              </div>
            </motion.div>
          ))}
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
            <a 
              href="mailto:ashishrahwal@gmail.com" 
              className="group relative px-8 py-6 bg-white text-background rounded-full text-xl font-bold overflow-hidden transition-all hover:scale-105 flex-1 max-w-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail size={20} /> ashishrahwal@gmail.com
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a 
              href="tel:+919671153282" 
              className="group relative px-8 py-6 glass text-white rounded-full text-xl font-bold overflow-hidden transition-all hover:scale-105 flex-1 max-w-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-background transition-colors">
                <Phone size={20} /> +91 96711 53282
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: Twitter, href: 'https://x.com/JaiRahwal' },
              { icon: Instagram, href: 'https://www.instagram.com/jai_rahwal?igsh=bzN4ZjdvZmtoYWpv' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jai-rahwal-468279362/' },
              { icon: Mail, href: 'mailto:ashishrahwal@gmail.com' },
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

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <WorkTabs />
        <About />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
