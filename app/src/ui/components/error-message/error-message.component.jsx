import './error-message.style.css'

export function ErrorMessage({children}){

    return(
        <p className='error-message'>{children}</p>
    )

}