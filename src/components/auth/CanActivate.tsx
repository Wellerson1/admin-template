import useAuth from "../../data/hook/useAuth";
import Image from "next/image"
import loading from '../../../public/images/loading.gif'
import route from 'next/router'


export function CanActivate(props) {

    const { usuario, carregando } = useAuth()

    function renderContent() {
        return(
        <>
        {props.children}
        </>)
    }

    function renderLoading() {
        return (
            <div className={`
            flex justify-center items-center h-screen
        `}>
            <Image src={loading} alt="loading"/>
        </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderContent()
    } else if(carregando) {
        return renderLoading()
    } else {
        route.push("/auth")
        return null
    }
}