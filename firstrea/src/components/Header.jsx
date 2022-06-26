import "./style/style.css"

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo"><h2>LOGO</h2></div>
                    <div className="nav_element"><a href="#" onClick={props.home}>Home</a></div>
                    <div className="nav_element"><a href="#" onClick={props.addnw}>ToDoList</a></div>
                    <div className="nav_element"><a href="#">Menu</a></div>
                    <div className="nav_element"><a href="#">About US</a></div>
                    <div className="nav_element"><a href="#">Contact</a></div>
                    <div className="nav_element"><a href="#">Support</a></div>
                    <div className="nav_element"><a href="#">SignUP / SignIN</a></div>
                </nav>
            </div>
        </header>
    )
}

export default Header