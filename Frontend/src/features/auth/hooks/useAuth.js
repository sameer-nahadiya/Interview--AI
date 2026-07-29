import { useContext } from "react";
import { AuthContext } from "../services/auth.context.jsx";
import { login, register, logout } from "../services/auth.api.js";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context

    const handlelogin = async ({ email, password}) => {
        setLoading(true)
        try{
            const data = await login({ email,password })
            setUser(data.user)
        } catch (err) {
            
        } finally {
            setLoading(false)
        }
    }

    const handelRegister = async ({username,email,password}) => {
        setLoading(true)
        try{
            const data = await register({username,email,password})
            setUser(data.user)
        } catch (err) {
            
        } finally {
            setLoading(false)
        }
    }

    const handelLogout = async () => {
        setLoading(true)
        try{
            await logout()
            setUser(null)
        }
        catch(err){

        }finally{
            setLoading(false)
        }
    }

    return {user, loading, handlelogin, handelRegister, handelLogout}
}