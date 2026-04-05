import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '../../assets/images/epu-logo.png';

function StaggerGroup({ children, className, amount = 0.15, delayChildren = 0.04, staggerChildren = 0.08 }: any) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount, margin: "50px" }} variants={{ hidden: {}, show: { transition: { delayChildren, staggerChildren } } }}>
      {children}
    </motion.div>
  );
}

function Reveal({ children, className, delay = 0, amount = 0.15 }: any) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, amount, margin: "50px" }}>
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--brand-700)] text-white">
        <StaggerGroup className="mx-auto grid max-w-[1180px] gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img alt="Erbil Polytechnic University logo" className="size-14 object-contain " src={logoImage} />
              <div>
                <div className="text-lg font-bold text-white">Erbil Polytechnic University</div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/70">Public University Portal</div>
              </div>
            </div>
            <p className="mt-5 max-w-[34rem] text-sm leading-7 text-white/80"> 
              Erbil Polytechnic University is a scientific governmental academy that aims for educating technical qualified people in various specialties to meet the needs of society.
            </p>
          </div>

          <div>
            <div className="footer-heading text-white">Quick Links</div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">   
              <a href="/about" className="hover:text-white">Admissions</a>
              <a href="/about" className="hover:text-white">News and Updates</a>
              <a href="/about" className="hover:text-white">Tutorials</a>
              <a href="/about" className="hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <div className="footer-heading text-white">Contact</div>
            <div className="mt-4 flex flex-col gap-4 text-sm text-white/80">   
              <a className="inline-flex items-center gap-3 hover:text-white" href="tel:+9647508439887">
                <Phone className="size-4 text-[var(--brand-400)]" />
                +964-750-8439-887
              </a>
              <a className="inline-flex items-center gap-3 hover:text-white" href="mailto:info@epu.edu.iq">
                <Mail className="size-4 text-[var(--brand-400)]" />
                info@epu.edu.iq
              </a>
              <a className="inline-flex items-start gap-3 hover:text-white" href="/about">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--brand-400)]" />
                Karkuk St, Erbil 44001
              </a>
            </div>
          </div>
        </StaggerGroup>

        <Reveal className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          © 2026 Erbil Polytechnic University. All rights reserved.
        </Reveal>
      </footer>
  );
}
