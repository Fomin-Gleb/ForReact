import UserInfo from '../../../components/UsersTable/userInfo/userInfo'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const User = () => {
    const [uInfo, setInfo] = useState([])
    const { id } = useParams();


    const fetchInfoUser = async () => {
        // console.log(id)
        const info = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        // console.log(info.data);
        setInfo(info.data)
    }

    useEffect(() => {
        fetchInfoUser()
    }, [])


    return (
        <div>
            {/* {uInfo.name} */}
            {/* {uInfo.username} */}
            {/* {uInfo.email} */}
            {/* {uInfo.phone} */}
            {/* {uInfo.address.street} */}
            <UserInfo name={uInfo.name} username={uInfo.username} email={uInfo.email}  />
            {/* {
                uInfo.map((us) => (
                    <div>
                        -----
                       <div>{us.title}</div> 
                       <div>{us.body}</div>
                        -----
                    </div>
                ))
            } */}
        </div>
    )
}

export default User