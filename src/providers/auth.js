import React, { useEffect, useState } from 'react';
export const AuthContext = React.createContext({});

const Inicial_State = [
   
]

export const AuthProvider = (props) => {
    const [cars, setCars] = useState({
        Inicial_State
    })

    useEffect(()=>{
        const userStorage = localStorage.getItem("cars");
        if(userStorage){
            setCars(JSON.parse(userStorage));
        }
    }, [])
    
    return(
        <AuthContext.Provider value={{cars, setCars}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>React.useContext(AuthContext);