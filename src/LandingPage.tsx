import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-indigo-500/30">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-950/95" />
      </div>

      {/* Hero Section (Above the Fold) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="flex max-w-4xl flex-col items-center text-center">
          {/* Logo with fade-in */}
          <motion.img
            src="/logo.svg"
            alt="Periscope Logo"
            className="mb-12 h-20 w-auto object-contain md:h-28"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Headline with sequential entrance and continuous pulse */}
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Feel the pulse of your{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent pb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                delay: 1.5, // Start pulse after entrance animation
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Smart City
            </motion.span>
          </motion.h1>

          {/* Scroll Indicator (Optional but good UX) */}
          <motion.div
            className="absolute bottom-12 flex flex-col items-center gap-2 text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">Scroll to explore</span>
            <motion.div
              className="h-8 w-[1px] bg-gradient-to-b from-slate-500 to-transparent"
              animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Second Section (Scroll-Triggered) */}
      <motion.section
        className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950/40 px-6 py-24 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div
          className="flex max-w-2xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Interested?
          </h2>

          <p className="mb-12 text-lg text-slate-300 md:text-xl">
            Get in touch to discover how our technology can transform the way you interact with urban data.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <a
              href="mailto:hello@skunkworks.ai"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                hello@skunkworks.ai
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </a>

            <a
              href="https://skunkworks.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-slate-800 hover:border-slate-600 hover:text-cyan-400 active:scale-95"
            >
              skunkworks.ai
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
