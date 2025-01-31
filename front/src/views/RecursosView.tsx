import { ArrowDown, Bell, Devices, Notebook, SignOut, User, Wrench } from "@phosphor-icons/react"
import { Navigate, useNavigate } from "react-router-dom"
import { toast, Toaster } from "sonner"
import SideBar from "../components/SideBar"

export default function RecursosView() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('AUTH_TOKEN')
    toast.info('Cerrando Sesión . . .')
    setTimeout(() => {
        navigate('/auth/login')
    }, 1000);
}

  const token = localStorage.getItem('AUTH_TOKEN')
  if (!token) return <Navigate to={'/auth/login'} />

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
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

          {/* Content */}
          <main className="p-8">
            <div className="flex items-center gap-2 mb-8">
              <h1 className="text-3xl font-semibold ">Recursos</h1>
              <ArrowDown className="w-6 h-6" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center">
                  <Wrench size={50} className="text-gray-500 m-10"/>
                  <h3 className="text-lg font-semibold mb-4">Herramientas de Desarrollo</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center">
                  <Notebook size={50} className="text-gray-500 m-10"/>
                  <h3 className="text-lg font-semibold mb-4">Herramientas de Desarrollo</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col items-center">
                  <Devices size={50} className="text-gray-500 m-10"/>
                  <h3 className="text-lg font-semibold mb-4">Herramientas de Desarrollo</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Toaster />
      </div>

    </>
  )
}
