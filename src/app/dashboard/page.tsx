"use client";

import { FileText, TrendingUp, Building, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function DashboardPage() {
  const { reportes } = useStore();
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Bienvenido de vuelta, Leo</h2>
          <p className="text-slate-600 mt-1">Aquí tienes un resumen de tu actividad reciente.</p>
        </div>
        <Link href="/dashboard/tasar" className="bg-primary text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20">
          Nueva Tasación
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Informes Generados</p>
            <p className="text-3xl font-bold text-slate-900">{reportes.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-emerald-50 p-4 rounded-xl">
            <Building className="w-8 h-8 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Propiedades Captadas</p>
            <p className="text-3xl font-bold text-slate-900">{Math.floor(reportes.length / 3)}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-purple-50 p-4 rounded-xl">
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">Cupo Disponible</p>
            <p className="text-3xl font-bold text-slate-900">Ilimitado</p>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <h3 className="text-xl font-bold text-slate-900 mb-4">Informes Recientes</h3>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 text-sm font-semibold text-slate-600">Dirección</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Tipo</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Valor Estimado</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Fecha</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {reportes.slice(0, 5).map(reporte => (
              <tr key={reporte.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-medium text-slate-900">{reporte.atributos.direccion || "Sin dirección"}</p>
                  <p className="text-xs text-slate-500 capitalize">{reporte.atributos.estado} Estado</p>
                </td>
                <td className="p-4 text-sm text-slate-600 capitalize">{reporte.atributos.tipo}</td>
                <td className="p-4 font-semibold text-emerald-600">{reporte.resultado.valorVentaUF.toLocaleString('es-CL')} UF</td>
                <td className="p-4 text-sm text-slate-500">
                  {new Date(reporte.fecha).toLocaleDateString('es-CL', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="p-4">
                  <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </td>
              </tr>
            ))}
            
            {reportes.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">
                  No has generado informes aún. Haz clic en "Nueva Tasación" para empezar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
