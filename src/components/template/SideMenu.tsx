import useAuth from "../../data/hook/useAuth";
import { IconCalculator, IconHome, IconNotification, IconOut } from "../icons/MenuIcons";
import MenuItem from "./MenuItem";

export default function SideMenu() {
    const {logout} = useAuth()

    return (
        <aside className={`
        flex flex-col
        dark:bg-gray-900 dark:text-gray-300`}>
            <div className={`
            flex flex-col items-center justify-center
            h-20 w-20 
            bg-gradient-to-r from-indigo-500 to-purple-800`}>
        
            </div> 

            <ul className={`flex-grow`}>
                <MenuItem url="/" text="Home" icon={IconHome}/>
                <MenuItem url="/notificacoes" text="Notificações" icon={IconNotification}/>
                <MenuItem url="/notificacoes" text="Caculadora" icon={IconCalculator}/>

            </ul>
            <ul>
                <MenuItem 
                    onClick={() => logout()}
                    className="text-red-600 
                    hover:bg-red-400 hover:text-white
                    dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white" 
                    text="Sair" 
                    icon={IconOut}/>
            </ul>
        </aside>
    )
}