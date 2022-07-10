import { NavLink, Link } from "react-router-dom"
// import Users from "../../pages/users/users"
// import Home from "../../pages/home/home"
// import NotFound from "../../pages/NotFound/notFound"
import "./Header.css"

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <nav>

                    <div className="logo"><h2>LOGO</h2></div>
                    <div className="nav_element"><NavLink to="/" >Home</NavLink></div>
                    <div className="nav_element"><NavLink to="users">Users</NavLink></div>
                    <div className="nav_element"><Link to="#">About US</Link></div>
                    <div className="nav_element"><Link to="#">Contact</Link></div>
                    <div className="nav_element"><Link to="#">Support</Link></div>
                    <div className="nav_element"><Link to="#" >ToDoList</Link></div>
                    <div className="nav_element"><Link to="#">SignUP / SignIN</Link></div>
                </nav>

            </div>

        </header>

    )
}

export default Header