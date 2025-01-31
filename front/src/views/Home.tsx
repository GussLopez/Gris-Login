import { useQuery } from "@tanstack/react-query"
import { Navigate } from "react-router-dom"
import { Toaster } from "sonner"
import { getUser } from "../api/TeamApi"
import Spinner from "../components/Spinner"
import { GraficoComparativo } from "../components/GraficoComparativo"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import SideBar from "../components/SideBar"
import Header from "../components/Header"



export default function Home() {
    const { isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })
    
    if (isLoading) return <div className="flex justify-center"><Spinner /></div>
    if (isError) return <Navigate to={'/auth/login'} />


    const COLORS = ['#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB'];

    const crearDatosHabilidades = (javascript: number, html: number, css: number) => [
        { name: 'JavaScript', value: javascript },
        { name: 'HTML', value: html },
        { name: 'CSS', value: css },
    ];

    const datosGustavo = crearDatosHabilidades(50, 70, 60);
    const datosLuis = crearDatosHabilidades(5, 50, 60);
    const datosManuel = crearDatosHabilidades(30, 50, 30);
    const datosParce = crearDatosHabilidades(5, 8, 3);

    const GraficoGeneral = ({ datos, nombre }: { datos: any[], nombre: string }) => (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Habilidades de {nombre}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={datos}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                    >
                        {datos.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <>
           
            <div className="flex h-screen bg-gray-50">
                <SideBar />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />


                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-6">Panel de Habilidades</h1>

                        <GraficoComparativo />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <GraficoGeneral datos={datosGustavo} nombre="Gustavo" />
                            <GraficoGeneral datos={datosLuis} nombre="Luis" />
                            <GraficoGeneral datos={datosManuel} nombre="Manuel" />
                            <GraficoGeneral datos={datosParce} nombre="Gael" />
                        </div>
                    </main>
                </div>
            </div >
            <Toaster />
        </>
    )
}
