import { useState } from "react";
import Button from '../Button/Button'
import Modal from "../Modal/Modal";
import AddToDo from "./AddToDo";
import Select from "../Select/Select";
import Input from "../Input/Input";
import { useMemo } from "react";

const ToDoList = () => {
    const [toDo, setToDo] = useState([])
    const [sort, setSortValue] = useState('')

    const setSort = (sortValue) => {
        setSortValue(sortValue)
        const sorted = [...toDo].sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
        setToDo(sorted)
    }

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
    const addRandomUser = () => {
        setToDo([{
            id: "1",
            name: "Gleb",
            username: "SPK",
            email: "Fomin@gmail.com"
        },
        {
            id: "2",
            name: "Ilya",
            username: "HSK",
            email: "Dileyko@gmail.com"
        },
        {
            id: "3",
            name: "Roma",
            username: "KLA",
            email: "Glushanin@gmail.com"
        },
        {
            id: "4",
            name: "Danil",
            username: "LOS",
            email: "Bogomolov@gmail.com"
        },
        {
            id: "5",
            name: "Anton",
            username: "KTK",
            email: "Kovalenko@gmail.com"
        }]
        )
    }
    const [searchValue, setSearchValue] = useState('')
    const search = useMemo(() => {
        const newPost = [...toDo].filter(user => user.name.toLowerCase().includes(searchValue))
        return newPost;
    }, [searchValue, toDo])
    return (
        <div className="main-content">

            <div className="main-content_btn">
                <Button onClick={setVisible}>Add User</Button>
            </div>

            <div className="main-content_btn">
                <Button onClick={addRandomUser}>Add Random Users</Button>
            </div>

            <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
                <AddToDo setToDo={setToDo} toDo={toDo} setIsVisible={setIsVisible} />
            </Modal>

            <div className="main-content_btn">
                <Button onClick={Clear}>Clear</Button>
            </div>

            <div className="main-content_select">
                <Select options={[
                    { value: 'name', name: 'По Имени' },
                    { value: 'username', name: 'По Никнейму' },
                    { value: 'email', name: 'По Почте' }
                ]}
                    value={() => { }}
                    onChange={setSort}
                />
            </div>
            <div className="main-content_search">
                <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>

            {toDo.length ?
                search.map((user) => {
                    return (
                        <div className="main-content_element">
                            Name: {user.name} | Username: {user.username} | Email: {user.email} <a onClick={() => Remove(user)}>Delete</a>
                        </div>
                    )
                }
                ) : <div className="main-content_element">
                    Users Not Found
                </div>}
        </div>
    );
};

export default ToDoList;
