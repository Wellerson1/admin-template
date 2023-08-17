import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface UserAvatarProps {
    className: string;
}

export function UserAvatar({className}: UserAvatarProps) {

    const {usuario} = useAuth() 

    return (
        <Link href={'/profile'}>
            <img src={usuario?.imagemUrl ?? '/public/images/avatar.svg'} 
                 className={`h-10 w-10 rounded-full cursor-pointer`}
                 alt="Avatar do usuário" />
        </Link>
    )
}