import { useState } from "react"
import { toast } from "sonner"

export default function RegisterView() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e: any) => {
        e.preventDefault()
        if (name && phone && email && password) {
            setTimeout(() => {
                toast.success('Registro correcto')
            }, 500);
        } else {
            setTimeout(() => {
                toast.error('Completa todos los campos')
            }, 500);
        }
    }

    return (
        <>
        <div className="px-4">
            <form
                action=""
                className="max-w-[450px] mt-[15vh] mx-auto p-5 rounded-lg flex flex-col gap-5 bg-white shadow-lg text-[17px]"
            >
                <h1 className="text-3xl mt-5 font-semibold text-center text-gray-700">Registro</h1>
                <div>
                    <input
                        onChange={e => setName(e.target.value)}
                        id="name"
                        type="text"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Nombre"
                    />
                </div>
                <div>
                    <input
                        onChange={e => setPhone(e.target.value)}
                        id="phone"
                        type="tel"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Teléfono"
                    />
                </div>
                <div>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Password"
                    />
                </div>
                <button
                    onClick={handleRegister}
                    type="submit"
                    className="w-full py-3 text-center rounded-md text-xl font-semibold bg-lite-slate text-white hover:bg-dark-jungle transition-colors"
                >
                    Crear cuenta
                </button>
                <div className="text-center my-3 text-gray-700">
                    <p>Ya tienes cuenta? <a href="/auth/login" className="text-gray-950 underline hover:text-lite-granite"> Inicia sesión aquí</a></p>
                </div>
            </form>
            <div className="custom-shape-divider-bottom-1736709796 -z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill="#9ca3af" fillOpacity="1"></path></svg>
            </div>
        </div>
    </> 
    )  
}
