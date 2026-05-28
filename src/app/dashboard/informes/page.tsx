"use client";

import { useStore } from "@/lib/store";
import { FileText, Download, Trash2, AlertCircle } from "lucide-react";

export default function InformesPage() {
  const { reportes, eliminarReporte } = useStore();

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Mis Informes de Tasación</h2>
        <p className="text-slate-600 mt-1">Historial completo de todas las valorizaciones que has realizado.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {reportes.length === 0 ? (
          <div className="p-12 text-center">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Aún no tienes informes</h3>
            <p className="text-slate-500 max-w-md mx-auto">Cuando realices una tasación, el informe en PDF y los datos de la propiedad aparecerán guardados aquí.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 text-sm font-semibold text-slate-600">Fecha</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Dirección</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Tipo</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Valor Estimado</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reportes.map((reporte) => (
                <tr key={reporte.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm text-slate-500">
                    {new Date(reporte.fecha).toLocaleDateString('es-CL', {
                      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-slate-900">{reporte.atributos.direccion || "Sin dirección"}</p>
                    <p className="text-xs text-slate-500 capitalize">{reporte.atributos.estado} Estado</p>
                  </td>
                  <td className="p-4 text-sm text-slate-600 capitalize">{reporte.atributos.tipo}</td>
                  <td className="p-4 font-semibold text-emerald-600">{reporte.resultado.valorVentaUF.toLocaleString('es-CL')} UF</td>
                  <td className="p-4 flex items-center gap-3">
                    <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                      <Download className="w-4 h-4" /> PDF
                    </button>
                    <button 
                      onClick={() => eliminarReporte(reporte.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Eliminar registro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
