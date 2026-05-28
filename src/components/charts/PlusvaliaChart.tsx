"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const dataPlusvalia = [
  { mes: 'Nov 22', uf: 65.2 },
  { mes: 'Ene 23', uf: 66.1 },
  { mes: 'Mar 23', uf: 67.5 },
  { mes: 'May 23', uf: 68.0 },
  { mes: 'Jul 23', uf: 68.4 },
  { mes: 'Sep 23', uf: 69.1 },
  { mes: 'Nov 23', uf: 70.2 },
  { mes: 'Ene 24', uf: 71.5 },
  { mes: 'Mar 24', uf: 72.8 },
  { mes: 'May 24', uf: 73.1 },
  { mes: 'Jul 24', uf: 73.8 },
  { mes: 'Sep 24', uf: 74.1 },
];

export function PlusvaliaChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dataPlusvalia} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="mes" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }} 
            dy={10}
          />
          <YAxis 
            domain={['dataMin - 2', 'dataMax + 2']} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#64748b' }}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
            formatter={(value: number) => [`${value} UF/m²`, 'Precio Promedio']}
          />
          <Area 
            type="monotone" 
            dataKey="uf" 
            stroke="#0ea5e9" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorUf)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
