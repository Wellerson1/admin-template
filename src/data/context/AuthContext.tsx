import firebase from "firebase";
import { createContext, useState } from "react";
import Usuario from "../../model/Usuario";

interface AuthContextProps {
    usuario?: Usuario,
    loginGoogle?: () => Promise<void>
}

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        nome: usuarioFirebase.displayName,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props){

    const [usuario, setUsuario] = useState(null)

    async function loginGoogle() {
        debugger
        console.log('Login goole...')
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;