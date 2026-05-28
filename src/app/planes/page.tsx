"use client";

import { useState } from "react";
import { Check, ArrowRight, Building2, Sparkles, ShieldCheck, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function PlanesPage() {
  const [esAnual, setEsAnual] = useState(false);

  // Precios base en UF
  const precios = {
    basico: 0,
    pro: esAnual ? 0.64 : 0.8, // 20% de descuento en anual
    oficina: esAnual ? 2.0 : 2.5,
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans overflow-x-hidden flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
        >
          <source src="/videos/VIDEO1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with glassmorphism blur */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[4px]"></div>
      </div>

      {/* Ambient glowing blobs in background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-blue-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Header / Navbar */}
      <header className="w-full z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600/20 p-2.5 rounded-xl border border-blue-500/30 group-hover:bg-blue-600/30 transition-all">
                <Building2 className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Valoriza
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-slate-300 hover:text-white font-medium transition-colors text-sm">Inicio!!</Link>
              <Link href="/planes" className="text-white border-b-2 border-blue-500 pb-1 font-semibold text-sm">Planes y Precios</Link>
              <Link href="/corredores" className="text-slate-300 hover:text-white font-medium transition-colors text-sm">Para Corredores</Link>
            </div>

            <div className="flex gap-4 items-center">
              <Link href="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Ingresar
              </Link>
              <Link 
                href="/registro" 
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Comenzar Gratis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* Title and Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 font-medium text-xs uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            Acceso Instantáneo
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Precios simples para potenciar tu corretaje
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Elige el plan ideal para tu volumen de captación y comienza a entregar informes de tasación profesionales de estándar bancario en segundos.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold transition-colors ${!esAnual ? "text-white" : "text-slate-400"}`}>
              Facturación Mensual
            </span>
            <button
              onClick={() => setEsAnual(!esAnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-800 border border-white/10 hover:border-white/20 transition-colors focus:outline-none"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-blue-500 transition-transform ${
                  esAnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${esAnual ? "text-white" : "text-slate-400"}`}>
              Facturación Anual
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
                Ahorra 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full items-stretch mb-8">
          
          {/* Plan Básico */}
          <div className="relative group flex flex-col justify-between border border-white/10 rounded-3xl p-8 bg-slate-900/40 backdrop-blur-xl hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-950/50">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">Básico</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Perfecto para corredores independientes o en sus inicios.</p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-slate-300" />
                </div>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-black text-white tracking-tight">
                  {precios.basico} UF
                </span>
                <span className="text-slate-400 text-sm font-medium ml-2">/ mes</span>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>3 Tasaciones</strong> mensuales completas</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Integración de datos Conservador (CBR) y SII</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Informes PDF con marca de agua Valoriza</span>
                </li>
                <li className="flex gap-3 text-slate-500">
                  <Check className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <span className="line-through">Sin IA Visual (evaluación de fotos)</span>
                </li>
                <li className="flex gap-3 text-slate-500">
                  <Check className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <span className="line-through">Sin personalización de logo corporativo</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/registro" 
              className="block w-full py-3.5 px-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 text-center font-bold rounded-2xl transition-all duration-300 active:scale-95"
            >
              Comenzar Gratis
            </Link>
          </div>

          {/* Plan Pro */}
          <div className="relative group flex flex-col justify-between border-2 border-blue-500/50 rounded-3xl p-8 bg-slate-900/60 backdrop-blur-2xl transition-all duration-300 shadow-2xl shadow-blue-500/10 hover:border-blue-400 hover:shadow-blue-500/20 transform md:-translate-y-4">
            {/* Recommendation badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-blue-600/30">
              <Sparkles className="w-3 h-3 fill-white" />
              Más Popular
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1.5">Pro</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">Para corredores activos que buscan excelencia e informes corporativos.</p>
                </div>
                <div className="bg-blue-600/10 p-2 rounded-xl border border-blue-500/20">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white tracking-tight">
                    {precios.pro} UF
                  </span>
                  <span className="text-slate-300 text-sm font-medium ml-2">/ mes</span>
                </div>
                {esAnual && (
                  <p className="text-emerald-400 text-xs font-semibold mt-1">
                    Facturado anualmente (7.68 UF / año)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-200">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>20 Tasaciones</strong> mensuales</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>PDFs de Marca Blanca</strong> (sin marca de agua)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>Personalización total:</strong> Tu logo, colores y contacto</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>IA Visual Avanzada:</strong> Clasificación de fotos y estado</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Historial en la nube ilimitado</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Soporte prioritario por email</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/registro" 
              className="block w-full py-4 px-4 bg-blue-600 hover:bg-blue-500 text-white text-center font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Comenzar Plan Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Plan Empresa */}
          <div className="relative group flex flex-col justify-between border border-white/10 rounded-3xl p-8 bg-slate-900/40 backdrop-blur-xl hover:border-white/25 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-950/50">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">Oficina Real Estate</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Para oficinas, franquicias y equipos que buscan control Multi-Tenant.</p>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                  <Users className="w-5 h-5 text-slate-300" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white tracking-tight">
                    {precios.oficina} UF
                  </span>
                  <span className="text-slate-400 text-sm font-medium ml-2">/ mes</span>
                </div>
                {esAnual && (
                  <p className="text-emerald-400 text-xs font-semibold mt-1">
                    Facturado anualmente (24.0 UF / año)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>Tasaciones ilimitadas</strong></span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>Hasta 10 cuentas de agentes</strong> asociadas</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span><strong>Panel Multi-Tenant / Multi-Agent</strong></span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Asignación centralizada de créditos de tasación</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Acceso premium al **Bot Scraper CBR** por ciudad</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Soporte prioritario 24/7 vía WhatsApp y Onboarding</span>
                </li>
              </ul>
            </div>

            <Link 
              href="https://wa.me/56912345678" 
              target="_blank"
              className="block w-full py-3.5 px-4 bg-white/10 hover:bg-white/15 text-white border border-white/10 text-center font-bold rounded-2xl transition-all duration-300 active:scale-95"
            >
              Contactar Ventas
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 bg-slate-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-500" />
            <span className="text-white font-bold">Valoriza SaaS</span>
          </div>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Optimizado para corredores en Chile.</p>
        </div>
      </footer>
    </div>
  );
}
