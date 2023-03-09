import createGlobalState from "react-create-global-state"
import { USER_KEY } from '../constants'

const stateInStorage = localStorage.getItem(USER_KEY)

const initialState = stateInStorage ? JSON.parse(stateInStorage) : null

const [_useGlobalUserLogin, Provider] = createGlobalState(initialState)

function useGlobalUserLogin() {
    const [_userLogin, _setUserLogin] = _useGlobalUserLogin()

    function setUserLogin(user){
        _setUserLogin(user)
        
        if(user){
            localStorage.setItem(USER_KEY, JSON.stringify(user))
        }else{
            localStorage.removeItem(USER_KEY)
        }
    }

    return [_userLogin, setUserLogin]
}

export const GlobalUserLoginProvider = Provider

export default useGlobalUserLogin
