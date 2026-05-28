import { DollarSign, Users, Activity } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Métricas de Negocio (SaaS)</h2>
        <p className="text-slate-400 mt-1">Aquí verás en tiempo real la salud financiera y el uso de tu plataforma.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-slate-300 font-medium">Ingresos Recurrentes (MRR)</h3>
          </div>
          <p className="text-3xl font-bold text-white">$0 CLP</p>
          <p className="text-xs text-slate-500 mt-2">Módulo B (Pasarelas de Pago) no conectado.</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-slate-300 font-medium">Usuarios Activos</h3>
          </div>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-xs text-slate-500 mt-2">Base de datos (PostgreSQL) pendiente.</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-slate-300 font-medium">Tasaciones Generadas</h3>
          </div>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-xs text-slate-500 mt-2">Historial global de uso.</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">
        <h3 className="text-lg font-bold text-white mb-4">¿Qué irá en este panel?</h3>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li><strong>Gráficos de Crecimiento:</strong> Evolución mensual de nuevos usuarios y cancelaciones (Churn Rate).</li>
          <li><strong>Planes de Suscripción:</strong> Herramienta para crear y editar los precios de los planes sin tocar el código.</li>
          <li><strong>Gestión de Cupones:</strong> Crear códigos de descuento promocionales para captar corredores.</li>
          <li><strong>Logs de Errores:</strong> Monitoreo de fallas en la IA visual o en el generador de PDF.</li>
        </ul>
      </div>
    </div>
  );
}
