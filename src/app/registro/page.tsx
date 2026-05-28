"use client";

import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Crea tu cuenta
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-medium text-primary hover:text-blue-600 transition-colors">
              Inicia sesión
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
              Acepto los <Link href="#" className="text-primary hover:underline">términos y condiciones</Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl border border-transparent bg-primary py-3 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all shadow-lg shadow-blue-500/30"
            >
              Registrarse
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
