import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AtributosPropiedad, ResultadoTasacion } from './algoritmo';

export interface Tenant {
  id: string;
  nombre: string;
  plan: 'Freemium' | 'Pro' | 'Empresa';
  logo?: string;
}

export interface ReporteTasacion {
  id: string;
  tenantId: string;
  fecha: string;
  atributos: AtributosPropiedad;
  resultado: ResultadoTasacion;
}

interface AppState {
  currentTenant: Tenant;
  reportes: ReporteTasacion[];
  setCurrentTenant: (tenant: Tenant) => void;
  agregarReporte: (reporte: Omit<ReporteTasacion, 'id' | 'fecha' | 'tenantId'>) => void;
  eliminarReporte: (id: string) => void;
  limpiarReportes: () => void;
}

const DEFAULT_TENANT: Tenant = {
  id: 't-1001',
  nombre: 'Corredores Iquique SpA',
  plan: 'Pro'
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      currentTenant: DEFAULT_TENANT,
      reportes: [],
      
      setCurrentTenant: (tenant) => set({ currentTenant: tenant }),

      agregarReporte: (reporte) => set((state) => ({
        reportes: [
          {
            ...reporte,
            id: Math.random().toString(36).substring(2, 9),
            tenantId: state.currentTenant.id,
            fecha: new Date().toISOString()
          },
          ...state.reportes
        ]
      })),

      eliminarReporte: (id) => set((state) => ({
        reportes: state.reportes.filter(r => r.id !== id)
      })),

      limpiarReportes: () => set({ reportes: [] }),
    }),
    {
      name: 'valoriza-storage', // nombre de la key en localStorage
    }
  )
);
