import Title from "./Title";
import { UserAvatar } from "./UserAvatar";

interface HeaderProps {
    titulo: string;
    subtitulo: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={`flex`}>
            <Title titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <UserAvatar className="ml-3" />
            </div>
        </div>
    )
}