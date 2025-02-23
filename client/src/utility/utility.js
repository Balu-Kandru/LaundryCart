import { Navigate } from "react-router-dom";

function getToken(){
    if(window.localStorage){
        return window.localStorage.getItem("authorization")
    }
    return ""
}

function isAuthenticated(){
    if(window.localStorage){
        const token=window.localStorage.getItem("authorization");
        return Boolean(token);
    }
    return false;
}

const Protected = ({children})=> {
    const token = localStorage.getItem("authorization");
    //""
    return (
        <>
        {token.length ? children: <Navigate to="/"/>}
        </>
    )
}

const Isuserloggedin = ({children})=> {
    const token = localStorage.getItem("authorization");
    //""
    return (
        <>
        {token && token.length ? <Navigate to="/order/history"/> : children}
        </>
    )
}

const baseUrl = process.env.baseUrl || 'http://localhost:3001';


export { isAuthenticated, getToken, Protected, Isuserloggedin, baseUrl }