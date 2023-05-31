import React, { createContext, useContext, useEffect, useState } from "react";
interface IAuthContext {
logged: boolean;
sigIn: (email: string, password: string) => void;
signOut(): void;
}
interface IChildren {
children: React.ReactNode;
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider: React.FC<IChildren> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem("@auth:logged");
        return !!isLogged;
    });

    const SignIn = (email: string, password: string) => {
        if(email === 'arthur_benfica@hotmail.com' && password === '123456'){
            localStorage.setItem("@auth:logged", "true");
            setLogged(true);
        }else{
            alert('Email ou senha incorretos');
        }
    }
    const SignOut = () => {
        localStorage.removeItem("@auth:logged");
        setLogged(false);
    }
    return (
        <AuthContext.Provider value={{
            logged,
            sigIn: SignIn,
            signOut: SignOut
        }}
        >{children}</AuthContext.Provider>
    )
}
function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider, useAuth };