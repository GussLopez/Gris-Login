import { User, Moon, Gear, Users } from "@phosphor-icons/react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { CustomJwtPayload } from "../types";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Toaster } from "sonner";

export default function ConfigView() {

    const token = localStorage.getItem('AUTH_TOKEN')
    if (!token) return <Navigate to={'/auth/login'} />

    const decodedToken = jwtDecode<CustomJwtPayload>(token)

    if (decodedToken.role !== 'admin') return <Navigate to={'/'} />
    
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
               <Header />
                
                <main className="p-8">
                    <h1 className="text-3xl font-semibold mb-8">Configuración</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Tarjeta de Tema */}
                        <div className="p-6 bg-white shadow rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-medium">Modo Oscuro</h2>
                                <p className="text-gray-600 text-sm">Activar o desactivar modo oscuro</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                <Moon className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Tarjeta de Cuenta */}
                        <div className="p-6 bg-white shadow rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-medium">Cuenta</h2>
                                <p className="text-gray-600 text-sm">Administrar información de la cuenta</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                <User className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Tarjeta de Ajustes Generales */}
                        <div className="p-6 bg-white shadow rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-medium">Ajustes Generales</h2>
                                <p className="text-gray-600 text-sm">Configuraciones del sistema</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                <Gear className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 bg-white shadow rounded-lg flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-medium">Administrar Usuarios</h2>
                                <p className="text-gray-600 text-sm">Configuraciones de los usuarios</p>
                            </div>
                            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                <Users className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <Toaster />
        </div>
    )
}
