"use client";

import { useEffect } from "react";
import { PlusvaliaChart } from "@/components/charts/PlusvaliaChart";
import { TiempoColocacionChart } from "@/components/charts/TiempoColocacionChart";

export default function ReporteDemo() {
  useEffect(() => {
    // Autoprint after 1 second for the demo
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[210mm] mx-auto bg-white min-h-[297mm] shadow-2xl print:shadow-none print:m-0">
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { margin: 0; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white; }
          .page-break { page-break-before: always; }
        }
      `}} />

      {/* PORTADA (Página 1) */}
      <div className="h-[297mm] flex flex-col relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80" alt="Cover" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col p-16">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-3xl font-black text-white tracking-tight">Valoriza</span>
          </div>

          <div className="mt-auto mb-32">
            <h1 className="text-6xl font-black text-white mb-6 leading-tight">Informe de<br/>Tasación Comercial</h1>
            <p className="text-2xl text-slate-300 font-medium mb-2">Av Pampa Union 3283, Sector Sur</p>
            <p className="text-lg text-slate-400">Iquique, Región de Tarapacá</p>
          </div>

          <div className="flex justify-between items-end border-t border-white/20 pt-8 mt-auto">
            <div>
              <p className="text-slate-400 text-sm mb-1">Fecha de Emisión</p>
              <p className="text-white font-medium">28 de Mayo, 2026</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm mb-1">Código de Verificación</p>
              <p className="text-white font-medium">VAL-88992146918</p>
            </div>
          </div>
        </div>
      </div>

      {/* RESUMEN Y VALORES (Página 2) */}
      <div className="page-break h-[297mm] p-16 flex flex-col bg-white">
        <div className="border-b-4 border-primary pb-4 mb-8">
          <h2 className="text-3xl font-black text-slate-900">Estimación de Valor</h2>
          <p className="text-slate-500 mt-1">Valores calculados mediante Algoritmo de IA y Análisis Comparativo de Mercado.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Precio Recomendado (Venta)</p>
            <p className="text-5xl font-black text-primary mb-2">3.174 UF</p>
            <p className="text-xl text-slate-600 font-medium">$ 120.362.127 CLP</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Precio Sugerido (Arriendo)</p>
            <p className="text-5xl font-black text-slate-900 mb-2">17,5 UF</p>
            <p className="text-xl text-slate-600 font-medium">$ 665.101 CLP</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="border-l-4 border-slate-200 pl-4">
            <p className="text-sm text-slate-500 mb-1">Valor UF / m²</p>
            <p className="text-2xl font-bold text-slate-900">26,0 UF</p>
          </div>
          <div className="border-l-4 border-emerald-400 pl-4">
            <p className="text-sm text-slate-500 mb-1">Cap Rate Estimado</p>
            <p className="text-2xl font-bold text-emerald-600">6,63%</p>
          </div>
          <div className="border-l-4 border-slate-200 pl-4">
            <p className="text-sm text-slate-500 mb-1">Ingresos Anuales (Arriendo)</p>
            <p className="text-2xl font-bold text-slate-900">210,2 UF</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-6 mt-4">Ajuste por Estado de Conservación</h3>
        <div className="mb-8">
          <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
            <span>Mínimo (Reg.)</span>
            <span>Promedio (Bueno)</span>
            <span>Máximo (Exc.)</span>
          </div>
          <div className="relative h-4 bg-slate-100 rounded-full mb-4">
            <div className="absolute left-0 w-1/3 h-full bg-slate-300 rounded-l-full"></div>
            <div className="absolute left-1/3 w-1/3 h-full bg-primary"></div>
            <div className="absolute left-2/3 w-1/3 h-full bg-emerald-400 rounded-r-full"></div>
            {/* Indicador de tasación */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-slate-900 rounded-full shadow-lg"></div>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-900">
            <span>2.270 UF</span>
            <span className="text-primary">3.174 UF</span>
            <span>3.531 UF</span>
          </div>
        </div>
        
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-auto">
          <h4 className="font-bold text-emerald-800 mb-2">Análisis de Inteligencia Artificial Visual</h4>
          <p className="text-sm text-emerald-700 leading-relaxed">
            La propiedad presenta terminaciones modernas, pisos de porcelanato en excelente estado y cocina equipada de alto estándar. Se aplicó un multiplicador positivo de +15% sobre el valor base de la comuna, acercando la tasación al rango máximo de mercado para su año de construcción.
          </p>
        </div>
      </div>

      {/* GRÁFICOS (Página 3) */}
      <div className="page-break h-[297mm] p-16 flex flex-col bg-white">
        <div className="border-b-4 border-slate-900 pb-4 mb-8">
          <h2 className="text-3xl font-black text-slate-900">Análisis de Mercado local</h2>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Plusvalía Histórica</h3>
              <p className="text-slate-500 text-sm">Evolución del precio por m² (UF) en los últimos 2 años</p>
            </div>
            <div className="bg-primary text-white px-4 py-2 rounded-xl">
              <p className="text-xs uppercase opacity-80">Crecimiento Anual</p>
              <p className="text-xl font-bold">+4,62%</p>
            </div>
          </div>
          <PlusvaliaChart />
        </div>

        <div className="mb-8 mt-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Tiempo Esperado de Colocación (Venta)</h3>
              <p className="text-slate-500 text-sm">Días estimados en el mercado según precio de publicación</p>
            </div>
            <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-xl">
              <p className="text-xs uppercase opacity-80">Tiempo Promedio</p>
              <p className="text-xl font-bold">144 Días</p>
            </div>
          </div>
          <TiempoColocacionChart />
        </div>
      </div>

      {/* TESTIGOS (Página 4) */}
      <div className="page-break h-[297mm] p-16 flex flex-col bg-white">
        <div className="border-b-4 border-slate-900 pb-4 mb-8">
          <h2 className="text-3xl font-black text-slate-900">Propiedades Testigo (Scraping)</h2>
          <p className="text-slate-500 mt-1">Oferta actual competitiva recolectada en tiempo real de portales inmobiliarios.</p>
        </div>

        <table className="w-full text-left border-collapse text-sm mb-12">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-3 font-bold text-slate-700">Portal</th>
              <th className="py-3 font-bold text-slate-700">Características</th>
              <th className="py-3 font-bold text-slate-700">m²</th>
              <th className="py-3 font-bold text-slate-700">Precio (UF)</th>
              <th className="py-3 font-bold text-slate-700">UF / m²</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">PortalInmobiliario</span></td>
              <td className="py-4 text-slate-600">3 Dorm. / 2 Baños / 1 Estac.</td>
              <td className="py-4">85 m²</td>
              <td className="py-4 font-bold">3.560 UF</td>
              <td className="py-4 text-slate-500">41.8</td>
            </tr>
            <tr>
              <td className="py-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-bold">Yapo.cl</span></td>
              <td className="py-4 text-slate-600">3 Dorm. / 2 Baños / 0 Estac.</td>
              <td className="py-4">90 m²</td>
              <td className="py-4 font-bold">3.300 UF</td>
              <td className="py-4 text-slate-500">36.6</td>
            </tr>
            <tr>
              <td className="py-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">TocToc</span></td>
              <td className="py-4 text-slate-600">2 Dorm. / 2 Baños / 2 Estac.</td>
              <td className="py-4">88 m²</td>
              <td className="py-4 font-bold">3.500 UF</td>
              <td className="py-4 text-slate-500">39.7</td>
            </tr>
          </tbody>
        </table>

        <div className="border-b-4 border-slate-900 pb-4 mb-8 mt-12">
          <h2 className="text-3xl font-black text-slate-900">Transacciones CBR Efectivas</h2>
          <p className="text-slate-500 mt-1">Ventas reales inscritas en el Conservador de Bienes Raíces en los últimos 24 meses.</p>
        </div>

        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-3 font-bold text-slate-700">ROL</th>
              <th className="py-3 font-bold text-slate-700">Dirección</th>
              <th className="py-3 font-bold text-slate-700">Fecha CBR</th>
              <th className="py-3 font-bold text-slate-700">Precio (UF)</th>
              <th className="py-3 font-bold text-slate-700">UF / m²</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-4 font-medium">5218-23</td>
              <td className="py-4 text-slate-600">Tiliviche 3119</td>
              <td className="py-4 text-slate-500">Ago 2024</td>
              <td className="py-4 font-bold">3.363 UF</td>
              <td className="py-4 text-slate-500">27.5</td>
            </tr>
            <tr>
              <td className="py-4 font-medium">5425-29</td>
              <td className="py-4 text-slate-600">Pje Salit Valparaiso 3464</td>
              <td className="py-4 text-slate-500">Oct 2025</td>
              <td className="py-4 font-bold">3.879 UF</td>
              <td className="py-4 text-slate-500">22.4</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-auto pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          Generado automáticamente por Valoriza SaaS - {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
