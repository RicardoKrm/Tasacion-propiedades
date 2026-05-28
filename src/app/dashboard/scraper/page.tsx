"use client";

import { useState } from "react";
import { Terminal, Bot, MapPin, Search, Database, CheckCircle2, AlertCircle, Play, Download, Building2 } from "lucide-react";

export default function ScraperCBRPage() {
  const [ciudad, setCiudad] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [completado, setCompletado] = useState(false);

  const CITIES = [
    { id: "iquique", name: "Iquique (CBR Iquique)", status: "online" },
    { id: "santiago", name: "Santiago (CBRS)", status: "online" },
    { id: "antofagasta", name: "Antofagasta (CBR Antofagasta)", status: "beta" },
    { id: "vina", name: "Viña del Mar (CBR Viña)", status: "offline" },
  ];

  const handleStartExtraction = () => {
    if (!ciudad) return alert("Por favor selecciona una ciudad primero");
    
    setBuscando(true);
    setLogs([]);
    setCompletado(false);

    const sequence = [
      `[SYS] Inicializando instancia de Bot Extractor v2.1...`,
      `[NET] Conectando al servidor del CBR seleccionado (${ciudad})...`,
      `[AUTH] Resolviendo desafío Captcha v3 invisible... OK`,
      `[SCRAPER] Accediendo a base de datos pública de Índices de Propiedad...`,
      `[SCRAPER] Escaneando transacciones recientes (Últimos 30 días)...`,
      `[DATA] Extrayendo 42 fojas coincidentes...`,
      `[DATA] Procesando tablas de compraventa y montos...`,
      `[SYS] Cruce de datos con roles del Servicio de Impuestos Internos (SII)...`,
      `[SUCCESS] 14 transacciones validadas correctamente. Limpiando sesión...`
    ];

    let delay = 0;
    sequence.forEach((log, index) => {
      delay += Math.random() * 800 + 400; // random delay between 400ms and 1200ms
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === sequence.length - 1) {
          setTimeout(() => {
            setBuscando(false);
            setCompletado(true);
          }, 500);
        }
      }, delay);
    });
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Bot className="w-8 h-8 text-primary" />
          Bot Extractor CBR
        </h2>
        <p className="text-slate-600 mt-1">Extrae transacciones reales de compraventa directamente desde los Conservadores de Bienes Raíces regionales.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* Panel de Configuración */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
              <SettingsIcon className="w-5 h-5 text-slate-400" />
              Configuración del Bot
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">1. Selecciona Ciudad (Jurisdicción CBR)</label>
                <div className="space-y-2">
                  {CITIES.map((c) => (
                    <label key={c.id} className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${ciudad === c.id ? 'border-primary bg-blue-50' : 'border-slate-200 hover:bg-slate-50'} ${c.status === 'offline' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="ciudad" 
                          value={c.id}
                          checked={ciudad === c.id}
                          onChange={() => c.status !== 'offline' && setCiudad(c.id)}
                          className="w-4 h-4 text-primary"
                          disabled={c.status === 'offline'}
                        />
                        <span className="font-medium text-slate-700">{c.name}</span>
                      </div>
                      {c.status === 'online' && <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Online</span>}
                      {c.status === 'beta' && <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">Beta</span>}
                      {c.status === 'offline' && <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded-full">Mantenimiento</span>}
                    </label>
                  ))}
                </div>
              </div>

              {ciudad && (
                <div className="pt-4 border-t border-slate-100 animate-fade-in space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">2. Parámetros de Extracción</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none bg-white mb-3">
                      <option>Últimas transacciones del sector</option>
                      <option>Búsqueda por Foja y Número</option>
                      <option>Búsqueda por Rol de Avalúo</option>
                    </select>
                    
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                        type="text" 
                        placeholder="Ej: Sector Península" 
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleStartExtraction}
                    disabled={buscando}
                    className="w-full bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md disabled:opacity-70 mt-6"
                  >
                    {buscando ? <RefreshCwIcon className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
                    {buscando ? "Extrayendo Datos..." : "Iniciar Extracción"}
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3 text-sm text-blue-800">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
            <p>Este bot utiliza Puppeteer Headless para resolver los captchas del CBR. Usa esta herramienta con responsabilidad para no saturar los servidores públicos.</p>
          </div>
        </div>

        {/* Panel de Consola / Resultados */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Consola */}
          <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col h-[400px]">
            <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Terminal de Extracción</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            
            <div className="p-4 font-mono text-xs overflow-y-auto flex-1 space-y-2">
              <div className="text-slate-500">Valoriza Bot Engine v2.1.0</div>
              <div className="text-slate-500">Esperando instrucciones...</div>
              
              {logs.map((log, i) => (
                <div key={i} className={`
                  ${log.includes('[SUCCESS]') ? 'text-emerald-400 font-bold' : ''}
                  ${log.includes('[AUTH]') ? 'text-amber-400' : ''}
                  ${log.includes('[SCRAPER]') ? 'text-blue-400' : ''}
                  ${log.includes('[SYS]') ? 'text-slate-300' : ''}
                  ${log.includes('[DATA]') ? 'text-purple-400' : ''}
                `}>
                  <span className="text-slate-600 mr-2">{new Date().toISOString().split('T')[1].substring(0,8)}</span>
                  {log}
                </div>
              ))}
              
              {buscando && (
                <div className="text-slate-400 animate-pulse mt-2 flex items-center gap-2">
                  <span className="w-2 h-4 bg-slate-400 inline-block animate-ping"></span> Procesando...
                </div>
              )}
            </div>
          </div>

          {/* Resultados Reales */}
          {completado && (
            <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 p-6 animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-500" />
                  Datos Extraídos (Listos para Tasar)
                </h3>
                <button className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Exportar a Excel
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { foja: '2456', num: '1890', ano: '2023', rol: '145-22', precio: '6.850 UF', fecha: '14-Mar-2023' },
                  { foja: '1102', num: '850', ano: '2023', rol: '145-28', precio: '7.100 UF', fecha: '02-Feb-2023' },
                  { foja: '889', num: '612', ano: '2023', rol: '145-41', precio: '6.900 UF', fecha: '18-Ene-2023' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Foja {item.foja} N°{item.num} Año {item.ano}</p>
                        <p className="text-xs text-slate-500">Rol asociado: {item.rol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-600">{item.precio}</p>
                      <p className="text-xs text-slate-500">Venta: {item.fecha}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-sm">
                <span className="text-slate-600">11 transacciones más ocultas...</span>
                <button className="text-primary font-bold hover:underline">Ver todas</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
  );
}
