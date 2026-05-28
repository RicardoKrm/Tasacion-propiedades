import { Search, MoreVertical, UserX, Key } from "lucide-react";

export default function AdminUsuariosPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Gestión de Usuarios</h2>
          <p className="text-slate-400 mt-1">Administra los corredores y empresas registradas en Valoriza.</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 flex items-center px-4 py-2 rounded-xl">
          <Search className="w-4 h-4 text-slate-500 mr-2" />
          <input type="text" placeholder="Buscar email o nombre..." className="bg-transparent border-none outline-none text-white text-sm" />
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-700">
              <th className="p-4 text-sm font-semibold text-slate-400">Usuario</th>
              <th className="p-4 text-sm font-semibold text-slate-400">Plan Actual</th>
              <th className="p-4 text-sm font-semibold text-slate-400">Estado</th>
              <th className="p-4 text-sm font-semibold text-slate-400">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            <tr>
              <td colSpan={4} className="p-12 text-center text-slate-500">
                <p className="mb-2 text-lg">La tabla de usuarios está vacía en este momento.</p>
                <p className="text-sm">En la Fase 2, esta tabla se conectará a PostgreSQL y NextAuth para mostrar los corredores reales.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-slate-800/50 rounded-2xl border border-slate-700 border-dashed p-6">
        <h3 className="text-emerald-400 font-bold mb-2">Funcionalidades Pendientes de este panel:</h3>
        <ul className="list-disc list-inside text-slate-400 text-sm space-y-2">
          <li><strong>Bloqueo de cuentas:</strong> Capacidad de suspender usuarios por falta de pago o mal uso.</li>
          <li><strong>Reset de Password:</strong> Enviar links de recuperación o forzar cambio de clave.</li>
          <li><strong>Upselling manual:</strong> Cambiar el plan de un corredor a "Profesional" o "Empresa" desde el backend sin pasar por la pasarela de pago.</li>
          <li><strong>Vista "Impersonate":</strong> Entrar a la cuenta de un corredor para darle soporte técnico y ver lo mismo que él ve.</li>
        </ul>
      </div>
    </div>
  );
}
