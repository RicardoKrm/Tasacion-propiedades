"use client";

import { useState } from "react";
import { Building2, Search, MapPin, BarChart3, Camera, ShieldCheck, ArrowRight, CheckCircle2, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                Valoriza
              </span>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#inicio" className="text-slate-600 hover:text-primary font-medium transition-colors">Inicio</Link>
              <Link href="/planes" className="text-slate-600 hover:text-primary font-medium transition-colors">Planes</Link>
              <Link href="/corredores" className="text-slate-600 hover:text-primary font-medium transition-colors">Para Corredores</Link>
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-slate-600 hover:text-primary font-medium transition-colors">Ingresar</Link>
                <Link href="/registro" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Comenzar Gratis
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-50 transition-colors text-slate-600 focus:outline-none"
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
              href="#inicio" 
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
              Planes
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
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                El estándar en tasación para Chile
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Descubre el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">valor real</span> de cualquier propiedad en segundos.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Obtén informes profesionales de valoración con nuestro algoritmo avanzado que combina datos del Conservador de Bienes Raíces, portales inmobiliarios y análisis visual con IA.
              </p>
              
              {/* Search Widget */}
              <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
                  <MapPin className="text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Ingresa dirección o rol del SII..." 
                    className="bg-transparent border-none focus:outline-none focus:ring-0 w-full text-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                  <Search className="w-5 h-5" />
                  Tasar ahora
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                No requiere tarjeta de crédito para la primera tasación.
              </p>
            </div>

            <div className="relative lg:h-[600px] animate-slide-up delay-200 hidden lg:block">
              {/* Decorative background blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl opacity-50"></div>
              
              {/* Report Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="bg-white px-4 py-1.5 rounded-md text-xs font-medium text-slate-500 shadow-sm flex-1 text-center">
                    informe-tasacion-providencia.pdf
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Tasación Comercial</h3>
                      <p className="text-slate-500 text-sm">Av. Providencia 1234, Depto 502</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Valor Sugerido Venta</p>
                      <p className="text-3xl font-bold text-slate-900">7.250 UF</p>
                      <p className="text-sm text-emerald-600 font-medium mt-1">+4.2% vs último año</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 font-medium mb-1">Rango Mínimo</p>
                      <p className="text-lg font-semibold text-slate-700">6.980 UF</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 font-medium mb-1">Rango Máximo</p>
                      <p className="text-lg font-semibold text-slate-700">7.520 UF</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Estado de Conservación (IA)</span>
                      <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Excelente (94/100)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Rentabilidad Anual</p>
                  <p className="text-lg font-bold text-slate-900">5.8% Cap Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">La tecnología detrás de la tasación más precisa</h2>
            <p className="text-lg text-slate-600">Nuestro algoritmo procesa miles de datos en tiempo real para entregarte un valor de mercado con el que puedes cerrar negocios con confianza.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <DatabaseIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Datos Reales (CBR)</h3>
              <p className="text-slate-600">No solo usamos precios de publicación. Integramos transacciones reales inscritas en el Conservador de Bienes Raíces para máxima precisión.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Análisis Visual IA</h3>
              <p className="text-slate-600">Sube las fotos de la propiedad y nuestra IA multimodal evaluará el estado de conservación (terminaciones, desgaste) para ajustar el valor.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Informes Marca Blanca</h3>
              <p className="text-slate-600">Descarga PDFs profesionales personalizados con tu logo, colores y datos de contacto en menos de 10 segundos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-xl shadow-blue-900/5">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">¿Listo para modernizar tu corretaje?</h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Únete a cientos de corredores chilenos que ya están cerrando más captaciones gracias a tasaciones instantáneas y profesionales.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registro" className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                  Prueba Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#demo" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm">
                  Agendar Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-slate-900">Valoriza</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Valoriza SaaS. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
