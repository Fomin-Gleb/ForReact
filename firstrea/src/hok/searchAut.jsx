import { Navigate, useLocation } from "react-router-dom"

const QueryAuth = ({ children }) => {
    const location = useLocation();
    const isAuth = localStorage.getItem('auth')
    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children
}

export default QueryAuth