export type AtributosPropiedad = {
  direccion: string;
  tipo: "departamento" | "casa" | "oficina" | "terreno";
  superficieUtil: number;
  superficieTotal: number;
  dormitorios: number;
  banos: number;
  estacionamientos: number;
  anoConstruccion: number;
  estado?: "bajo" | "medio" | "alto";
};

export type ResultadoTasacion = {
  valorVentaUF: number;
  rangoMinimoUF: number;
  rangoMaximoUF: number;
  valorArriendoUF: number;
  capRate: number;
  plusvaliaAnual: number;
};

// Algoritmo Mock para la Fase 1
// Simula cálculos basados en datos ingresados y reglas estáticas
export function calcularTasacion(atributos: AtributosPropiedad): ResultadoTasacion {
  // 1. UF Base según comuna (Simulado: Providencia ~ 90 UF/m2, Las Condes ~ 110, etc.)
  // Por simplicidad, tomaremos un valor base general de 85 UF/m2 útil
  let ufM2 = 85;

  if (atributos.tipo === "departamento") ufM2 += 5;
  if (atributos.tipo === "casa") ufM2 -= 10;
  
  // 2. Ajustes por antigüedad (depreciación simplificada)
  const edad = new Date().getFullYear() - atributos.anoConstruccion;
  if (edad > 30) ufM2 *= 0.85;
  else if (edad > 15) ufM2 *= 0.95;
  else if (edad < 5) ufM2 *= 1.1;

  // 3. Ajustes por estado (declarado o por IA)
  if (atributos.estado === "bajo") ufM2 *= 0.85;
  else if (atributos.estado === "alto") ufM2 *= 1.15;

  // 4. Componentes adicionales
  const valorEstacionamientos = atributos.estacionamientos * 350; // 350 UF cada uno
  
  // 5. Cálculo Final Venta
  const valorVentaUF = Math.round((atributos.superficieUtil * ufM2) + valorEstacionamientos);
  
  // 6. Rangos (Desviación del 6%)
  const rangoMinimoUF = Math.round(valorVentaUF * 0.94);
  const rangoMaximoUF = Math.round(valorVentaUF * 1.06);

  // 7. Cálculo Arriendo y Cap Rate (Ej: ~5.5% para Deptos)
  let capRate = 0.055;
  if (atributos.tipo === "oficina") capRate = 0.065;
  if (atributos.tipo === "casa") capRate = 0.045;

  const ingresoAnualUF = valorVentaUF * capRate;
  const valorArriendoUF = Math.round(ingresoAnualUF / 12);

  return {
    valorVentaUF,
    rangoMinimoUF,
    rangoMaximoUF,
    valorArriendoUF,
    capRate: Number((capRate * 100).toFixed(1)),
    plusvaliaAnual: 3.8 // Fijo simulado
  };
}
