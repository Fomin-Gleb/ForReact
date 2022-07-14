import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { DarkLightContext } from "../context/darkLightContext"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = () => {
    const {color}=useContext(DarkLightContext)
    return (
        <div className={`${color}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}
export default Layout