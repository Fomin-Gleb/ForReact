import { useContext } from "react"
import { AboutContext } from "../../../context/aboutContext"



const ContactPage = () => {

    const { contactUs } = useContext(AboutContext)

    return (
        <div className="main-content">
            <h2>Contacts:</h2>
            <div>Tel: {contactUs.tel}</div> <br />
            <div>Email: {contactUs.email}</div> <br />
            <div>Smth: {contactUs.smth}</div>
        </div>

    )
}

export default ContactPage