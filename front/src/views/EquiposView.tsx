import { Navigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Toaster } from "sonner";


export default function EquiposView() {

  
  const token = localStorage.getItem('AUTH_TOKEN')
  if (!token) return <Navigate to={'/auth/login'} />


  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex-1">
        <Header />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold mb-6">Equipos</h1>
          {/* Teams Section */}
          {["Gray Team", "Black Team"].map((team, index) => (
            <div key={team} className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{team}</h3>
                <div className="w-8 h-1 bg-gray-300 rounded" />
              </div>
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex justify-center gap-8">
                  {[1, 2, 3].map((member) => (
                    <div
                      key={member}
                      className={`w-40 p-4 bg-gray-50 rounded-lg flex flex-col items-center ${index === 1 && member === 2 ? "ring-2 ring-blue-500" : ""
                        }`}
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4" />
                      <span className="text-gray-600 mb-4">Nombre</span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Toaster />
    </div>
  )
}
