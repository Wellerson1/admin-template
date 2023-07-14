import useAppData from "../../data/hook/useAppData"
import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const context = useAppData()

    return (
        <div className={`${context.tema} flex h-screen w-screen`}>
            <SideMenu />
            <div className={`flex 
                flex-col 
                w-full p-8 
                bg-gray-200 dark:bg-gray-800 dark:c-white `}>
                <Header titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Content>
                    {props.children}    
                </Content> 
            </div>
                   
        </div>
    )
}