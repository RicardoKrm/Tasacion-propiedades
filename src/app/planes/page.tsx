import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Placeholder - Similar to landing page */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto" aria-label="Global">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-xl">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">Valoriza</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/planes" className="text-sm font-semibold leading-6 text-slate-900">Planes y Precios</Link>
            <Link href="/corredores" className="text-sm font-semibold leading-6 text-slate-600">Para Corredores</Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm font-semibold text-slate-900">Ingresar</Link>
            <Link href="/registro" className="text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full">Comenzar Gratis</Link>
          </div>
        </nav>
      </header>

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-6">Precios simples para hacer crecer tu cartera</h1>
          <p className="text-lg text-slate-600">Elige el plan que mejor se adapte a tu volumen de captación mensual. Comienza gratis, sin tarjeta de crédito.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan Básico */}
          <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Básico</h3>
            <p className="text-slate-500 text-sm mb-6">Para corredores independientes que recién comienzan.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">0 UF</span>
              <span className="text-slate-500 font-medium">/mes</span>
            </div>
            <Link href="/registro" className="block w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-center rounded-xl transition-colors mb-8">
              Comenzar Gratis
            </Link>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> 3 Tasaciones mensuales</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Análisis de datos CBR y SII</li>
              <li className="flex gap-3 text-slate-400"><Check className="w-5 h-5 text-slate-300 flex-shrink-0" /> Generador de PDF (Marca de agua)</li>
              <li className="flex gap-3 text-slate-400"><Check className="w-5 h-5 text-slate-300 flex-shrink-0" /> Sin IA Visual para fotos</li>
            </ul>
          </div>

          {/* Plan Pro */}
          <div className="border-2 border-primary rounded-3xl p-8 shadow-xl bg-white relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Más Popular
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro (Fase 2)</h3>
            <p className="text-slate-500 text-sm mb-6">Para corredores que captan regularmente y buscan profesionalismo.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">0.8 UF</span>
              <span className="text-slate-500 font-medium">/mes</span>
            </div>
            <Link href="/registro" className="block w-full py-3 px-4 bg-primary hover:bg-blue-600 text-white font-semibold text-center rounded-xl transition-colors mb-8 shadow-md">
              Próximamente
            </Link>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> 20 Tasaciones mensuales</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <strong>Informes PDF Marca Blanca</strong></li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> <strong>Análisis IA Visual (GPT-4)</strong></li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Historial en la nube ilimitado</li>
            </ul>
          </div>

          {/* Plan Empresa */}
          <div className="border border-slate-200 rounded-3xl p-8 shadow-sm bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Oficina Real Estate</h3>
            <p className="text-slate-500 text-sm mb-6">Para oficinas con múltiples agentes y alto volumen.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">2.5 UF</span>
              <span className="text-slate-500 font-medium">/mes</span>
            </div>
            <Link href="#" className="block w-full py-3 px-4 border border-slate-300 hover:border-slate-400 text-slate-900 font-semibold text-center rounded-xl transition-colors mb-8">
              Contactar Ventas
            </Link>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Tasaciones ilimitadas</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Hasta 10 cuentas de agentes</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> API Access</li>
              <li className="flex gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0" /> Soporte prioritario WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
