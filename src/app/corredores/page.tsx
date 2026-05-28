"use client";

import { useState } from "react";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  Camera, 
  Users, 
  MapPin, 
  Layers,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";

export default function CorredoresPage() {
  const [activeTab, setActiveTab] = useState("captacion");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modulos = [
    {
      id: "captacion",
      title: "Justificación de Precios",
      icon: TrendingUp,
      headline: "Termina con la terquedad del propietario usando datos duros",
      description: "El mayor dolor de un corredor es el propietario que sobrevalora su inmueble. Con Valoriza, obtienes las transacciones reales del Conservador de Bienes Raíces (CBR) de las propiedades vendidas en su misma calle. Preséntale datos reales y firmará la captación exclusiva a precio de mercado.",
      bullets: [
        "Precios reales de compraventa inscritos en el CBR",
        "Comparativa calle por calle y manzana por manzana",
        "Evita captar propiedades fuera de precio que tardan meses en venderse",
        "Gráficos evolutivos del valor del metro cuadrado en la zona"
      ],
      color: "from-blue-50/50 to-cyan-50/50",
      borderColor: "border-blue-200"
    },
    {
      id: "ia-visual",
      title: "IA Visual de Fotos",
      icon: Camera,
      headline: "Evaluación objetiva del estado de conservación",
      description: "Nuestra Inteligencia Artificial multimodal analiza las fotografías de cocina, baños, pisos y fachadas que subas de la propiedad. Detecta de forma automática el nivel de terminaciones y el desgaste para ajustar la tasación científicamente, emitiendo un veredicto imparcial.",
      bullets: [
        "Análisis de terminaciones (porcelanato, alfombra, madera, etc.)",
        "Calificación automática de desgaste y estado de conservación",
        "Justificación técnica ante bancos y compradores exigentes",
        "Ajuste automático de la fórmula algorítmica en base a la IA"
      ],
      color: "from-purple-50/50 to-pink-50/50",
      borderColor: "border-purple-200"
    },
    {
      id: "multi-tenant",
      title: "Equipos y Multi-Agente",
      icon: Users,
      headline: "Control centralizado para tu corredora de propiedades",
      description: "Diseñado para oficinas con múltiples agentes independientes o franquicias. El administrador de la oficina puede gestionar créditos de tasaciones, ver el historial consolidado de todas las captaciones de la empresa y asegurar que todo su equipo entregue informes con un formato de marca unificado.",
      bullets: [
        "Asignación de créditos de tasaciones a agentes específicos",
        "Filtro estricto Multi-Tenant (los datos de un agente son privados o visibles según rol)",
        "Plantilla de PDF marca blanca unificada con el logo de tu empresa",
        "Auditoría y control de descargas e informes generados"
      ],
      color: "from-emerald-50/50 to-teal-50/50",
      borderColor: "border-emerald-200"
    }
  ];

  const currentModulo = modulos.find(m => m.id === activeTab) || modulos[0];

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
          <source src="/videos/VIDEO2.mp4" type="video/mp4" />
        </video>
        {/* Soft light overlay with glassmorphism blur */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[5px]"></div>
      </div>

      {/* Ambient soft colored blobs - Positioned at z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[380px] h-[380px] bg-blue-100/40 rounded-full blur-[110px]"></div>
        <div className="absolute bottom-1/3 left-1/4 -translate-x-1/2 w-[420px] h-[420px] bg-emerald-100/30 rounded-full blur-[130px]"></div>
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
              <Link href="/planes" className="text-slate-600 hover:text-primary font-medium transition-colors text-sm">Planes y Precios</Link>
              <Link href="/corredores" className="text-primary border-b-2 border-primary pb-1 font-semibold text-sm">Para Corredores</Link>
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

      {/* Main Content - Positioned at relative z-10 */}
      <main className="relative z-10 flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center gap-20">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-blue-500/10" />
              SaaS Especializado para Corretaje
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              La herramienta definitiva para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Corredor de Elite</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Cierra más exclusivas, elimina las discusiones de precios y destaca frente a tus competidores con tasaciones profesionales en Chile basadas en transacciones reales e Inteligencia Artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/registro" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                Comenzar Gratis ahora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="https://wa.me/56912345678" 
                target="_blank"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                Agendar Demo
              </Link>
            </div>
          </div>

          {/* Interactive Metric Cards (Showcase) */}
          <div className="relative bg-white/85 border border-slate-200/80 p-6 sm:p-8 rounded-3xl backdrop-blur-xl hover:border-slate-350 transition-all duration-500 shadow-xl shadow-slate-200/40">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-emerald-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-md flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              +32% Exclusividad
            </div>
            
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              Panel Consolidado de Oficina (Corredores Asociados)
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                <span className="text-slate-500 text-xs font-semibold block mb-1">Tasaciones este Mes</span>
                <span className="text-3xl font-black text-slate-900">184</span>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">↑ 18% vs mes anterior</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                <span className="text-slate-500 text-xs font-semibold block mb-1">Tasa de Captación</span>
                <span className="text-3xl font-black text-slate-900">84.2%</span>
                <span className="text-xs text-emerald-600 font-semibold block mt-1">Líder en Santiago Oriente</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Actividad de Agentes Reciente</h4>
              
              <div className="flex items-center justify-between text-sm bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-black flex items-center justify-center text-xs">
                    SL
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Sofía Lagos</p>
                    <p className="text-slate-500 text-xs">Tasación Providencia (Excelente)</p>
                  </div>
                </div>
                <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md text-xs">
                  Completado
                </span>
              </div>

              <div className="flex items-center justify-between text-sm bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-black flex items-center justify-center text-xs">
                    CM
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Carlos Muñoz</p>
                    <p className="text-slate-500 text-xs">Scraper CBR Las Condes (20 transacciones)</p>
                  </div>
                </div>
                <span className="text-primary font-bold bg-blue-50 border border-blue-250 px-2 py-0.5 rounded-md text-xs">
                  Extrayendo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Feature Section */}
        <div className="border border-slate-200/80 rounded-3xl p-6 sm:p-10 bg-white/70 backdrop-blur-xl shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Herramientas creadas específicamente para Chile
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Selecciona uno de nuestros pilares tecnológicos y descubre cómo resolverá tus operaciones diarias de corretaje.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 border-b border-slate-200/80 pb-6">
            {modulos.map((modulo) => {
              const Icon = modulo.icon;
              return (
                <button
                  key={modulo.id}
                  onClick={() => setActiveTab(modulo.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    activeTab === modulo.id
                      ? "bg-primary text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 border border-slate-200/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {modulo.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className={`grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br ${currentModulo.color} border ${currentModulo.borderColor} p-6 sm:p-8 rounded-2xl transition-all duration-500`}>
            
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {currentModulo.headline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentModulo.description}
              </p>
              
              <ul className="space-y-3">
                {currentModulo.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-700 items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graphic/Visual Showcase for the current feature */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-md">
              {activeTab === "captacion" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      Av. Vitacura 5400, Vitacura
                    </span>
                    <span className="text-xs font-bold text-emerald-600">24 comparables</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-slate-950">Depto. 702 - Vendido CBR 2025</p>
                        <p className="text-slate-500 mt-0.5">85 m² • 3 Dorms • 2 Baños</p>
                      </div>
                      <span className="text-sm font-bold text-slate-800">6.450 UF</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-slate-950">Depto. 305 - Vendido CBR 2025</p>
                        <p className="text-slate-500 mt-0.5">82 m² • 3 Dorms • 2 Baños</p>
                      </div>
                      <span className="text-sm font-bold text-slate-800">6.380 UF</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-slate-950">Depto. 1104 - Vendido CBR 2024</p>
                        <p className="text-slate-500 mt-0.5">88 m² • 3 Dorms • 2 Baños</p>
                      </div>
                      <span className="text-sm font-bold text-slate-800">6.250 UF</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-xl text-center">
                    <p className="text-xs text-blue-700 font-semibold">Valor Sugerido para tu Captación:</p>
                    <p className="text-2xl font-black text-slate-900 mt-1">6.350 UF</p>
                  </div>
                </div>
              )}

              {activeTab === "ia-visual" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-purple-650" />
                      Análisis de Fotos del Inmueble (IA)
                    </span>
                    <span className="text-xs font-bold text-purple-650">IA Activa</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative rounded-xl border border-slate-200 overflow-hidden h-28 flex items-center justify-center bg-slate-100">
                      <span className="text-[10px] text-slate-700 absolute bottom-1.5 left-1.5 bg-white/90 border border-slate-150 px-2 py-0.5 rounded-md font-bold shadow-sm">Living - Excelente (92%)</span>
                    </div>
                    <div className="relative rounded-xl border border-slate-200 overflow-hidden h-28 flex items-center justify-center bg-slate-100">
                      <span className="text-[10px] text-slate-700 absolute bottom-1.5 left-1.5 bg-white/90 border border-slate-150 px-2 py-0.5 rounded-md font-bold shadow-sm">Cocina - Remodelada (95%)</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-100 p-3.5 rounded-xl text-xs space-y-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-purple-700">Calidad de Terminaciones:</span>
                      <span className="text-slate-900">Premium (Top 10%)</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-purple-700">Factor de Depreciación (Desgaste):</span>
                      <span className="text-slate-900">-2.1% (Muy bajo)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "multi-tenant" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      Aislamiento Multi-Tenant de Datos
                    </span>
                    <span className="text-xs font-bold text-emerald-600">100% Aislado</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="border border-slate-200 p-3 rounded-xl bg-white text-xs shadow-sm">
                      <div className="flex justify-between mb-1.5 font-bold">
                        <span className="text-slate-955">Empresa A: Century21 Sur</span>
                        <span className="text-slate-400 font-normal">tnt_c21s</span>
                      </div>
                      <p className="text-slate-600">8 agentes activos • 112 tasaciones en base de datos. Información totalmente invisible para otros tenants.</p>
                    </div>

                    <div className="border border-slate-100 p-3 rounded-xl bg-slate-50 text-xs opacity-60">
                      <div className="flex justify-between mb-1.5 font-bold text-slate-400">
                        <span>Empresa B: RE/MAX Norte</span>
                        <span className="font-normal">tnt_remn</span>
                      </div>
                      <p className="text-slate-400">15 agentes activos • 218 tasaciones en base de datos.</p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl text-center text-xs font-semibold text-emerald-700">
                    Garantía estricta de seguridad bancaria y propiedad intelectual.
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50/30 to-slate-150/40 border border-blue-200 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xl shadow-slate-200/30">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              ¿Listo para dar el salto tecnológico en tu corretaje?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Únete a las corredoras líderes de propiedades en Chile que ya están captando un 30% más rápido mediante tasaciones instantáneas avaladas por datos empíricos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/registro" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 text-lg"
              >
                Prueba Gratuita (3 tasaciones/mes)
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="https://wa.me/56912345678" 
                target="_blank"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center shadow-sm text-lg"
              >
                Agendar Demostración
              </Link>
            </div>
          </div>
        </div>

      </main>

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
