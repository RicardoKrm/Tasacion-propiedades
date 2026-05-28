"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TiempoColocacionChartProps {
  valorVentaUF?: number;
}

export function TiempoColocacionChart({ valorVentaUF = 3174 }: TiempoColocacionChartProps) {
  // Generar la curva de precios de forma relativa al precio UF calculado
  const dataColocacion = [
    { precioUF: Math.round(valorVentaUF * 0.90), dias: 30 },
    { precioUF: Math.round(valorVentaUF * 0.95), dias: 45 },
    { precioUF: valorVentaUF, dias: 60, recomendado: true },
    { precioUF: Math.round(valorVentaUF * 1.05), dias: 120 },
    { precioUF: Math.round(valorVentaUF * 1.10), dias: 180 },
    { precioUF: Math.round(valorVentaUF * 1.15), dias: 240 },
  ];

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataColocacion} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="precioUF" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }} 
            dy={10}
            name="Precio (UF)"
            tickFormatter={(value) => `${value.toLocaleString('es-CL')} UF`}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }}
            dx={-10}
            name="Días"
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
            formatter={(value: any) => [`${value} días`, 'Tiempo estimado']}
            labelFormatter={(label) => `Precio: ${Number(label).toLocaleString('es-CL')} UF`}
          />
          <Line 
            type="monotone" 
            dataKey="dias" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
            activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
