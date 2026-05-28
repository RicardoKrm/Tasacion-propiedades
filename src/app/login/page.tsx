"use client";

import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
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
            Ingresa a tu cuenta
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-medium text-primary hover:text-blue-600 transition-colors">
              Regístrate gratis
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 rounded-md shadow-sm">
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
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Contraseña
                </label>
                <Link href="#" className="text-xs font-medium text-primary hover:text-blue-600">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl border border-transparent bg-primary py-3 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all shadow-lg shadow-blue-500/30"
            >
              Ingresar al Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500">O continúa con</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
