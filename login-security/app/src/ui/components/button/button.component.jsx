import './button.style.css'

export function Button({className, onClick, children, disabled}){
    const fullClassName = className ? `button ${className}` : 'button'
    return(
        <button
        disabled={disabled}
        className={fullClassName}
        onClick={onClick}
        >
            {children}
        </button>
    )
}