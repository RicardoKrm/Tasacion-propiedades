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

// Algoritmo Realista para la Fase de Demostración
// Simula cálculos basados en datos ingresados, comunas de Santiago y reglas del mercado chileno
export function calcularTasacion(atributos: AtributosPropiedad): ResultadoTasacion {
  // 1. UF Base según comuna (Simulado del mercado real de Santiago)
  let ufM2 = 78; // base general por defecto para comunas no especificadas
  const dirLower = (atributos.direccion || "").toLowerCase();

  if (dirLower.includes("las condes")) ufM2 = 110;
  else if (dirLower.includes("vitacura")) ufM2 = 118;
  else if (dirLower.includes("lo barnechea")) ufM2 = 124;
  else if (dirLower.includes("providencia")) ufM2 = 96;
  else if (dirLower.includes("la reina")) ufM2 = 90;
  else if (dirLower.includes("ñuñoa") || dirLower.includes("nunoa")) ufM2 = 86;
  else if (dirLower.includes("chicureo") || dirLower.includes("colina")) ufM2 = 80;
  else if (dirLower.includes("peñalolén") || dirLower.includes("penalolen")) ufM2 = 75;
  else if (dirLower.includes("santiago")) ufM2 = 68;
  else if (dirLower.includes("san miguel")) ufM2 = 62;
  else if (dirLower.includes("macul")) ufM2 = 65;
  else if (dirLower.includes("la florida")) ufM2 = 58;
  else if (dirLower.includes("estacion central") || dirLower.includes("estación central")) ufM2 = 55;
  else if (dirLower.includes("maipú") || dirLower.includes("maipu")) ufM2 = 50;
  else if (dirLower.includes("puente alto")) ufM2 = 45;

  // Modificador según el tipo de propiedad
  if (atributos.tipo === "departamento") {
    ufM2 += 6;
  } else if (atributos.tipo === "casa") {
    ufM2 -= 8;
  } else if (atributos.tipo === "oficina") {
    ufM2 += 12;
  } else if (atributos.tipo === "terreno") {
    ufM2 = ufM2 * 0.35; // El m2 de terreno sin construir es considerablemente menor
  }
  
  // 2. Ajustes por antigüedad (depreciación simplificada)
  const edad = Math.max(0, new Date().getFullYear() - (atributos.anoConstruccion || new Date().getFullYear()));
  if (edad > 30) ufM2 *= 0.80;
  else if (edad > 15) ufM2 *= 0.90;
  else if (edad < 5) ufM2 *= 1.10;

  // 3. Ajustes por estado de conservación (declarado o por IA visual)
  if (atributos.estado === "bajo") ufM2 *= 0.82;
  else if (atributos.estado === "alto") ufM2 *= 1.16;

  // 4. Componentes adicionales
  const valorEstacionamientos = (atributos.estacionamientos || 0) * 350; // 350 UF cada uno
  const valorHabitaciones = ((atributos.dormitorios || 0) * 45) + ((atributos.banos || 0) * 65); // valor agregado por habitabilidad
  
  // 5. Cálculo Final Venta
  const superficieFactor = atributos.superficieUtil || (atributos.superficieTotal * 0.8) || 85;
  let valorVentaUF = Math.round((superficieFactor * ufM2) + valorEstacionamientos + valorHabitaciones);
  
  // Asegurar un piso realista si los inputs son extremadamente bajos
  if (valorVentaUF < 500) {
    valorVentaUF = 2850;
  }
  
  // 6. Rangos (Desviación del 6%)
  const rangoMinimoUF = Math.round(valorVentaUF * 0.94);
  const rangoMaximoUF = Math.round(valorVentaUF * 1.06);

  // 7. Cálculo Arriendo y Cap Rate (Ej: ~5.2% para Deptos)
  let capRate = 0.052;
  if (atributos.tipo === "oficina") capRate = 0.062;
  if (atributos.tipo === "casa") capRate = 0.044;
  if (atributos.tipo === "terreno") capRate = 0.035;

  const ingresoAnualUF = valorVentaUF * capRate;
  const valorArriendoUF = Math.round(ingresoAnualUF / 12);

  return {
    valorVentaUF,
    rangoMinimoUF,
    rangoMaximoUF,
    valorArriendoUF,
    capRate: Number((capRate * 100).toFixed(1)),
    plusvaliaAnual: Number((3.5 + Math.random() * 0.8).toFixed(1)) // Fijo simulado alrededor del 3.8%
  };
}
