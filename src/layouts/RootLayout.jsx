import { NavLink, Outlet } from "react-router-dom"
import "../styles/index.css"

function RootLayout(){
    return (
        <>
        <NavLink
        className={({isActive,isPending}) => 
            isActive?  "active" : isPending ?"pending" : ""} 
            style={{
                marginRight: "5px"
            }}
            to="/"
            >
            Home
        </NavLink> {" "} 

        | <NavLink 
            className={({isActive,isPending}) => 
            isActive?  "active" : isPending ?"pending" : ""} 
            style={{
                marginLeft: "5px",
                marginRight: "5px"
            }}
            to="/blog">BLog
            </NavLink> {" "}


        | <NavLink className={({isActive,isPending}) => 
            isActive?  "active" : isPending ?"pending" : ""} 
            style={{
                marginLeft: "5px",
            }}
            to="/about">About</NavLink>
        <p/>
        <Outlet/>
        </>
    );
}

export default RootLayout;