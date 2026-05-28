"use client";

import { Save } from "lucide-react";
import { useState } from "react";

export default function ConfiguracionPage() {
  const [saving, setSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Configuración guardada exitosamente");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Configuración</h2>
        <p className="text-slate-600 mt-1">Ajusta tus datos de perfil y la marca blanca para los informes PDF.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Marca Blanca del Informe</h3>
        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Comercial / Corredora</label>
              <input type="text" defaultValue="Leo Propiedades" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Color Principal (Hex)</label>
              <div className="flex gap-2">
                <input type="color" defaultValue="#2563eb" className="h-12 w-12 rounded-xl border border-slate-200 cursor-pointer" />
                <input type="text" defaultValue="#2563eb" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono de Contacto</label>
              <input type="tel" defaultValue="+56 9 8473 3543" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email de Contacto</label>
              <input type="email" defaultValue="miguel.sepuml@gmail.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Logo de Empresa</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-slate-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-blue-500 focus-within:outline-none">
                    <span>Sube un archivo</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">o arrastra y suelta</p>
                </div>
                <p className="text-xs text-slate-500">PNG, JPG hasta 5MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button disabled={saving} type="submit" className="bg-primary text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md disabled:opacity-70">
              <Save className="w-4 h-4" />
              {saving ? "Guardando..." : "Guardar Configuración"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
