import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth  = createContext()

const UserProvider = ({children})=>{ 
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null) 

    useEffect(()=>{
        const storedToken = JSON.parse(localStorage.getItem("token"))
        setToken(storedToken)
    },[])
    
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null); 
      };

    return(
        <Auth.Provider value={{token, setToken, user, setUser, logout}}>
            {children}
        </Auth.Provider>
    )
}


export default UserProvider;

export const useAuthContext = ()=> useContext(Auth);