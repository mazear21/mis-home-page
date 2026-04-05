import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import epuLogo from '../../assets/images/epu-logo.png';

export default function About() {
  useEffect(() => {
    // Reveal animations for scroll of fanned-out cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fanned-out');
          }
        });
      },
      { threshold: 0.4 }
    );

    const fannedCards = document.querySelectorAll('.container');
    fannedCards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#f8f9fc] pb-16 font-sans text-gray-800 overflow-x-hidden"
    >
      
      {/* 1. Hero Section */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={fadeUp}
        className="pt-8 px-4 md:px-8 max-w-[1320px] mx-auto mb-16 relative"
      >
        <div className="bg-[#1a0f4a] rounded-[2.5rem] p-10 md:p-16 lg:p-24 text-white overflow-hidden shadow-2xl relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          <div className="lg:w-1/2 relative z-20">
            <span className="text-[#ffb700] text-xs font-black tracking-[0.2em] uppercase mb-4 block">Know us better</span>
            <h1 className="text-5xl md:text-7xl font-light font-serif mb-8 text-white">About Us</h1>
            <p className="text-blue-100/80 leading-relaxed text-base/7 md:text-lg/8 font-light max-w-xl">
              Erbil Polytechnic University was founded in 1993 by the Kurdistan National Council and was opened in 1996 under the name of 'Foundation of Technical Institutes'. When the Technical colleges were opened, its name was changed to 'Foundation of Technical Studies'. It later became the Erbil Polytechnic University in 2012, embracing 4 colleges and 7 technical institutes.
            </p>
          </div>
          
          <div className="lg:w-1/2 relative z-20 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={epuLogo} 
              alt="EPU Crest" 
              className="w-[280px] md:w-[350px] lg:w-[400px] drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>

          {/* Background Decorative Rings */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-white/5 pointer-events-none"></div>
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full border-[1px] border-white/5 pointer-events-none"></div>
        </div>
      </motion.section>

      {/* 2. Technical Education Steps Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-[1320px] mx-auto px-4 md:px-8 mb-20 text-center"
      >
        <div className="text-[10px] md:text-xs tracking-[0.25em] font-bold text-[#1a0f4a]/50 uppercase mb-4">Erbil Polytechnic University</div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a0f4a] font-serif mb-16 max-w-4xl mx-auto leading-tight">
          Technical education built around society's needs
        </h2>

        {/* Timeline/Steps Graphic */}
        <div className="relative max-w-4xl mx-auto flex justify-between items-start mb-20 hidden md:flex">
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-[#1a0f4a]/10 z-0"></div>
          
          <div className="flex flex-col items-center w-1/3 relative z-10 px-4">
            <div className="w-12 h-12 rounded-full bg-[#1a0f4a] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xl shadow-[#1a0f4a]/20">01</div>
            <h3 className="text-xl font-bold text-[#1a0f4a] mb-2">Develop</h3>
            <p className="text-gray-500 text-sm">Human capacities in technical fields</p>
          </div>
          
          <div className="flex flex-col items-center w-1/3 relative z-10 px-4">
            <div className="w-12 h-12 rounded-full bg-[#1a0f4a] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xl shadow-[#1a0f4a]/20">02</div>
            <h3 className="text-xl font-bold text-[#1a0f4a] mb-2">Advise</h3>
            <p className="text-gray-500 text-sm">Advisory services for institutional needs</p>
          </div>
          
          <div className="flex flex-col items-center w-1/3 relative z-10 px-4">
            <div className="w-12 h-12 rounded-full bg-[#1a0f4a] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xl shadow-[#1a0f4a]/20">03</div>
            <h3 className="text-xl font-bold text-[#1a0f4a] mb-2">Innovate</h3>
            <p className="text-gray-500 text-sm">Research and new ideas on an advanced level</p>
          </div>
        </div>

        {/* 3. Who We Are / What We Do */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-xl font-black text-[#1a0f4a] mb-6 tracking-tight">Who We Are</h3>
            <p className="text-gray-500 text-sm/7 leading-loose">
              Erbil Polytechnic university is a scientific governmental academy which aims at educating technical qualified people in the various specialties to meet the needs of the society, as a non-profitable centre of education.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-xl font-black text-[#1a0f4a] mb-6 tracking-tight">What We Do</h3>
            <ul className="text-gray-500 text-sm/7 leading-loose space-y-3 list-disc pl-5 marker:text-[#1a0f4a]">
              <li>It develops human capacities and resources in technical fields for the graduates of the preparatory schools, and educating technical qualified people in relation to the marketing needs.</li>
              <li>It provides advisory services in all advisory councils.</li>
              <li>It supports scientific research and innovations to reach profession and new ideas on an advanced level.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 4. Numbers Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-[1320px] mx-auto px-4 md:px-8 mb-12 text-center"
      >
        <div className="text-[10px] md:text-xs tracking-[0.25em] font-bold text-[#1a0f4a]/50 uppercase mb-4">Erbil Polytechnic University In Numbers</div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a0f4a] font-serif mb-12 max-w-4xl mx-auto leading-tight">
          Scale, capacity, and academic reach
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {[
            { num: "5", label: "Technical Colleges" },
            { num: "7", label: "Technical Institutes" },
            { num: "37", label: "Different Majors" },
            { num: "1865", label: "Administrative Staff Members" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1a0f4a] rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-[#1a0f4a]/10"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-2 font-light">{stat.num}</span>
                <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. OVERLAPPING CARDS ANIMATION */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="mb-12 overflow-hidden pt-4 pb-12 relative"
      >
        <div className="container relative flex justify-center items-center h-[400px] mx-auto scale-90 md:scale-100">
          
          <div 
            className="glass absolute flex flex-col items-center justify-between p-8 bg-white backdrop-blur-md rounded-[1.5rem] shadow-xl border border-gray-100 w-[300px] h-[360px] transition-all duration-[1200ms] text-center" 
            style={{ "--r": "-15", backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', backgroundPosition: 'center' } as React.CSSProperties}
          >
            <div className="pt-4">
              <h3 className="text-[#1a0f4a] font-black tracking-tight text-xl mb-4">Academic Strength</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">EPU has 387 MA and Ph.D degree holders and 180 employees studying postgraduate studies.</p>
            </div>
            <div className="mt-auto w-full pt-4 text-[#1a0f4a]/30 text-[10px] font-bold uppercase tracking-[0.1em] border-t border-gray-100">Academic Strength</div>
          </div>

          <div 
            className="glass absolute flex flex-col items-center justify-between p-8 bg-white backdrop-blur-md rounded-[1.5rem] shadow-2xl border border-gray-100 w-[300px] h-[360px] z-10 transition-all duration-[1200ms] text-center" 
            style={{ "--r": "0", backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', backgroundPosition: 'center' } as React.CSSProperties}
          >
            <div className="pt-4">
              <h3 className="text-[#1a0f4a] font-black tracking-tight text-xl mb-4">Program Offering</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">The university provides master's degree and diploma pathways across a growing technical structure.</p>
            </div>
            <div className="mt-auto w-full pt-4 text-[#1a0f4a]/30 text-[10px] font-bold uppercase tracking-[0.1em] border-t border-gray-100">Program Offering</div>
          </div>

          <div 
            className="glass absolute flex flex-col items-center justify-between p-8 bg-white backdrop-blur-md rounded-[1.5rem] shadow-xl border border-gray-100 w-[300px] h-[360px] transition-all duration-[1200ms] text-center" 
            style={{ "--r": "15", backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '16px 16px', backgroundPosition: 'center' } as React.CSSProperties}
          >
            <div className="pt-4">
              <h3 className="text-[#1a0f4a] font-black tracking-tight text-xl mb-4">Institutional Reach</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">The source university copy references 32866 university records within its academic administrative scale.</p>
            </div>
            <div className="mt-auto w-full pt-4 text-[#1a0f4a]/30 text-[10px] font-bold uppercase tracking-[0.1em] border-t border-gray-100">Institutional Reach</div>
          </div>
          
        </div>
      </motion.section>

      {/* 6. Our University History */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-[1320px] mx-auto px-4 md:px-8 mb-16 text-center"
      >
        <div className="text-[10px] md:text-xs tracking-[0.25em] font-bold text-[#1a0f4a]/50 uppercase mb-4">Brighten Your Future With EPU</div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a0f4a] font-serif mb-12 max-w-4xl mx-auto leading-tight">
          Our University History
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            { year: "1993", title: "Founded", desc: "Was founded by the Kurdistan National Council." },
            { year: "1996", title: "Opened", desc: "Opened under the name of 'Foundation of Technical Institutes'." },
            { year: "2012", title: "EPU Identity", desc: "Changed to Erbil Polytechnic University after the technical colleges were opened." }
          ].map((hist, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-left hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-3 rounded-full bg-[#1a0f4a]"></div>
                <h3 className="text-xl font-bold text-[#1a0f4a]">{hist.year}</h3>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{hist.title}</h4>
              <p className="text-gray-500 text-sm/6 leading-relaxed">{hist.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* History Image Row */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row text-left">
          <div className="p-8 md:p-12 md:w-1/2 flex items-center">
            <p className="text-gray-500 text-[15px] leading-loose">
              When the Technical colleges were opened, its name was changed to 'Foundation of Technical Studies'. It later became the Erbil Polytechnic University in 2012.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="EPU Lecture Hall" className="w-full h-full object-cover min-h-[300px]" />
          </div>
        </div>
      </motion.section>

      {/* 7. Our Certifications */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeUp}
        className="max-w-[1320px] mx-auto px-4 md:px-8 text-center pb-12"
      >
        <div className="text-[10px] md:text-xs tracking-[0.25em] font-bold text-[#1a0f4a]/50 uppercase mb-4">How It Works</div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a0f4a] font-serif mb-12 max-w-4xl mx-auto leading-tight">
          Our Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Diploma", desc: "Technical foundation routes" },
            { title: "Bachelor", desc: "Full undergraduate study" },
            { title: "Master", desc: "Advanced specialization" },
            { title: "Postgraduate", desc: "Higher academic progression" }
          ].map((cert, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-white to-[#f8f9fc] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow text-left h-[180px] flex flex-col justify-end relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-0 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#1a0f4a] mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </motion.div>
  );
}
