import Title from "./Title";

interface HeaderProps {
    titulo: string;
    subtitulo: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div>
            <Title titulo={props.titulo} subtitulo={props.subtitulo}/>
        </div>
    )
}