import { createContext, useState, useEffect } from "react";
import { getMe } from "./auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) =>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data?.user ?? null)
            } catch (err) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        const hasTokenCookie = document.cookie.split(";").some(cookie => cookie.trim().startsWith("token="))

        if (hasTokenCookie) {
            getAndSetUser()
        } else {
            setLoading(false)
        }
    },[])

    return(
        <AuthContext.Provider value = {{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}