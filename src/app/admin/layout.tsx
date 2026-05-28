import { ShieldAlert, Users, Database, LayoutDashboard, Settings, Globe } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 flex text-slate-100">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold text-white">
              Admin <span className="text-emerald-500">Valoriza</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">Plataforma</p>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 font-medium hover:bg-slate-800 transition-colors">
            <LayoutDashboard className="w-5 h-5 text-slate-400" />
            Métricas de Negocio
          </Link>
          <Link href="/admin/usuarios" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 font-medium hover:bg-slate-800 transition-colors">
            <Users className="w-5 h-5 text-slate-400" />
            Gestión de Usuarios
          </Link>
          
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3 mt-6">Motores Internos</p>
          <Link href="/admin/scraper" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 font-medium hover:bg-slate-800 transition-colors">
            <Globe className="w-5 h-5 text-slate-400" />
            Monitoreo Scraper
          </Link>
          <Link href="/admin/datos" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 font-medium hover:bg-slate-800 transition-colors">
            <Database className="w-5 h-5 text-slate-400" />
            Datos Oficiales (CBR/SII)
          </Link>
        </div>
        <div className="p-4 border-t border-slate-800">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 font-medium hover:text-white hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" />
            Volver al panel cliente
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-white">Super Administrador</h1>
          <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
            SISTEMA ACTIVO
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
