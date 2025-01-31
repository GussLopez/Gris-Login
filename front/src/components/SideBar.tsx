import { jwtDecode } from "jwt-decode";
import { Link, Navigate, useLocation } from "react-router-dom";
import { CustomJwtPayload } from "../types";

export default function SideBar() {
  const location = useLocation()

  const getLinkClass = (path: string) => {
    const baseClasses = 'px-6 py-3 block hover:bg-gray-50'
    const activeClasses = 'px-6 py-3 block bg-gray-200 hover:bg-gray-200'

    return `${baseClasses} ${location.pathname === path ? activeClasses : ''}`
  }
  const token = localStorage.getItem('AUTH_TOKEN')
  if (!token) return <Navigate to={'/auth/login'} />
  const decodedToken = jwtDecode<CustomJwtPayload>(token)
  const isLoggedIn = () => {
    if (decodedToken.role === 'user') {
      return 'hidden'
    } else {
      return 'block'
    }
  }
  return (
    <>
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 font-semibold text-xl">Panel de Control</div>
        <nav className="mt-4">
          <Link
            to='/'
            className={getLinkClass('/')}
          >
            Dashboard
          </Link>
          <Link
            to='/equipos'
            className={getLinkClass('/equipos')}
          >
            Equipos
          </Link>
          <Link
            to='/recursos'
            className={getLinkClass('/recursos')}
          >
            Recursos
          </Link>
          <Link
            to='/config'
            className={getLinkClass('/config')+isLoggedIn()}
          >
            Configuración
          </Link>
        </nav>
      </aside>
    </>
  )
}
