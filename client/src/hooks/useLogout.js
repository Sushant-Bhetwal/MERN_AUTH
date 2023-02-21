import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from localstorage
        localStorage.removeItem('user');

        // update global authContext
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}