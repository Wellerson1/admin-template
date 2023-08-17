import { createContext, useEffect, useState } from "react";
import Usuario from "../../model/Usuario";
import route from 'next/router'
import firebase from "../../firebase/config";
import Cookies from 'js-cookie'


interface AuthContextProps {
    usuario?: Usuario,
    loginGoogle?: () => Promise<void>
    login?: (email, password) => Promise<void>
    cadastrar?: (email, password) => Promise<void>
    logout?: () => Promise<void>
    carregando?: boolean
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

function manegerCokkies(logado: boolean) {
    if (logado) {
        Cookies.set("admin-template-well-auth", logado, {
            expires: 7
        })
    } else {
        Cookies.remove("admin-template-well-auth")
    }
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {

    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    useEffect(() => {
        if (Cookies.get("admin-template-well-auth")) {
            return firebase.auth().onIdTokenChanged(configurarSessao)
        } else {
            setCarregando(false)
        }
    }, [])

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            manegerCokkies(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            manegerCokkies(false)
            setCarregando(false)
            return false
        }
    }

    async function login(email, password) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, password)
            configurarSessao(resp.user)
            route.push("/")
        } finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)

            route.push("/auth")

        } finally {
            setCarregando(false)
        }
    }

    async function cadastrar(email, password) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
            await configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle,
            login,
            cadastrar,
            carregando,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;