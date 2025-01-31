import { useState } from "react"
import { toast } from "sonner"
import { RegisterForm } from "../types"
import { useForm } from "react-hook-form"
import api from "../config/axios"
import { isAxiosError } from "axios"
import ErrorMessage from "../components/ErrorMessage"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

export default function RegisterView() {
    const navigate = useNavigate()
    const initialValues : RegisterForm = {
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: ''
    }

    const [viewPassword, setViewPassword] = useState(false)

    const { register, watch, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})
    const password = watch('password')

    const handleRegister = async (formData: RegisterForm) => {
        try {
            const {data} = await api.post(`/api/auth/create-account`, formData)
            toast.success(data)
            setTimeout(() => {
                navigate('/auth/confirm-account')
            }, 1000);
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error)
            }
        }
    }

    return (
        <>
        <div className="px-4">
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="max-w-[450px] mt-[15vh] mx-auto p-5 rounded-lg flex flex-col gap-5 bg-white shadow-lg text-[17px]"
            >
                <h1 className="text-3xl mt-5 font-semibold text-center text-gray-700">Registro</h1>
                <div>
                    <input
                        id="name"
                        type="text"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Nombre"
                        {...register('name', {
                            required: 'El nombre es requerido'
                        })}
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>
                <div>
                    <input
                        id="phone"
                        type="tel"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Teléfono"
                        {...register('phone', {
                            required: 'El teléfono es obligatorio'
                        })}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                </div>
                <div>
                    <input
                        id="email"
                        type="email"
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Email"
                        {...register('email', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Correo Inválido, Por favor introduce un correo valido'
                            }
                        })}
                    />
                     {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>
                <div className="relative">
                    <input
                        type={viewPassword ? 'text' : 'password'}
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Contraseña"
                        {...register('password', {
                            required: 'La contraseña es requerida',
                            minLength: {
                                value: 8,
                                message: 'La contraseña es muy corta, mínimo 8 caracteres'
                            }
                        })}
                    />
                    <button
                        onClick={() => setViewPassword(!viewPassword)}
                        type="button"
                        className="absolute top-4 right-3 text-gray-600"
                    >
                        {viewPassword ? <EyeSlash size={22} /> : <Eye size={22} />}

                    </button>
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>
                <div className="relative">
                    <input
                        id="password_confirmation"
                        type={viewPassword ? 'text' : 'password'}
                        className="p-3 border-2 w-full rounded-md focus:outline-gray-500"
                        placeholder="Confirmar contraseña"
                        {...register('password_confirmation', {
                            required: 'Confirma la contraseña',
                           validate: value => value === password || 'Las contraseñas no coinciden'
                        })}
                    />
                    <button
                        onClick={() => setViewPassword(!viewPassword)}
                        type="button"
                        className="absolute top-4 right-3 text-gray-600"
                    >
                        {viewPassword ? <EyeSlash size={22} /> : <Eye size={22} />}

                    </button>
                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 text-center rounded-md text-xl font-semibold bg-lite-slate text-white hover:bg-dark-jungle transition-colors"
                >
                    Crear cuenta
                </button>
                <div className="text-center my-3 text-gray-700">
                    <p>Ya tienes cuenta? <a href="/auth/login" className="text-gray-950 underline hover:text-lite-granite"> Inicia sesión aquí</a></p>
                </div>
            </form>
            
        </div>
    </> 
    )  
}
