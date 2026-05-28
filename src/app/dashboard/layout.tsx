"use client";

import { Building2, LayoutDashboard, Calculator, FileText, Settings, LogOut, Search, Briefcase } from "lucide-react";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const currentTenant = useStore((state) => state.currentTenant);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-20 flex flex-col justify-center px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 mb-1">
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              Valoriza
            </span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 py-1 px-2 rounded-md border border-slate-100">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            <span className="truncate">{currentTenant.nombre}</span>
          </div>
        </div>
        <div className="flex-1 py-6 px-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-100 text-slate-900 font-medium">
            <LayoutDashboard className="w-5 h-5 text-slate-500" />
            Resumen
          </Link>
          <Link href="/dashboard/tasar" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <Calculator className="w-5 h-5 text-slate-400" />
            Nueva Tasación
          </Link>
          <Link href="/dashboard/mercado" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <Search className="w-5 h-5 text-slate-400" />
            Estudio de Mercado
          </Link>
          <Link href="/dashboard/scraper" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Bot Extractor CBR
          </Link>
          <Link href="/dashboard/informes" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <FileText className="w-5 h-5 text-slate-400" />
            Mis Informes
          </Link>
          <Link href="/dashboard/configuracion" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">
            <Settings className="w-5 h-5 text-slate-400" />
            Configuración
          </Link>
        </div>
        <div className="p-4 border-t border-slate-100">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 font-medium hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-800">Panel de Control</h1>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-wider">
              {currentTenant.plan}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900">Leo Sepúlveda</p>
              <p className="text-xs text-slate-500">Agente Tasador</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
              LS
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
