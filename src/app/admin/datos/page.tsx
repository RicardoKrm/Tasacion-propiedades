import { Database, FileText, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function AdminDatosPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white">Integración SII y Conservador (CBR)</h2>
          <p className="text-slate-400 mt-1">Monitorea el acceso a bases de datos oficiales para cruce de avalúos y roles.</p>
        </div>
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors border border-slate-600 text-sm font-medium">
          <RefreshCw className="w-4 h-4" />
          Probar Conexiones
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Panel SII */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Servicio de Impuestos Internos</h3>
                <p className="text-sm text-slate-400">Consulta de Roles y Avalúo Fiscal</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-medium border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3" />
              API Mock (Activa)
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Límite de consultas diarias (API)</span>
                <span className="text-white font-medium">0 / 10,000</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full w-[0%]"></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              En la Fase 2, aquí configuraremos el Web Scraping o API oficial para obtener automáticamente los metros cuadrados (útil/total) y el año de construcción digitando solo la dirección o el ROL de la propiedad.
            </p>
          </div>
        </div>

        {/* Panel CBR */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">CBR Santiago</h3>
                <p className="text-sm text-slate-400">Índice de Propiedades</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full font-medium border border-amber-500/20">
              <AlertCircle className="w-3 h-3" />
              Pendiente
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-center items-center text-center py-6">
              <AlertCircle className="w-8 h-8 text-slate-500 mb-2" />
              <p className="text-slate-400 text-sm">Requiere desarrollo de bot extractor</p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Este módulo extraerá el historial de compraventas para afinar la tasación comercial comparando precios reales de escrituración en el mismo sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
