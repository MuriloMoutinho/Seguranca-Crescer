
export function Input({ type, name, onChange, placeholder,value }) {

    return (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                autoComplete='off'
                value={value}
            />
    )
}
