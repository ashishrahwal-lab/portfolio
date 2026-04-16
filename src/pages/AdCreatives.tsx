import { motion } from 'motion/react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AD_CREATIVES = [
  { id: 1, url: 'https://lh3.googleusercontent.com/d/1FipRaKzz3O1iQytt44kMA39WxCNxNcPg', driveUrl: 'https://drive.google.com/file/d/1FipRaKzz3O1iQytt44kMA39WxCNxNcPg/view?usp=sharing', title: 'Ad Creative 1' },
  { id: 2, url: 'https://lh3.googleusercontent.com/d/1UXRdQbzEu02o7UJDJZZjAy4-IY5sOg8_', driveUrl: 'https://drive.google.com/file/d/1UXRdQbzEu02o7UJDJZZjAy4-IY5sOg8_/view?usp=sharing', title: 'Ad Creative 2' },
  { id: 3, url: 'https://lh3.googleusercontent.com/d/1mArHGlNWclDb9fM0RbrceW45xWaUMmGt', driveUrl: 'https://drive.google.com/file/d/1mArHGlNWclDb9fM0RbrceW45xWaUMmGt/view?usp=sharing', title: 'Ad Creative 3' },
  { id: 4, url: 'https://lh3.googleusercontent.com/d/1fZMe-xeSRZc-86CWamfjuigd7-WyrwI2', driveUrl: 'https://drive.google.com/file/d/1fZMe-xeSRZc-86CWamfjuigd7-WyrwI2/view?usp=sharing', title: 'Ad Creative 4' },
  { id: 5, url: 'https://lh3.googleusercontent.com/d/1drJhAAJiBN6ZXeayLh3WB9mOm76yGbOy', driveUrl: 'https://drive.google.com/file/d/1drJhAAJiBN6ZXeayLh3WB9mOm76yGbOy/view?usp=sharing', title: 'Ad Creative 5' },
  { id: 6, url: 'https://lh3.googleusercontent.com/d/1iYiGe3WYoBCxxARNeD1LDNEIbCF91fXx', driveUrl: 'https://drive.google.com/file/d/1iYiGe3WYoBCxxARNeD1LDNEIbCF91fXx/view?usp=sharing', title: 'Ad Creative 6' },
];

export default function AdCreativesPage() {
  const handleOpenDrive = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-4 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
              Ad <span className="text-accent">Creatives</span>
            </h1>
            <p className="text-secondary mt-4 max-w-xl text-lg">
              Performance-driven advertising visuals designed to capture attention and drive conversions across digital platforms.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AD_CREATIVES.map((ad, i) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleOpenDrive(ad.driveUrl)}
              className="group relative aspect-square rounded-3xl overflow-hidden glass border-white/5 hover:border-accent/30 transition-all cursor-pointer"
            >
              <img 
                src={ad.url} 
                alt={ad.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <h3 className="text-xl font-bold mb-4">{ad.title}</h3>
                <div className="flex gap-4">
                  <a 
                    href={ad.driveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full bg-white/10 hover:bg-accent text-white transition-colors"
                  >
                    <Download size={20} />
                  </a>
                  <a 
                    href={ad.driveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full bg-white/10 hover:bg-accent text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] glass border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-3xl -z-10" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Boost Your Ad Performance</h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Need high-converting visuals for your next campaign? Let's build something that gets results.
          </p>
          <Link 
            to="/#contact" 
            className="inline-flex px-10 py-5 bg-white text-background rounded-full font-bold hover:bg-accent hover:text-white transition-all hover:scale-105"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
