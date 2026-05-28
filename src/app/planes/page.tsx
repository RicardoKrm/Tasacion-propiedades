"use client";

import { useState } from "react";
import { Check, ArrowRight, Building2, Sparkles, ShieldCheck, Users, Zap, Menu, X } from "lucide-react";
import Link from "next/link";

export default function PlanesPage() {
  const [esAnual, setEsAnual] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Precios base en UF
  const precios = {
    basico: 0,
    pro: esAnual ? 0.64 : 0.8, // 20% de descuento en anual
    oficina: esAnual ? 2.0 : 2.5,
  };

  return (
    <div className="relative min-h-screen text-slate-800 font-sans overflow-x-hidden flex flex-col justify-between bg-transparent">
      {/* Background Video - Positioned at z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/videos/VIDEO1.mp4" type="video/mp4" />
        </video>
        {/* Soft light overlay with glassmorphism blur */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[5px]"></div>
      </div>

      {/* Ambient soft colored blobs in background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-indigo-150/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Header / Navbar (Light Theme Glass) - Positioned at relative z-50 */}
      <header className="relative w-full z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100 group-hover:bg-blue-100 transition-all">
                <Building2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                Valoriza
              </span>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-slate-600 hover:text-primary font-medium transition-colors text-sm">Inicio</Link>
              <Link href="/planes" className="text-primary border-b-2 border-primary pb-1 font-semibold text-sm">Planes y Precios</Link>
              <Link href="/corredores" className="text-slate-600 hover:text-primary font-medium transition-colors text-sm">Para Corredores</Link>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4 items-center">
              <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                Ingresar
              </Link>
              <Link 
                href="/registro" 
                className="text-sm font-semibold text-white bg-primary hover:bg-blue-700 px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Comenzar Gratis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg px-6 py-6 flex flex-col gap-4 z-40 animate-fade-in">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-primary font-semibold py-2 border-b border-slate-100 text-sm"
            >
              Inicio
            </Link>
            <Link 
              href="/planes" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-primary font-semibold py-2 border-b border-slate-100 text-sm"
            >
              Planes y Precios
            </Link>
            <Link 
              href="/corredores" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-700 hover:text-primary font-semibold py-2 border-b border-slate-100 text-sm"
            >
              Para Corredores
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary font-semibold text-center py-2.5 rounded-xl border border-slate-200 text-sm"
              >
                Ingresar
              </Link>
              <Link 
                href="/registro" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all text-sm shadow-md"
              >
                Comenzar Gratis
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Container - Positioned at relative z-10 */}
      <div className="relative z-10 flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* Title and Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            Acceso Instantáneo
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Precios simples para potenciar tu corretaje
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Elige el plan ideal para tu volumen de captación y comienza a entregar informes de tasación profesionales de estándar bancario en segundos.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold transition-colors ${!esAnual ? "text-slate-900" : "text-slate-400"}`}>
              Facturación Mensual
            </span>
            <button
              onClick={() => setEsAnual(!esAnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 border border-slate-300 hover:bg-slate-300 transition-colors focus:outline-none"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-primary transition-transform ${
                  esAnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${esAnual ? "text-slate-900" : "text-slate-400"}`}>
              Facturación Anual
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-250">
                Ahorra 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full items-stretch mb-8">
          
          {/* Plan Básico */}
          <div className="relative group flex flex-col justify-between border border-slate-200/80 rounded-3xl p-8 bg-white/70 backdrop-blur-xl hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 shadow-lg">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">Básico</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Perfecto para corredores independientes o en sus inicios.</p>
                </div>
                <div className="bg-slate-100 p-2 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-slate-600" />
                </div>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-black text-slate-900 tracking-tight">
                  {precios.basico} UF
                </span>
                <span className="text-slate-500 text-sm font-medium ml-2">/ mes</span>
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>3 Tasaciones</strong> mensuales completas</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Integración de datos Conservador (CBR) y SII</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Informes PDF con marca de agua Valoriza</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <Check className="w-5 h-5 text-slate-250 flex-shrink-0" />
                  <span className="line-through">Sin IA Visual (evaluación de fotos)</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <Check className="w-5 h-5 text-slate-250 flex-shrink-0" />
                  <span className="line-through">Sin personalización de logo corporativo</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/registro" 
              className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-center font-bold rounded-2xl transition-all duration-300 active:scale-95 shadow-sm"
            >
              Comenzar Gratis
            </Link>
          </div>

          {/* Plan Pro */}
          <div className="relative group flex flex-col justify-between border-2 border-primary rounded-3xl p-8 bg-white/85 backdrop-blur-xl transition-all duration-300 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/15 transform md:-translate-y-4">
            {/* Recommendation badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md shadow-blue-500/30">
              <Sparkles className="w-3 h-3 fill-white" />
              Más Popular
            </div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-1.5">Pro</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Para corredores activos que buscan excelencia e informes corporativos.</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    {precios.pro} UF
                  </span>
                  <span className="text-slate-500 text-sm font-medium ml-2">/ mes</span>
                </div>
                {esAnual && (
                  <p className="text-emerald-600 text-xs font-semibold mt-1">
                    Facturado anualmente (7.68 UF / año)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>20 Tasaciones</strong> mensuales</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>PDFs de Marca Blanca</strong> (sin marca de agua)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Personalización total:</strong> Tu logo, colores y contacto</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>IA Visual Avanzada:</strong> Clasificación de fotos y estado</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Historial en la nube ilimitado</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Soporte prioritario por email</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/registro" 
              className="block w-full py-4 px-4 bg-primary hover:bg-blue-700 text-white text-center font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Comenzar Plan Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Plan Empresa */}
          <div className="relative group flex flex-col justify-between border border-slate-200/80 rounded-3xl p-8 bg-white/70 backdrop-blur-xl hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 shadow-lg">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">Oficina Real Estate</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Para oficinas, franquicias y equipos que buscan control Multi-Tenant.</p>
                </div>
                <div className="bg-slate-100 p-2 rounded-xl border border-slate-200">
                  <Users className="w-5 h-5 text-slate-600" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    {precios.oficina} UF
                  </span>
                  <span className="text-slate-500 text-sm font-medium ml-2">/ mes</span>
                </div>
                {esAnual && (
                  <p className="text-emerald-600 text-xs font-semibold mt-1">
                    Facturado anualmente (24.0 UF / año)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Tasaciones ilimitadas</strong></span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Hasta 10 cuentas de agentes</strong> asociadas</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>Panel Multi-Tenant / Multi-Agent</strong></span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Asignación centralizada de créditos de tasación</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Acceso premium al **Bot Scraper CBR** por ciudad</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Soporte prioritario 24/7 vía WhatsApp y Onboarding</span>
                </li>
              </ul>
            </div>

            <Link 
              href="https://wa.me/56912345678" 
              target="_blank"
              className="block w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-center font-bold rounded-2xl transition-all duration-300 active:scale-95 shadow-sm"
            >
              Contactar Ventas
            </Link>
          </div>

        </div>
      </div>

      {/* Footer - Positioned at relative z-10 */}
      <footer className="relative w-full z-10 py-8 border-t border-slate-200 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-slate-900 font-bold">Valoriza SaaS</span>
          </div>
          <p>© {new Date().getFullYear()} Todos los derechos reservados. Optimizado para corredores en Chile.</p>
        </div>
      </footer>
    </div>
  );
}
