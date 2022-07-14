import UserInfo from '../../../components/UsersTable/userInfo/userInfo'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import usersService from '../../../Api/usersServise';

const User = () => {
    const [uInfo, setInfo] = useState([])
    const { id } = useParams();
    // const fetchInfoUser = async () => {
    //     const info = await usersService.getUserInfo(id)
    //     setInfo(info)
    // }

    useEffect(() => {
        const fetchInfoUser = async () => {
            const info = await usersService.getUserInfo(id)
            setInfo(info)
        }
        fetchInfoUser()
    }, [id])


    return (
        <div>
            {/* {uInfo.address.street} */}
            <UserInfo name={uInfo.name} username={uInfo.username} email={uInfo.email} />
        </div>
    )
}

export default User