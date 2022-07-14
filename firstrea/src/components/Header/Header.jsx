import { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { DarkLightContext } from "../../context/darkLightContext"
import "./Header.css"

const Header = (props) => {
    const { isChecked, setIsChecked, setColor } = useContext(DarkLightContext)
    const DarkLight = (e) => {
        setIsChecked(e.target.checked)
        if (!isChecked) {
            setColor('dark')
        } else {
            setColor('')
        }
    }
    return (
        <header >
            <div className="container">
                <nav>

                    <div className="logo"><h2>LOGO</h2></div>
                    <div className="nav_element"><NavLink to="/" >Home</NavLink></div>
                    <div className="nav_element"><NavLink to="users">Users</NavLink></div>
                    <div className="nav_element"><NavLink to="about">About US</NavLink></div>
                    <div className="nav_element"><Link to="#">Contact</Link></div>
                    <div className="nav_element"><Link to="#">Support</Link></div>
                    <div className="nav_element">
                        <label class="checkbox"  >
                            <input type="checkbox" onChange={DarkLight} />
                            <span>Light/Dark</span>
                        </label>
                    </div>
                    <div className="nav_element"><NavLink to="login">SignUP / SignIN</NavLink></div>
                </nav>

            </div>

        </header>

    )
}

export default Header