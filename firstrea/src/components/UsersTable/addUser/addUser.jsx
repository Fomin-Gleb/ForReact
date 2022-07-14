import { useState } from "react";
import Button from '../../../UI/Button/Button'
import Input from "../../../UI/Input/Input"


const AddToDo = ({ setUser, userArr, setIsVisible, ...props }) => {
    // e.preventDefault(); 
    const [userName, setUserName] = useState('')
    const [userNikName, setUserNikName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userAddress, setUserAddress] = useState('')

    const onChangeName = (e) => {
        setUserName(e.target.value)
    }
    const onChangeNikName = (e) => {
        setUserNikName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const onChangeAddress = (e) => {
        setUserAddress(e.target.value)
    }
    const addNewUser = () => {
        const addnew = {
            id: Math.floor(Math.random() * (100 - 11)) + 11,
            name: userName,
            username: userNikName,
            email: userEmail,
            address: {
                street: userAddress
            },
        };
        setUser([...userArr, addnew])
        setUserName('')
        setUserNikName('')
        setUserEmail('')
        setUserAddress('')
        setIsVisible(false)
    }


    return (
        <div className="main-content">
            {/* <form action="#"> */}
            <div className="main-content_element"><p>Name: </p><p><Input type="text" value={userName} onChange={onChangeName} /></p> </div>
            <div className="main-content_element"><p>Username: </p><p><Input type="text" value={userNikName} onChange={onChangeNikName} /></p></div>
            <div className="main-content_element"><p>Email: </p><p><Input type="text" value={userEmail} onChange={onChangeEmail} /></p></div>
            <div className="main-content_element"><p>Address: </p><p><Input type="text" value={userAddress} onChange={onChangeAddress} /></p></div>

            <div className="main-content_btn">
                <Button onClick={addNewUser}>Add User</Button>
            </div>
            {/* </form> */}
        </div>
    );
};

export default AddToDo;