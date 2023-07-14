import { createContext, useState } from "react";

type Tema = 'dark' | ''
interface AppCoontextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppCoontextProps>({})

export function AppProvider(props) {
    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        setTema(tema === 'dark' ? '' : 'dark')
    }
    return (
        <AppContext.Provider value={{
            tema,
            alternarTema}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
