import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const GraficoComparativo = () => {
    const COLORS = ['#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB'];
    const datosComparativos = [
        { name: 'JavaScript', Gustavo: 50, Luis: 5, Manuel: 30, Gael : 5},
        { name: 'HTML', Gustavo: 70, Luis: 50, Manuel: 50, Gael : 25},
        { name: 'CSS', Gustavo: 60, Luis: 60, Manuel: 30 , Gael: 15},
      ];
    return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Comparación de Habilidades</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={datosComparativos}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Gustavo" fill={COLORS[0]} />
          <Bar dataKey="Luis" fill={COLORS[1]} />
          <Bar dataKey="Manuel" fill={COLORS[2]} />
          <Bar dataKey="Gael" fill={COLORS[3]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}