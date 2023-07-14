import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderLink() {
        return (
            <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20 p-5
                `}>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.text}
                </span>
            </a>)
    }

    return (
        <li onClick={props.onClick} 
            className={`hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${props.className}`}>
            {props.url ? (
                <Link legacyBehavior href={props.url}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
            
        </li>
    )
}