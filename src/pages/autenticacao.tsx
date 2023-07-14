import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import useAuth from "../data/hook/useAuth";

enum Modo {
    LOGIN = 'login', CADASTRO = 'cadastro'
}

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modo, setModo] = useState<Modo>(Modo.LOGIN)

    const {usuario, loginGoogle} = useAuth()

    function submit() {
        debugger
        if(modo === Modo.LOGIN) {
            console.log('login')
        } else {
            console.log('cadastro')
        }
    }

    function logincomgoogle() {
        debugger
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block  md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/random" alt="" 
                className={`h-screen w-full`}/>
            </div>
        <div className={`m-10 w-full md:w-1/2 `}>
            <h1 className={`text-xl font-bold mb-5`} 
            >{modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na plataforma'}</h1>
            <AuthInput 
                label="E-mail"
                value={email}
                valueChanged={setEmail}/>
            
            <AuthInput 
                label="Senha"
                value={password}
                type="password"
                valueChanged={setPassword}/>
            <button onClick={() => submit()} className={`
             w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg mt-6 px-4 py-3   
                `}>
                {modo === Modo.LOGIN ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className={`w-full border-gray-500 my-6`}/>

            <button onClick={()=>logincomgoogle()} className={`
             w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3   
                `}>
                Entrar com Google
            </button>

            {modo === Modo.LOGIN ? (
            <p className={`mt-10`}>
                Não possui uma conta? 
               <a onClick={() => setModo(Modo.CADASTRO)} 
               className={`text-blue-500 hover:text-blue-800 
               font-semibold cursor-pointer`}> Cadastre-se gratuitamente</a>
            </p>) : (
                
            <p className={`mt-10`}>
                Já possui um cadastro? 
               <a onClick={() => setModo(Modo.LOGIN)} 
               className={`
               text-blue-500 hover:text-blue-800 
               font-semibold cursor-pointer`}> Entre com sua conta </a>
            </p>
                
            )}
        </div>
        </div>
    )
}
