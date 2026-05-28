"use client";

import { useState } from "react";
import { Camera, MapPin, Search, Calculator, ArrowRight, Download, CheckCircle2, Globe, Database, ExternalLink, Clock } from "lucide-react";
import { TiempoColocacionChart } from "@/components/charts/TiempoColocacionChart";
import { calcularTasacion, AtributosPropiedad, ResultadoTasacion } from "@/lib/algoritmo";
import { useStore } from "@/lib/store";

export default function TasacionPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [resultado, setResultado] = useState<ResultadoTasacion | null>(null);
  
  const agregarReporte = useStore((state) => state.agregarReporte);

  const [formData, setFormData] = useState<AtributosPropiedad>({
    direccion: "",
    tipo: "departamento",
    superficieUtil: 0,
    superficieTotal: 0,
    dormitorios: 0,
    banos: 0,
    estacionamientos: 0,
    anoConstruccion: new Date().getFullYear(),
    estado: "medio"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular tiempo de carga de procesamiento de IA y datos
    setTimeout(() => {
      const res = calcularTasacion(formData);
      setResultado(res);
      setStep(3);
      setLoading(false);
      
      // Guardar en el historial
      agregarReporte({
        atributos: formData,
        resultado: res
      });
    }, 2500);
  };

  const handleDownload = async () => {
    setDownloading(true);
    // Simulate API call
    setTimeout(() => {
      setDownloading(false);
      alert("¡Informe PDF descargado con éxito!");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Nueva Tasación Comercial</h2>

      {/* Progress Steps */}
      <div className="flex items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className={`flex-1 flex flex-col items-center ${step >= 1 ? 'text-primary' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-100'}`}>1</div>
          <span className="text-sm font-medium">Datos Básicos</span>
        </div>
        <div className={`w-12 h-1 bg-slate-100 rounded-full mx-2 overflow-hidden`}>
          <div className={`h-full bg-primary transition-all duration-500 ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className={`flex-1 flex flex-col items-center ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-100'}`}>2</div>
          <span className="text-sm font-medium">Fotos / IA</span>
        </div>
        <div className={`w-12 h-1 bg-slate-100 rounded-full mx-2 overflow-hidden`}>
          <div className={`h-full bg-primary transition-all duration-500 ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
        </div>
        <div className={`flex-1 flex flex-col items-center ${step >= 3 ? 'text-primary' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 ${step >= 3 ? 'bg-primary text-white' : 'bg-slate-100'}`}>3</div>
          <span className="text-sm font-medium">Resultados</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Dirección del Inmueble</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    value={formData.direccion}
                    onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                    placeholder="Ej: Av. Apoquindo 4500, Las Condes" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Propiedad</label>
                <select 
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value as any})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white"
                >
                  <option value="departamento">Departamento</option>
                  <option value="casa">Casa</option>
                  <option value="oficina">Oficina</option>
                  <option value="terreno">Terreno</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Año de Construcción</label>
                <input 
                  type="number" 
                  value={formData.anoConstruccion}
                  onChange={(e) => setFormData({...formData, anoConstruccion: Number(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none"
                />
              </div>
            </div>

            {step === 1 && (
            <div className="animate-fade-in space-y-8">
              <div className="flex gap-4 p-4 bg-blue-50 text-blue-800 rounded-xl">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold">Ubicación Confirmada</h3>
                  <p className="text-sm opacity-90">{formData.direccion}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <h4 className="font-bold text-slate-900">Modo Avanzado: Costo de Reposición</h4>
                    <p className="text-xs text-slate-500">Desglosar áreas construidas y terreno para tasación tradicional.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={isAdvancedMode} onChange={(e) => setIsAdvancedMode(e.target.checked)} />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {!isAdvancedMode ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Sup. Útil (m²)</label>
                      <input type="number" onChange={(e) => setFormData({...formData, superficieUtil: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Sup. Total (m²)</label>
                      <input type="number" onChange={(e) => setFormData({...formData, superficieTotal: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Dormitorios</label>
                      <input type="number" onChange={(e) => setFormData({...formData, dormitorios: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Baños</label>
                      <input type="number" onChange={(e) => setFormData({...formData, banos: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Terreno (m²)</label>
                        <input type="number" defaultValue={206} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Construcción Orig. (m²)</label>
                        <input type="number" defaultValue={174} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Ampliación (m²)</label>
                        <input type="number" defaultValue={61.5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Obras Comp. ($)</label>
                        <input type="number" defaultValue={1816000} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Dormitorios</label>
                        <input type="number" onChange={(e) => setFormData({...formData, dormitorios: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Baños</label>
                        <input type="number" onChange={(e) => setFormData({...formData, banos: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Estacionamientos</label>
                        <input type="number" onChange={(e) => setFormData({...formData, estacionamientos: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Año Construcción</label>
                        <input type="number" onChange={(e) => setFormData({...formData, anoConstruccion: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                      </div>
                    </div>
                  </div>
                )}

                {!isAdvancedMode && (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Estacionamientos</label>
                      <input type="number" onChange={(e) => setFormData({...formData, estacionamientos: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Año Construcción</label>
                      <input type="number" onChange={(e) => setFormData({...formData, anoConstruccion: Number(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <button onClick={() => setStep(2)} className="bg-primary text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
                Siguiente Paso
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 flex items-start gap-4 mb-6">
              <Camera className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900">Análisis con IA Visual</h4>
                <p className="text-slate-600 text-sm mt-1">Sube hasta 10 fotos del interior y exterior. Nuestra IA evaluará objetivamente el estado de conservación (terminaciones, cocina, baños) para ajustar el valor del inmueble automáticamente.</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:bg-slate-50 transition-colors cursor-pointer">
              <Camera className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="font-medium text-slate-900">Haz clic o arrastra las fotos aquí</p>
              <p className="text-sm text-slate-500 mt-1">JPG o PNG, máximo 5MB por imagen</p>
            </div>

            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl bg-slate-200 animate-pulse"></div>
              <div className="w-24 h-24 rounded-xl bg-slate-200 animate-pulse"></div>
              <div className="w-24 h-24 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">+</div>
            </div>

            <div className="pt-8 flex justify-between border-t border-slate-200">
              <button onClick={() => setStep(1)} className="text-slate-500 hover:text-slate-900 font-medium px-4 py-2 transition-colors">Volver</button>
              <button onClick={handleCalcular} disabled={loading} className="bg-primary text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md disabled:opacity-70">
                {loading ? "Analizando IA y datos CBR..." : "Calcular Tasación"}
                {loading ? null : <Calculator className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {step === 3 && resultado && (
          <div className="animate-fade-in">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center mb-8">
              <p className="text-emerald-800 font-medium mb-2">Valor Comercial Sugerido (Venta)</p>
              <h3 className="text-5xl font-bold text-slate-900">{resultado.valorVentaUF.toLocaleString('es-CL')} UF</h3>
              <p className="text-slate-600 mt-2">Aprox. ${(resultado.valorVentaUF * 37000).toLocaleString('es-CL')} CLP</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Rango Mínimo</p>
                <p className="text-lg font-bold text-slate-800">{resultado.rangoMinimoUF.toLocaleString('es-CL')} UF</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Rango Máximo</p>
                <p className="text-lg font-bold text-slate-800">{resultado.rangoMaximoUF.toLocaleString('es-CL')} UF</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Arriendo Estimado</p>
                <p className="text-lg font-bold text-slate-800">{resultado.valorArriendoUF.toLocaleString('es-CL')} UF/mes</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Rentabilidad (Cap Rate)</p>
                <p className="text-lg font-bold text-slate-800">{resultado.capRate}% anual</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-purple-600" />
                  Resultado Análisis IA Visual
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm">Estado General</span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Excelente (92/100)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 italic">"La propiedad presenta terminaciones modernas, pisos de porcelanato en excelente estado y cocina equipada de alto estándar. Se aplicó un multiplicador positivo de +15% sobre el valor base de la comuna."</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Cruce de Datos SII / CBR
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-slate-500 text-sm">ROL de Avalúo (Auto-detectado)</span>
                    <span className="font-medium text-slate-900">1452-33</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-slate-500 text-sm">Avalúo Fiscal (SII)</span>
                    <span className="font-medium text-slate-900">$145.230.000 CLP</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-50">
                    <span className="text-slate-500 text-sm">Última Venta Registrada (CBR)</span>
                    <span className="font-medium text-slate-900">6.850 UF (Marzo 2023)</span>
                  </div>
                  <p className="text-xs text-blue-600 bg-blue-50 p-2 rounded-lg mt-2">
                    ✓ Datos oficiales validados automáticamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Gráfico Tiempo Colocación */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    Tiempo Esperado de Colocación (Venta)
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">Estimación de días en mercado según el precio de publicación.</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">144 días</p>
                  <p className="text-xs text-slate-500">al precio recomendado</p>
                </div>
              </div>
              <TiempoColocacionChart />
              <p className="text-xs text-slate-500 text-center mt-4">
                Si la propiedad se publica al precio sugerido de 3.174 UF, el tiempo estimado de venta es de 144 días. Un sobreprecio aumentará exponencialmente el tiempo de vacancia.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Análisis de Mercado: Propiedades Testigo (Scraping)
              </h4>
              <p className="text-sm text-slate-500 mb-4">El algoritmo encontró 14 propiedades similares publicadas hoy en tu sector. Aquí están los 3 competidores más directos:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-100">
                      <th className="p-3 text-xs font-semibold text-slate-500 uppercase">Origen</th>
                      <th className="p-3 text-xs font-semibold text-slate-500 uppercase">Características</th>
                      <th className="p-3 text-xs font-semibold text-slate-500 uppercase">Precio Pub.</th>
                      <th className="p-3 text-xs font-semibold text-slate-500 uppercase">UF / m²</th>
                      <th className="p-3 text-xs font-semibold text-slate-500 uppercase">Ver</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">PortalInmobiliario</span>
                      </td>
                      <td className="p-3 text-sm text-slate-700">Depto mismo edificio (Piso 4)</td>
                      <td className="p-3 font-semibold text-slate-900">7.300 UF</td>
                      <td className="p-3 text-sm text-slate-600">85.8 UF/m²</td>
                      <td className="p-3"><ExternalLink className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary" /></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">PortalInmobiliario</span>
                      </td>
                      <td className="p-3 text-sm text-slate-700">Depto a 2 cuadras (Más antiguo)</td>
                      <td className="p-3 font-semibold text-slate-900">6.950 UF</td>
                      <td className="p-3 text-sm text-slate-600">81.7 UF/m²</td>
                      <td className="p-3"><ExternalLink className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary" /></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">Yapo.cl</span>
                      </td>
                      <td className="p-3 text-sm text-slate-700">Depto a 1 cuadra (Remodelado)</td>
                      <td className="p-3 font-semibold text-slate-900">7.450 UF</td>
                      <td className="p-3 text-sm text-slate-600">87.6 UF/m²</td>
                      <td className="p-3"><ExternalLink className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button onClick={() => { setStep(1); setResultado(null); }} className="px-6 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-all border border-slate-200">
                Nueva Consulta
              </button>
              <a 
                href="/reporte/demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                Generar Informe PDF (Demo A4)
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
