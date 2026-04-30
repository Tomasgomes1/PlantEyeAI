import React, { useRef, useState, useEffect } from 'react';
import { Leaf, ArrowRight, Play, Pause, Scan, Zap, BarChart2 } from 'lucide-react';

const LandingPage = ({ onEnterApp }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#064E3B] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;700&display=swap');

        .font-display { font-family: 'DM Serif Display', serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.25s; }
        .delay-3 { transition-delay: 0.4s; }
        .delay-4 { transition-delay: 0.55s; }
        .delay-5 { transition-delay: 0.7s; }

        .btn-primary {
          background: #064E3B;
          color: white;
          border: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          background: #043d2e;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(6,78,59,0.25);
        }
        .btn-primary:active { transform: translateY(0); }

        .video-overlay {
          background: linear-gradient(
            to bottom,
            rgba(248,250,248,0.15) 0%,
            rgba(248,250,248,0) 30%,
            rgba(248,250,248,0) 70%,
            rgba(248,250,248,0.6) 100%
          );
        }

        .feature-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(6,78,59,0.08);
        }

        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="grain" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between bg-[#F8FAF8]/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="border-[2.5px] border-[#064E3B] px-2.5 py-0.5 flex items-center gap-0.5">
            <span className="font-display text-xl font-bold tracking-tighter text-[#064E3B]">PL</span>
            <Leaf className="w-5 h-5 text-[#064E3B] fill-current -rotate-12" />
            <span className="font-display text-xl font-bold tracking-tighter text-[#064E3B]">NT</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tighter text-[#064E3B]">EYE</span>
        </div>

        <button onClick={onEnterApp} className="btn-primary font-body font-medium text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
          Entrar na App
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <div className={`fade-up ${visible ? 'visible' : ''} delay-1 inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 rounded-full mb-8`}>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-body text-[11px] font-bold uppercase tracking-widest text-emerald-700">IA para plantas</span>
          </div>

          <h1 className={`fade-up ${visible ? 'visible' : ''} delay-2 font-display text-6xl md:text-7xl leading-[1.05] tracking-tight text-[#064E3B] mb-6`}>
            A tua planta<br />
            <span className="italic text-emerald-600">fala contigo.</span>
          </h1>

          <p className={`fade-up ${visible ? 'visible' : ''} delay-3 font-body text-base text-[#064E3B]/60 leading-relaxed max-w-md mx-auto mb-10`}>
            Aponta a câmara, recebe um diagnóstico instantâneo. Saúde, luz, hidratação — tudo numa análise com IA.
          </p>

          <div className={`fade-up ${visible ? 'visible' : ''} delay-4 flex flex-col sm:flex-row items-center justify-center gap-4`}>
            <button
              onClick={onEnterApp}
              className="btn-primary font-body font-bold text-base px-8 py-4 rounded-full flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Experimentar agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="font-body text-xs text-[#064E3B]/40">Gratuito · Sem registo obrigatório</p>
          </div>
        </div>

        {/* VIDEO */}
        <div className={`fade-up ${visible ? 'visible' : ''} delay-5 relative w-full max-w-2xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100`}>
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover bg-emerald-50"
          />
          <div className="video-overlay absolute inset-0" />
          <button
            onClick={togglePlay}
            className="absolute bottom-5 right-5 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            {isPlaying
              ? <Pause className="w-4 h-4 text-[#064E3B]" />
              : <Play className="w-4 h-4 text-[#064E3B] ml-0.5" />
            }
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: <Scan className="w-6 h-6 text-emerald-600" />, title: 'Diagnóstico Instantâneo', desc: 'Fotografia → resultado em segundos. Sem esperas, sem formulários.', bg: 'bg-emerald-50' },
            { icon: <Zap className="w-6 h-6 text-amber-500" />, title: 'Modo em Direto', desc: 'Monitorização contínua com feedback de voz em tempo real.', bg: 'bg-amber-50' },
            { icon: <BarChart2 className="w-6 h-6 text-violet-500" />, title: 'Estatísticas', desc: 'Histórico completo de todas as tuas plantas e tendências de saúde.', bg: 'bg-violet-50' },
          ].map(({ icon, title, desc, bg }) => (
            <div key={title} className={`feature-card ${bg} rounded-[2rem] p-7 border border-white`}>
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                {icon}
              </div>
              <h3 className="font-display text-lg text-[#064E3B] mb-2">{title}</h3>
              <p className="font-body text-sm text-[#064E3B]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto bg-[#064E3B] rounded-[2.5rem] p-12 text-center shadow-xl">
          <Leaf className="w-10 h-10 text-emerald-400 fill-current mx-auto mb-6 -rotate-12" />
          <h2 className="font-display text-4xl text-white mb-4 leading-tight">
            As tuas plantas<br />merecem o melhor.
          </h2>
          <p className="font-body text-sm text-emerald-200/70 mb-8 max-w-xs mx-auto leading-relaxed">
            Junta-te a milhares de utilizadores que já cuidam das suas plantas com inteligência artificial.
          </p>
          <button
            onClick={onEnterApp}
            className="font-body font-bold text-[#064E3B] bg-white px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-emerald-50 transition-colors"
          >
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-10 text-center">
        <p className="font-body text-xs text-[#064E3B]/30">
          © {new Date().getFullYear()} PlantEye · Feito com 🌿
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;