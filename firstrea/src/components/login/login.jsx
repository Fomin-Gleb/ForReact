import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"


const Login = (props) => {
    return (
        <div className="main-content">
            <h2>Please, Sign In</h2>
            <form action="">
                <div><Input /></div>
                <div><Input /></div>
                <div>
                    <Button onClick={props.auth}>Login</Button> 
                    |
                    <Button onClick={props.logOut}>LogOut</Button>
                </div>

            </form>
        </div>
    )
}

export default Login