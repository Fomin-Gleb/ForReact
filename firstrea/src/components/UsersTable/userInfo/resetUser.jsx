import { useState } from "react";
import Button from '../../Button/Button'
import Input from "../../Input/Input"
// import styles from "./addUser.module.css"


const Resett = ({ setUser, setIsVis, name, username, email, street, ...props }) => {



    return (
        <div className="main-content">
            {/* <form action="#"> */}
            <div className="main-content_element"><p>Name </p><p><Input type="text" value={name} /></p> </div>
            <div className="main-content_element"><p>Username: </p><p><Input type="text" value={username} /></p></div>
            <div className="main-content_element"><p>Email: </p><p><Input type="text" value={email} /></p></div>
            <div className="main-content_element"><p>Address: </p><p><Input type="text" value={street} /></p></div>

            <div className="main-content_btn">
                <Button onClick={() => { setIsVis() }}>Close</Button>

            </div>
            {/* </form> */}
        </div>
    );
};

export default Resett;