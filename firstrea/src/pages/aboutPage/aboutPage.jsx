import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"



const AboutPage = () => {
    return (
        <div className="main-content">
            <h2>About US</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati sed deserunt
                porro provident nemo dolorum, delectus repellat temporibus eius sunt dolor libero.
                Illo doloribus aliquam numquam ipsa possimus reiciendis deleniti quam nam, deserunt dol
                ore nisi quibusdam odio commodi ipsum, quasi, dignissimos blanditiis! Modi corporis aperi
                am eos? Blanditiis dolorem sed quisquam?</p>
            <Link to='team'><button>Team</button></Link>| 
            <Link to='contact'><button>Contact</button></Link>
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default AboutPage