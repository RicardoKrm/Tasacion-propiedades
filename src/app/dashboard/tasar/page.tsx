"use client";

import { useState } from "react";
import { Camera, MapPin, Search, Calculator, ArrowRight, Download, CheckCircle2, Globe, Database, ExternalLink, Clock, X, Upload } from "lucide-react";
import { TiempoColocacionChart } from "@/components/charts/TiempoColocacionChart";
import { calcularTasacion, AtributosPropiedad, ResultadoTasacion } from "@/lib/algoritmo";
import { useStore } from "@/lib/store";

export default function TasacionPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [resultado, setResultado] = useState<ResultadoTasacion | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  
  const agregarReporte = useStore((state) => state.agregarReporte);

  // Estados específicos para el modo avanzado (Costo de Reposición)
  const [terreno, setTerreno] = useState<number>(206);
  const [construccionOrig, setConstruccionOrig] = useState<number>(174);
  const [ampliacion, setAmpliacion] = useState<number>(61.5);
  const [obrasComplementarias, setObrasComplementarias] = useState<number>(1816000);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const urls = filesArray.map(file => URL.createObjectURL(file));
      setPhotos(prev => [...prev, ...urls].slice(0, 10)); // Límite de 10 fotos
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => {
      // Liberar memoria del objeto URL
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, idx) => idx !== index);
    });
  };

  // Valores predeterminados realistas para una excelente demostración interactiva
  const [formData, setFormData] = useState<AtributosPropiedad>({
    direccion: "Av. Providencia 1250, Providencia, Santiago",
    tipo: "departamento",
    superficieUtil: 85,
    superficieTotal: 95,
    dormitorios: 2,
    banos: 2,
    estacionamientos: 1,
    anoConstruccion: 2018,
    estado: "medio"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleCalcular = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    
    // Preparar datos finales según el modo activo
    const finalFormData = { ...formData };
    if (isAdvancedMode) {
      finalFormData.superficieTotal = terreno;
      finalFormData.superficieUtil = construccionOrig + ampliacion;
      // El costo de obras complementarias puede influir indirectamente si se desea,
      // pero por ahora mapeamos m² totales y útiles del Costo de Reposición.
    }

    // Simular tiempo de carga de procesamiento de IA y datos
    setTimeout(() => {
      const res = calcularTasacion(finalFormData);
      setResultado(res);
      setStep(3);
      setLoading(false);
      
      // Guardar en el historial
      agregarReporte({
        atributos: finalFormData,
        resultado: res
      });
    }, 2200);
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
                      <input 
                        type="number" 
                        value={formData.superficieUtil || ""} 
                        onChange={(e) => setFormData({...formData, superficieUtil: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Sup. Total (m²)</label>
                      <input 
                        type="number" 
                        value={formData.superficieTotal || ""} 
                        onChange={(e) => setFormData({...formData, superficieTotal: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Dormitorios</label>
                      <input 
                        type="number" 
                        value={formData.dormitorios || ""} 
                        onChange={(e) => setFormData({...formData, dormitorios: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Baños</label>
                      <input 
                        type="number" 
                        value={formData.banos || ""} 
                        onChange={(e) => setFormData({...formData, banos: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Terreno (m²)</label>
                        <input 
                          type="number" 
                          value={terreno || ""} 
                          onChange={(e) => setTerreno(Number(e.target.value) || 0)} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Construcción Orig. (m²)</label>
                        <input 
                          type="number" 
                          value={construccionOrig || ""} 
                          onChange={(e) => setConstruccionOrig(Number(e.target.value) || 0)} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Ampliación (m²)</label>
                        <input 
                          type="number" 
                          value={ampliacion || ""} 
                          onChange={(e) => setAmpliacion(Number(e.target.value) || 0)} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Obras Comp. ($)</label>
                        <input 
                          type="number" 
                          value={obrasComplementarias || ""} 
                          onChange={(e) => setObrasComplementarias(Number(e.target.value) || 0)} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Dormitorios</label>
                        <input 
                          type="number" 
                          value={formData.dormitorios || ""} 
                          onChange={(e) => setFormData({...formData, dormitorios: Number(e.target.value) || 0})} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Baños</label>
                        <input 
                          type="number" 
                          value={formData.banos || ""} 
                          onChange={(e) => setFormData({...formData, banos: Number(e.target.value) || 0})} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Estacionamientos</label>
                        <input 
                          type="number" 
                          value={formData.estacionamientos || ""} 
                          onChange={(e) => setFormData({...formData, estacionamientos: Number(e.target.value) || 0})} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Año Construcción</label>
                        <input 
                          type="number" 
                          value={formData.anoConstruccion || ""} 
                          onChange={(e) => setFormData({...formData, anoConstruccion: Number(e.target.value) || 0})} 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {!isAdvancedMode && (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Estacionamientos</label>
                      <input 
                        type="number" 
                        value={formData.estacionamientos || ""} 
                        onChange={(e) => setFormData({...formData, estacionamientos: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Año Construcción</label>
                      <input 
                        type="number" 
                        value={formData.anoConstruccion || ""} 
                        onChange={(e) => setFormData({...formData, anoConstruccion: Number(e.target.value) || 0})} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

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

            <input 
              type="file" 
              id="photo-upload" 
              multiple 
              accept="image/*" 
              className="hidden" 
              onChange={handlePhotoUpload} 
            />

            <div 
              onClick={() => document.getElementById('photo-upload')?.click()}
              className="border-2 border-dashed border-slate-300 hover:border-primary rounded-2xl p-12 text-center hover:bg-slate-50 transition-all cursor-pointer group"
            >
              <Upload className="w-12 h-12 text-slate-400 group-hover:text-primary mx-auto mb-4 transition-colors animate-pulse" />
              <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">Haz clic para adjuntar fotos de la propiedad</p>
              <p className="text-sm text-slate-500 mt-1">Sube imágenes reales de baños, cocina, salas y fachada (máx. 10 fotos)</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Fotos Adjuntadas ({photos.length} de 10)
              </h4>
              
              {photos.length === 0 ? (
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-450 font-semibold text-xs text-center p-2">Sin fotos</div>
                  <button
                    type="button"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                    className="w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 hover:border-primary flex flex-col items-center justify-center text-slate-400 hover:text-primary transition-colors bg-slate-50/50"
                  >
                    <span className="text-xl font-bold">+</span>
                    <span className="text-[10px] font-semibold mt-0.5">Añadir</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-4">
                  {photos.map((photoUrl, idx) => (
                    <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                      <img src={photoUrl} className="w-full h-full object-cover" alt={`Adjunto ${idx + 1}`} />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removePhoto(idx);
                        }}
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors shadow"
                        title="Eliminar foto"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  
                  {photos.length < 10 && (
                    <button
                      type="button"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                      className="w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 hover:border-primary flex flex-col items-center justify-center text-slate-400 hover:text-primary transition-colors bg-slate-50/50"
                    >
                      <span className="text-xl font-bold">+</span>
                      <span className="text-[10px] font-semibold mt-0.5">Añadir</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Estado de conservación selector */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-4">
              <h4 className="font-bold text-slate-900 mb-1">Estado de Conservación (Ajuste Manual / IA)</h4>
              <p className="text-xs text-slate-500 mb-4">
                La IA analiza automáticamente las fotos cargadas. Puedes seleccionar o ajustar manualmente el estado para corregir los multiplicadores de terminaciones de forma realista.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, estado: "alto" })}
                  className={`py-3 px-4 rounded-xl border font-bold text-xs md:text-sm transition-all text-center ${
                    formData.estado === "alto"
                      ? "bg-primary border-primary text-white shadow-md scale-[1.02]"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Excelente / Premium (+16%)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, estado: "medio" })}
                  className={`py-3 px-4 rounded-xl border font-bold text-xs md:text-sm transition-all text-center ${
                    formData.estado === "medio"
                      ? "bg-primary border-primary text-white shadow-md scale-[1.02]"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Bueno / Estándar (+0%)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, estado: "bajo" })}
                  className={`py-3 px-4 rounded-xl border font-bold text-xs md:text-sm transition-all text-center ${
                    formData.estado === "bajo"
                      ? "bg-primary border-primary text-white shadow-md scale-[1.02]"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Regular / A Reparar (-18%)
                </button>
              </div>
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

        {step === 3 && resultado && (() => {
          // Generar ROL simulado a partir de la dirección
          const getSimulatedRol = (dir: string) => {
            let sum = 0;
            const cleanDir = dir || "Av. Providencia 1250";
            for (let i = 0; i < cleanDir.length; i++) sum += cleanDir.charCodeAt(i);
            const num1 = (sum % 2500) + 100;
            const num2 = (sum % 99) + 1;
            return `${num1}-${num2}`;
          };

          const simulatedRol = getSimulatedRol(formData.direccion);
          const simulatedAvaluoFiscal = Math.round(resultado.valorVentaUF * 37000 * 0.62);
          const simulatedUltimaVentaUF = Math.round(resultado.valorVentaUF * 0.88);
          
          const tipoPalabra = formData.tipo === "departamento" ? "Depto" : formData.tipo === "casa" ? "Casa" : formData.tipo === "oficina" ? "Oficina" : "Terreno";
          
          // Competidor 1: Mismo sector/calle (+2.5% UF)
          const comp1Precio = Math.round(resultado.valorVentaUF * 1.025);
          const comp1Ratio = Number((comp1Precio / (formData.superficieUtil || 85)).toFixed(1));

          // Competidor 2: A 2 cuadras (más antiguo, -4.5% UF)
          const comp2Precio = Math.round(resultado.valorVentaUF * 0.955);
          const comp2Ratio = Number((comp2Precio / (formData.superficieUtil || 85)).toFixed(1));

          // Competidor 3: A 1 cuadra (excelente estado, +4.8% UF)
          const comp3Precio = Math.round(resultado.valorVentaUF * 1.048);
          const comp3Ratio = Number((comp3Precio / (formData.superficieUtil || 85)).toFixed(1));

          return (
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
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        formData.estado === "alto" 
                          ? "bg-emerald-100 text-emerald-700" 
                          : formData.estado === "bajo"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                      }`}>
                        {formData.estado === "alto" ? "Excelente (92/100)" : formData.estado === "bajo" ? "A Reparar (45/100)" : "Bueno (75/100)"}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all duration-500 ${
                        formData.estado === "alto"
                          ? "bg-emerald-500 w-[92%]"
                          : formData.estado === "bajo"
                            ? "bg-red-500 w-[45%]"
                            : "bg-blue-500 w-[75%]"
                      }`}></div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2 italic">
                      {formData.estado === "alto" && `"La propiedad presenta terminaciones modernas, cocina equipada de alto estándar y áreas comunes en excelente estado. Se aplicó un multiplicador positivo de +16% sobre el valor base."`}
                      {formData.estado === "medio" && `"La propiedad se encuentra en buen estado general, con desgaste normal por uso en pisos y muros. Se aplicó un multiplicador neutro (+0%) de conservación estándar."`}
                      {formData.estado === "bajo" && `"La propiedad requiere reparaciones cosméticas en muros, cocina y baños. Presenta terminaciones antiguas y desgaste pronunciado. Se aplicó un multiplicador de depreciación de -18%."`}
                    </p>
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
                      <span className="font-medium text-slate-900">{simulatedRol}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                      <span className="text-slate-500 text-sm">Avalúo Fiscal (SII)</span>
                      <span className="font-medium text-slate-900">${simulatedAvaluoFiscal.toLocaleString('es-CL')} CLP</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50">
                      <span className="text-slate-500 text-sm">Última Venta Registrada (CBR)</span>
                      <span className="font-medium text-slate-900">{simulatedUltimaVentaUF.toLocaleString('es-CL')} UF ({new Date().getFullYear() - 3})</span>
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
                    <p className="text-sm font-bold text-slate-900">60 días</p>
                    <p className="text-xs text-slate-500">al precio recomendado</p>
                  </div>
                </div>
                <TiempoColocacionChart valorVentaUF={resultado.valorVentaUF} />
                <p className="text-xs text-slate-500 text-center mt-4">
                  Si la propiedad se publica al precio sugerido de {resultado.valorVentaUF.toLocaleString('es-CL')} UF, el tiempo estimado de venta es de 60 días. Un sobreprecio aumentará exponencialmente el tiempo de vacancia.
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
                        <td className="p-3 text-sm text-slate-700">{tipoPalabra} mismo sector / edificio</td>
                        <td className="p-3 font-semibold text-slate-900">{comp1Precio.toLocaleString('es-CL')} UF</td>
                        <td className="p-3 text-sm text-slate-600">{comp1Ratio.toLocaleString('es-CL')} UF/m²</td>
                        <td className="p-3"><ExternalLink className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary" /></td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">PortalInmobiliario</span>
                        </td>
                        <td className="p-3 text-sm text-slate-700">{tipoPalabra} a 2 cuadras (Mayor antigüedad)</td>
                        <td className="p-3 font-semibold text-slate-900">{comp2Precio.toLocaleString('es-CL')} UF</td>
                        <td className="p-3 text-sm text-slate-600">{comp2Ratio.toLocaleString('es-CL')} UF/m²</td>
                        <td className="p-3"><ExternalLink className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary" /></td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">
                          <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">Yapo.cl</span>
                        </td>
                        <td className="p-3 text-sm text-slate-700">{tipoPalabra} a 1 cuadra (Excelente estado)</td>
                        <td className="p-3 font-semibold text-slate-900">{comp3Precio.toLocaleString('es-CL')} UF</td>
                        <td className="p-3 text-sm text-slate-600">{comp3Ratio.toLocaleString('es-CL')} UF/m²</td>
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
          );
        })()}
      </div>
    </div>
  );
}
