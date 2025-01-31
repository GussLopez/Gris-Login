import ConfirmACcountForm from "../components/ConfirmAccountFrom";

export default function ConfirmAccountView() {

    return (
        <>
       

            <div className="w-[450px] mx-auto">
                <h1 className="text-4xl mt-20 font-bold text-gray-700 mb-3"> Confirma tu Cuenta</h1>
                <h2 className="text-xl text-gray-500">Ingresa el código que recibiste <span className="text-gray-950 font-semibold">por email</span></h2>
               
               <ConfirmACcountForm />
            </div>
        </>
    )
}
