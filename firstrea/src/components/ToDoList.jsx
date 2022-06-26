import { useState } from "react";
import Button from './Button/Button'
import Modal from "./Modal/Modal";
import AddToDo from "./AddToDo";

const ToDoList = () => {
    const [toDo, setToDo] = useState([])

    const Clear = () => {
        setToDo([])
    }

    const [isVisible, setIsVisible] = useState(false)

    const setVisible = () => {
        setIsVisible(true)
    }

    const Remove = (user) => {
        setToDo([...toDo].filter(elem => elem.id !== user.id))
    }
    return (
        <div className="main-content">
            <div className="main-content_btn">
                <Button onClick={setVisible}>Add User</Button>
            </div>

            <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                <AddToDo setToDo={setToDo} toDo={toDo} setIsVisible={setIsVisible} />
            </Modal>

            <div className="main-content_btn">
                <Button onClick={Clear}>Clear</Button>
            </div>

            {toDo.map((user) => {
                return (
                    <div className="main-content_element">
                        Name: {user.name} | Username: {user.username} | Email: {user.email} <a onClick={() => Remove(user)}>Delete</a>
                    </div>
                );
            }
            )}
        </div>
    );
};

export default ToDoList;
