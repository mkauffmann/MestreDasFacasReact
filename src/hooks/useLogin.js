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

    const getToken = () => localStorage.getItem("token")
    const getUserId = () => localStorage.getItem("userId")

    return {
        login, 
        logout,
        isAuthenticated,
        getToken,
        getUserId
    }
}

export default useLogin