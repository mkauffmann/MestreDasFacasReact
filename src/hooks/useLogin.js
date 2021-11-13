import React from 'react'
import jwtDecode from 'jwt-decode'

function useLogin(){
    const login = (token) => {
        let jwt = token;
        let decoded = jwtDecode(jwt);
        let userId = decoded.sub;

        localStorage.setItem("userId", userId)
        localStorage.setItem("token", jwt)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
    }

    const isAuthenticated = () => {
        return localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null;
    }

    const token =  localStorage.getItem("token")
    const userId = localStorage.getItem("userId")

    return {
        login, 
        logout,
        isAuthenticated,
        token,
        userId
    }
}

export default useLogin