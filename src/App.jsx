import { useState, useRef, useEffect } from "react";
import "@/App.css";
import { motion, useInView } from "framer-motion";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { BookOpen, Upload, FileText, Video, Mic, Check, ArrowDown, X } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mdadzaqg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Hero Section
const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              variants={fadeInUp}
              className="font-accent text-2xl md:text-3xl text-[#E07A5F]"
            >
              Aspects of life
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-[#1A1A1A]"
            >
              Your life is a chapter in the longest story ever told.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-body text-lg md:text-xl leading-relaxed text-[#555555] max-w-xl"
            >
              Eight billion lives. One book. We're building the world's longest anthology — 
              a permanent archive of ordinary people's extraordinary stories.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                data-testid="hero-submit-btn"
                onClick={() => document.getElementById('submit-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#E07A5F] hover:bg-[#d16a4f] text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Share Your Story
              </Button>
              <Button 
                data-testid="hero-learn-btn"
                variant="outline"
                onClick={() => document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right: Image Collage */}
          <motion.div 
            className="lg:col-span-6 image-collage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Image 1 - Top Left */}
              <motion.div 
                className="absolute top-0 left-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1570922743785-aa48950572a3?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                  alt="Portrait of a person sharing their story"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 2 - Top Right */}
              <motion.div 
                className="absolute top-[10%] right-0 w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1697551458746-b86ccf5049d4?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                  alt="Portrait of a person with freckles"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Image 3 - Bottom */}
              <motion.div 
                className="absolute bottom-0 left-[15%] w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1699718085453-d6e5f9e73d1f?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                  alt="Candid portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#555555]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm font-body">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="mission-section"
      data-testid="mission-section" 
      ref={ref}
      className="py-24 md:py-32 bg-white/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606242403192-c40d308b704d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Contemplative moment - a white ceramic mug on wooden table"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E07A5F] text-white p-6 rounded-xl shadow-lg">
                <p className="font-accent text-2xl">Every story matters</p>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-widest uppercase text-[#E07A5F]">Our Mission</p>
            
            <h2 className="font-heading text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A]">
              Aspects of life
            </h2>
            
            <div className="space-y-6 font-body text-lg leading-relaxed text-[#555555]">
              <p>
                We believe that every life contains a story worth preserving. Not just the famous, 
                the powerful, or the privileged — but the teacher who changed a student's life, 
                the immigrant who built a new home, the parent who sacrificed everything.
              </p>
              <p>
                <strong className="text-[#1A1A1A]">Aspects of life</strong> is more than a book — 
                it's a living archive of human experience. A permanent record that your 
                great-great-grandchildren can hold and read. Your chapter. Your legacy.
              </p>
              <p>
                We're building the world's longest anthology, one ordinary life at a time. 
                And we want your story to be part of it.
              </p>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="font-heading text-4xl text-[#E07A5F]">8B+</p>
                <p className="font-body text-sm text-[#555555]">Stories to tell</p>
              </div>
              <div className="w-px h-12 bg-[#1A1A1A]/10"></div>
              <div className="text-center">
                <p className="font-heading text-4xl text-[#E07A5F]">1</p>
                <p className="font-body text-sm text-[#555555]">Eternal book</p>
              </div>
              <div className="w-px h-12 bg-[#1A1A1A]/10"></div>
              <div className="text-center">
                <p className="font-heading text-4xl text-[#E07A5F]">&infin;</p>
                <p className="font-body text-sm text-[#555555]">Generations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Submission Form Section
const SubmissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Load Tally script
  useEffect(() => {
    const loadTallyScript = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.onload = loadTallyScript;
      script.onerror = loadTallyScript;
      document.body.appendChild(script);
    } else {
      loadTallyScript();
    }
  }, []);
  
  return (
    <section 
      id="submit-section"
      data-testid="submit-section" 
      ref={ref}
      className="py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-widest uppercase text-[#E07A5F] mb-4">Share Your Story</p>
          <h2 className="font-heading text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A] mb-6">
            Before you become a memory,<br />become a chapter.
          </h2>
          <p className="font-body text-lg text-[#555555] max-w-2xl mx-auto">
            Submit your story in any format — write it, record it, or upload it. 
            Every submission is a piece of living history.
          </p>
        </motion.div>
        
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            data-tally-src="https://tally.so/embed/68NANP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="1202" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="Your Stories"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="py-12 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="font-accent text-2xl text-[#E07A5F] mb-2">Aspects of life</p>
        <p className="font-body text-sm text-[#555555]">
          An Aspects of life Project — Est. 2026
        </p>
        <p className="font-body text-xs text-[#555555]/60 mt-4">
          Every story matters. Every life is a chapter.
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <HeroSection />
      <MissionSection />
      <SubmissionSection />
      <Footer />
    </div>
  );
}

export default App;
