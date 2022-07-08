// import Button from "../Button/Button"
import styles from "./listUser.module.css"
// import Reset from "../userInfo/resetUser";
import Resett from "../userInfo/resetUser";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const TableList = (props) => {



    const [isVisibleTwo, setIsVisibleTwo] = useState(false)
    const setVisibleTwo = () => {
        setIsVisibleTwo(true)
    }


    const addInForm = () => {
        setVisibleTwo()
        console.log(isVisibleTwo);
    }

    return (
        <div onClick={addInForm} className={styles.userTableList}>
            <div className={styles.elem}>{props.keys}</div>
            <div className={styles.elem}>{props.name}</div>
            <div className={styles.elem}>{props.username}</div>
            <div className={styles.elem}>{props.email}</div>
            <div className={styles.elem}>{props.street}</div>

            <Modal isVisible={isVisibleTwo} setIsVisible={setIsVisibleTwo}>
                <Resett
                    // setIsVisible={ props.setIsVisible()}

                    setIsVis={setIsVisibleTwo}
                    k={props.keys}
                    name={props.name}
                    username={props.username}
                    email={props.email}
                    street={props.street}
                />
            </Modal>

        </div>
    );
};

export default TableList