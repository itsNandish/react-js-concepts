import { Outlet } from "react-router-dom"
import Header from "../header"


function Layout(params) {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout