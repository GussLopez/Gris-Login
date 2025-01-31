import { Bell, SignOut, User } from "@phosphor-icons/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Header() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const handleLogout = () => {
        localStorage.removeItem('AUTH_TOKEN')
        queryClient.invalidateQueries({ queryKey: ['user'] })
        toast.info('Cerrando Sesión . . .')
        setTimeout(() => {
            navigate('/auth/login')
        }, 1000);
    }

    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="flex items-center justify-between px-8 py-4">
                    <div className="flex items-center">
                        <input className="rounded-md border-2 border-gray-300 focus:outline-gray-500 block w-full p-2.5" type="text" placeholder="Buscar..." />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Bell className="w-6 h-6" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <User className="w-6 h-6" />
                        </button>
                        <button 
                        onClick={handleLogout}
                        className="p-2 hover:bg-gray-100 rounded-full">
                            <SignOut className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
