import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import TableList from "./userTableList/UserTableList"
import TableHead from "./tableHead/tableHead"
import TableSearch from "./search/search"
import AddUser from "./addUser/addUser"
import styles from "./user.module.css"
import { useMemo, useState } from "react";
// import Resett from "./userInfo/resetUser"

const UsersTable = (props) => {

    const [headSort, setHeadSort] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const Sorted = useMemo(() => {
        if (searchValue) {
            return [...props.arr].filter(user => user.name.toLowerCase().includes(searchValue));
        } if (headSort) {
            return headSort !== 'id' && headSort !== 'address' ? [...props.arr].sort((a, b) => a[headSort].localeCompare(b[headSort])) : headSort !== 'address' ? [...props.arr].sort((a, b) => a[headSort] - b[headSort]) : [...props.arr].sort((a, b) => a['address']['street'].localeCompare(b['address']['street']));
        } else {
            return props.arr
        }
    }, [props.arr, headSort, searchValue])

    const [isVisible, setIsVisible] = useState(false)
    const setVisible = () => {
        setIsVisible(true)
    }



    const Reset = () => {
        setHeadSort('')
        setSearchValue('')
    }

    return (
        <div className={styles.userTableContent}>

            <div className={styles.function_menu}>

                <Button onClick={setVisible}>Add User</Button>

                <TableSearch searchValue={searchValue} setSearchValue={setSearchValue} />

                <Button onClick={Reset}>Reset Sort</Button>

            </div>

            <Modal isVisible={isVisible} setIsVisible={setIsVisible}>

                <AddUser setUser={props.setUsers} userArr={props.arr} setIsVisible={setIsVisible} />

            </Modal>

            <TableHead setHeadSort={setHeadSort} />

            <div className={styles.usersTable_element}>
                {
                    Sorted.map((user) => (
                        <TableList
                            // setVisible={setVisibleTwo}
                            // setVisiblet={isVisibleTwo}
                            // setIsVisible={setIsVisible}

                            user={user}
                            key={user.id}
                            keys={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            street={user.address.street}
                        />


                    )
                    )
                }
            </div>
        </div>
    );
};

export default UsersTable;