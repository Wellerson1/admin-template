
interface TitleProps {
    titulo: string;
    subtitulo: string;
}

export default function Title(props: TitleProps) {
    return(
        <div>
            <h1 className={`
            font-black text-3xl text-blue-900 
            dark:text-white
            `}>{props.titulo}</h1>
            <h2 className={`
            font-light text-sm text-gray-600 
            dark:text-gray-200 dark:font-light
            `}>{props.subtitulo}</h2>
        </div>
    )
}