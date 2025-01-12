import { useState } from "react";
import { toast } from "sonner";

export default function LoginView() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = (e: any) => {
        e.preventDefault()
        if (email && password) {
            setTimeout(() => {
                toast.success('Loging In...')
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
                    <h1 className="text-3xl mt-5 font-semibold text-center text-gray-700">Login</h1>
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
                    <div className="text-end my-2 text-[15px]">
                        <a href="#" className="hover:text-lite-granite">Olvidaste tu contraseña?</a>
                    </div>
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full py-3 text-center rounded-md text-xl font-semibold bg-lite-slate text-white hover:bg-dark-jungle transition-colors"
                    >
                        Login
                    </button>
                    <div className="text-center my-3 text-gray-700">
                        <p>No tienes cuenta? <a href="/auth/register" className="text-gray-950 underline hover:text-lite-granite"> Registrate aquí</a></p>
                    </div>
                </form>
                <div className="custom-shape-divider-bottom-1736709796 -z-10">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill="#9ca3af" fillOpacity="1"></path></svg>
                </div>
            </div>
        </>
    )
}
