import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    GraduationCap,
    PlayCircle,
    Tag,
    User2
} from "lucide-react";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

// import logoImage moved from "../assets/images/epu-logo.png";
import {
    directoryItems,
    featureCards,
    heroSlides,
    newsItems,
    partners,
    stats
} from "@/site-data";

function getPartnerLogo(domain: string) {
  const domainUrl = domain.startsWith("http") ? domain : `https://${domain}`;
  return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(domainUrl)}`;
}

function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount, margin: "50px" }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({
  children,
  className,
  amount = 0.15,
  delayChildren = 0.04,
  staggerChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
}) {

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "50px" }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}


export default function Home() {

  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const showHeroCopy = false;


  const currentSlide = heroSlides[activeSlide];

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.08 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const tickSlide = useEffectEvent(() => {
    startTransition(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    });
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      tickSlide();
    }, 4500); // Swaps every 4.5 seconds automatically
    return () => window.clearInterval(timer);
  }, [tickSlide]);

  return (
    <>
      <main className="relative">
        <section className="mx-auto max-w-[1380px] px-4 pt-4 md:px-6">
          <motion.div
            animate="show"
            className="relative overflow-hidden rounded-[28px] border border-[rgba(28,7,112,0.1)] bg-[#cdd0ea] shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
            initial="hidden"
            variants={heroContainer as any}
          >
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-[280px] sm:h-[360px] md:h-[520px] lg:h-[560px]"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, scale: 1.03 }}
                key={currentSlide.image}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <img alt={currentSlide.title} className="absolute inset-0 h-full w-full object-cover" src={currentSlide.image} />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,47,0.74)_0%,rgba(10,18,47,0.44)_42%,rgba(10,18,47,0.16)_100%)]" />
                <div className="hero-grid absolute inset-0" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0">
              <div className="grid h-full items-end gap-6 px-5 pb-7 pt-18 sm:pt-24 md:px-8 md:pb-9 xl:px-10 xl:pb-10">
                {showHeroCopy ? (
                  <motion.div className="max-w-[40rem] self-end" variants={heroContainer as any}>
                    <motion.span className="hero-badge" variants={heroItem as any}>
                      Erbil Polytechnic University
                    </motion.span>
                    <motion.h1 className="mt-4 max-w-[11ch] text-[2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.5rem] md:text-[3.6rem]" variants={heroItem as any}>
                      {currentSlide.title}
                    </motion.h1>
                    <motion.p className="mt-3 max-w-[29rem] text-[0.92rem] leading-6 text-white/84 md:text-[0.98rem] md:leading-7" variants={heroItem as any}>
                      {currentSlide.subtitle}
                    </motion.p>
                  </motion.div>
                ) : (
                  <div className="hidden" />
                )}
              </div>
            </div>

            <div className="absolute bottom-5 right-5 z-10 flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-10 bg-white" : "w-2.5 bg-white/55"}`}
                  key={slide.title}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                />
              ))}
            </div>
          </motion.div>
        </section>

        <StaggerGroup amount={0.28} className="relative z-10 mx-auto -mt-8 grid max-w-[960px] gap-0 overflow-hidden rounded-[24px] border border-[rgba(28,7,112,0.08)] bg-[rgba(255,255,255,0.92)] shadow-[0_18px_42px_rgba(15,23,42,0.08)] backdrop-blur md:-mt-12 md:grid-cols-3">
          {featureCards.map((card) => (
            <StaggerItem key={card.title}>
              <a
                className="feature-card block border-b border-[rgba(28,7,112,0.08)] px-5 py-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                href={card.href}
              >
                <GraduationCap className="mx-auto size-7 text-[var(--brand-500)]" />
                <h2 className="mt-4 text-[1.08rem] font-medium tracking-[-0.03em] text-[color:var(--brand-900)] md:text-[1.22rem]">
                  {card.title}
                </h2>
                <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-500)]">
                  Read More
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <section className="section-surface mx-auto mt-10 max-w-[1220px] rounded-[32px] px-4 py-14 md:px-7">
          <Reveal className="text-center">
            <h2 className="homepage-title">Colleges And Institutes</h2>
            <div className="homepage-divider mx-auto" />
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-[0.875rem] md:grid-cols-2 xl:grid-cols-3">
            {directoryItems.map((item, index) => (
              <StaggerItem key={item.title}>
                <a className="directory-row" href={item.href}>
                  <GraduationCap className="mt-1 size-7 shrink-0 text-[var(--brand-500)]" />
                  <div>
                    <div className="text-[0.98rem] font-medium text-[color:var(--brand-900)]">{item.title}</div>
                    <div className="mt-2 text-sm font-medium text-[var(--brand-500)]">Read More</div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 py-14 md:px-6">
          <Reveal amount={0.42} className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="homepage-title">Latest News</h2>
            </div>
            <a className="text-sm font-semibold text-[var(--brand-500)]" href="./pages/news/index.html">
              More News
            </a>
          </Reveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item, index) => (
              <StaggerItem key={item.title}>
                <a className="news-card-epu" href={item.href}>
                  <div className="relative overflow-hidden rounded-t-[20px]">
                    <img alt={item.title} className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.05] md:h-56" src={item.image} />
                    <div className="absolute bottom-0 right-4 translate-y-1/2 rounded-sm bg-[var(--brand-500)] px-3.5 py-1.5 text-[0.82rem] text-white shadow">
                      {item.date}
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-8">
                    <div className="flex flex-wrap gap-4 text-[0.82rem] text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <User2 className="size-4" />
                        {item.author}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Tag className="size-4" />
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[1.08rem] font-medium leading-8 text-[color:var(--brand-900)] md:text-[1.2rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="facts-shell">
          <div className="mx-auto max-w-[1180px] px-4 py-14 md:px-6">
            <StaggerGroup className="mx-auto max-w-[860px]">
              <div className="video-panel">
                <img
                  alt="University spotlight"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,54,0.08),rgba(6,18,54,0.32))]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="inline-flex size-20 items-center justify-center rounded-full bg-white/92 text-red-600 shadow-[0_12px_30px_rgba(15,23,42,0.22)]">
                    <PlayCircle className="size-11 fill-current stroke-[1.6]" />
                  </div>
                </div>
              </div>
            </StaggerGroup>

            <Reveal amount={0.42} className="mt-12 text-center">
              <h2 className="text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl">FACTS AND FIGURES</h2>
              <div className="homepage-divider mx-auto bg-[var(--brand-300)] after:bg-white/40" />
            </Reveal>

            <StaggerGroup className="mt-10 grid gap-4 text-center md:grid-cols-4">
              {stats.map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <div className="facts-item">
                    <div className="text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-300)] md:text-5xl">{stat.value}</div>
                    <div className="mt-3 text-base text-white/92 md:text-lg">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-t border-[rgba(28,7,112,0.08)] bg-[rgba(245,243,253,0.5)]">
          <div className="mx-auto max-w-[1240px] px-4 py-10 md:px-6">
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {partners.map((partner) => (
                <StaggerItem key={partner.name}>
                  <a className="partner-logo-box" href={partner.href} rel="noreferrer" target="_blank">
                    <img alt={`${partner.name} logo`} className="partner-logo-mark" loading="lazy" src={getPartnerLogo(partner.domain)} />
                    <span className="partner-logo-name">{partner.name}</span>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>

      
    </>
  );
}
