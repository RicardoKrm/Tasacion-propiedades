import { Globe, Database, AlertTriangle, RefreshCcw } from "lucide-react";

export default function AdminScraperPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white">Monitoreo del Scraper (Python)</h2>
          <p className="text-slate-400 mt-1">Supervisa los bots de extracción que alimentan el algoritmo de tasación.</p>
        </div>
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors border border-slate-600 text-sm font-medium">
          <RefreshCcw className="w-4 h-4" />
          Forzar Extracción
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-600 animate-pulse"></div>
                <h3 className="text-white font-bold">Portal Inmobiliario Bot</h3>
              </div>
              <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded-full font-medium">Offline</span>
            </div>
            <p className="text-sm text-slate-400">Estado de extracción diaria de departamentos y casas en Región Metropolitana.</p>
          </div>
          <div className="mt-6 border-t border-slate-700 pt-4 flex justify-between text-sm">
            <span className="text-slate-500">Última ejecución: --</span>
            <span className="text-slate-500">Propiedades: 0</span>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-600 animate-pulse"></div>
                <h3 className="text-white font-bold">Yapo / TocToc Bot</h3>
              </div>
              <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded-full font-medium">Offline</span>
            </div>
            <p className="text-sm text-slate-400">Estado de extracción de datos complementarios de arriendo y venta.</p>
          </div>
          <div className="mt-6 border-t border-slate-700 pt-4 flex justify-between text-sm">
            <span className="text-slate-500">Última ejecución: --</span>
            <span className="text-slate-500">Propiedades: 0</span>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
        <div>
          <h3 className="text-amber-500 font-bold mb-1">Módulo Pendiente de Construcción</h3>
          <p className="text-slate-400 text-sm mb-4">
            Este panel controlará los microservicios en Python. En la Fase 2, necesitaremos instalar y configurar:
          </p>
          <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
            <li><strong>Playwright o Scrapy:</strong> Para navegar por los portales dinámicamente y evadir los Captchas.</li>
            <li><strong>Sistema de Proxies:</strong> Para rotar direcciones IP y evitar que el bot de Valoriza sea baneado de los portales de la competencia.</li>
            <li><strong>Base de datos Vectorial o Documental:</strong> Para almacenar miles de propiedades diariamente y calcular el precio de metro cuadrado (m²) dinámico por comuna en tiempo real.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
