import { Link, Outlet } from "react-router-dom"

function RootLayout(){
    return (
        <>
        <Link to="/">Home</Link>|<Link to="/blogs">BLog</Link>|<Link to="/about">About</Link>
        <p/>
        <Outlet/>
        </>
    );
}

export default RootLayout;