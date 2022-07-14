import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../components/login/login";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/'
    const auth = (e) => {
        e.preventDefault()
        localStorage.setItem('auth', true)
        navigate(`${fromPage}`, { replace: true })
    }
    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('auth')
        navigate(`/`, { replace: true })
    }
    return (
        <div>
            <Login auth={auth} logOut={logOut} />
        </div>
    )
}
export default LoginPage