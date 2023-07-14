interface AuthInputProps {
    value: any
    label: string
    type?: 'password' | 'text'
    required?: boolean
    doNotRender?: boolean
    valueChanged: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`flex flex-col mt-2`}>
            <label>{props.label}</label>
            <input 
                type={props.type ?? 'text'}
                onChange={(e) => props.valueChanged?.(e.target.value)} 
                required={props.required}
                className={`rounded-lg px-4 py-3 mt-2 bg-gray-100 focus:bg-white`}/>
        </div>
    )
}