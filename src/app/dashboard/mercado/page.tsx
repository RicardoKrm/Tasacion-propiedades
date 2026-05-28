"use client";

import { useState } from "react";
import { Search, MapPin, Filter, Building2, ExternalLink, X, Car, Box, BedDouble, Bath, Image as ImageIcon, TrendingUp } from "lucide-react";
import { PlusvaliaChart } from "@/components/charts/PlusvaliaChart";

const MOCK_PROPERTIES = [
  {
    id: 1,
    portal: "PortalInmobiliario",
    title: "Depto Sector Sur, Iquique (Frente Playa)",
    m2: 85,
    uf: 6300,
    ufm2: 74.1,
    dorms: 3,
    banos: 2,
    estac: 1,
    bodega: 1,
    descripcion: "Espectacular departamento en primera línea, piso 12 con vista panorámica. Terminaciones de primer nivel, piso de porcelanato, ventanas termopanel. Edificio cuenta con piscina, gimnasio y quinchos.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 2,
    portal: "Yapo.cl",
    title: "Oportunidad Depto 3D 2B Iquique Sur",
    m2: 90,
    uf: 6100,
    ufm2: 67.7,
    dorms: 3,
    banos: 2,
    estac: 1,
    bodega: 0,
    descripcion: "Excelente oportunidad de inversión. Departamento amplio y luminoso, cercano a supermercados y colegios. Cocina tradicional cerrada, logia separada. Gastos comunes bajos.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 3,
    portal: "TocToc",
    title: "Depto nuevo sector Península",
    m2: 88,
    uf: 6350,
    ufm2: 72.1,
    dorms: 2,
    banos: 2,
    estac: 2,
    bodega: 1,
    descripcion: "Departamento semi-nuevo en exclusivo sector Península. 2 Dormitorios en suite, amplia terraza cerrada con vista directa al mar. Incluye 2 estacionamientos subterráneos.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1e5240980c?w=800&q=80",
    color: "bg-blue-100 text-blue-800"
  }
];

export default function MercadoPage() {
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedProp, setSelectedProp] = useState<typeof MOCK_PROPERTIES[0] | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in relative">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Estudio de Mercado (Scraping en Vivo)</h2>
        <p className="text-slate-600 mt-1">Busca y compara propiedades activas en los principales portales para analizar la competencia.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ubicación o Sector</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Ej: Sector Península, Iquique..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  defaultValue="Iquique, Sector Sur"
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tipo de Propiedad</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white transition-all appearance-none cursor-pointer">
                  <option>Departamento</option>
                  <option>Casa</option>
                  <option>Oficina</option>
                </select>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Dormitorios</label>
              <div className="relative">
                <BedDouble className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input type="number" defaultValue={3} min={1} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Baños</label>
              <div className="relative">
                <Bath className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input type="number" defaultValue={2} min={1} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" />
              </div>
            </div>

            {/* Nueva Fila: Extras */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estacionam.</label>
              <div className="relative">
                <Car className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input type="number" defaultValue={1} min={0} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bodegas</label>
              <div className="relative">
                <Box className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                <input type="number" defaultValue={1} min={0} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="md:col-span-8 flex items-end pb-1 gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-1 checked:bg-primary checked:border-primary transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">GG.CC Incluidos</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-1 checked:bg-primary checked:border-primary transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Gimnasio</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-1 checked:bg-primary checked:border-primary transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Piscina</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-1 checked:bg-primary checked:border-primary transition-all" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Conserjería 24/7</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button type="submit" disabled={searching} className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md disabled:opacity-70 w-full md:w-auto">
              {searching ? <RefreshCwIcon className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {searching ? "Analizando el mercado..." : "Buscar y Analizar Mercado"}
            </button>
          </div>
        </form>
      </div>

      {showResults && (
        <div className="animate-fade-in space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Oferta Activa (Competencia Directa)
              </h3>
              <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                <Filter className="w-4 h-4" /> 42 Encontradas
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-white">
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Portal</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Título de Publicación</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center" title="Dormitorios">D</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center" title="Baños">B</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center" title="Estacionamientos">E</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center" title="Bodegas">Bo</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase">m²</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Precio UF</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase">UF/m²</th>
                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {MOCK_PROPERTIES.map((prop) => (
                    <tr key={prop.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setSelectedProp(prop)}>
                      <td className="p-4"><span className={`text-xs px-2 py-1 rounded font-bold ${prop.color}`}>{prop.portal}</span></td>
                      <td className="p-4 font-medium text-slate-900 text-sm max-w-[200px] truncate">{prop.title}</td>
                      <td className="p-4 text-center text-sm font-medium text-slate-700">{prop.dorms}</td>
                      <td className="p-4 text-center text-sm font-medium text-slate-700">{prop.banos}</td>
                      <td className="p-4 text-center text-sm font-medium text-slate-700">{prop.estac}</td>
                      <td className="p-4 text-center text-sm font-medium text-slate-700">{prop.bodega}</td>
                      <td className="p-4 text-sm text-slate-600">{prop.m2}</td>
                      <td className="p-4 font-bold text-slate-900">{prop.uf.toLocaleString('es-CL')}</td>
                      <td className="p-4 text-sm font-medium text-emerald-600">{prop.ufm2}</td>
                      <td className="p-4 text-center"><button className="text-primary hover:bg-blue-50 p-2 rounded-lg transition-colors"><ExternalLink className="w-4 h-4" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Detalle */}
      {selectedProp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-100">
            <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${selectedProp.color}`}>{selectedProp.portal}</span>
                <h3 className="font-bold text-slate-900">Detalle de Publicación</h3>
              </div>
              <button onClick={() => setSelectedProp(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="w-full h-64 bg-slate-200 rounded-2xl mb-6 overflow-hidden relative border border-slate-100">
                <img src={selectedProp.img} alt="Propiedad" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                  <ImageIcon className="w-3 h-3" /> 12 Fotos
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{selectedProp.title}</h2>
                  <p className="text-slate-500 flex items-center gap-1"><MapPin className="w-4 h-4" /> Sector Sur, Iquique</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-slate-900">{selectedProp.uf.toLocaleString('es-CL')} UF</p>
                  <p className="text-emerald-600 font-medium">{selectedProp.ufm2} UF/m²</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 py-6 border-y border-slate-100 mb-6">
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
                  <BedDouble className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-bold text-slate-900">{selectedProp.dorms}</span>
                  <span className="text-xs text-slate-500">Dorms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
                  <Bath className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-bold text-slate-900">{selectedProp.banos}</span>
                  <span className="text-xs text-slate-500">Baños</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
                  <Car className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-bold text-slate-900">{selectedProp.estac}</span>
                  <span className="text-xs text-slate-500">Estac.</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
                  <Box className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-bold text-slate-900">{selectedProp.bodega}</span>
                  <span className="text-xs text-slate-500">Bodega</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl">
                  <Building2 className="w-6 h-6 text-slate-400 mb-2" />
                  <span className="font-bold text-slate-900">{selectedProp.m2}</span>
                  <span className="text-xs text-slate-500">m² Útil</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Descripción extraída</h4>
                <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedProp.descripcion}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors">
                  Ir a publicación original <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
