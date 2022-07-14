import UsersTable from "./UsersTable/usersTable";
import "./Main.css"
import React, { useEffect, useState } from "react";
import usersService from "../Api/usersServise";

const Main = (props) => {

  const [users, setUsers] = useState([]);

  async function getUsersFromServer() {
    const newUSers = await usersService.getAllUsers();
    setUsers(newUSers)
  }

  useEffect(() => {
    getUsersFromServer();
  }, []);


  return (
    <section>
      <div className="container">
        <div className="main">

          {
            <UsersTable
              arr={users}
              setUsers={setUsers}
            />
          }
        </div>
      </div>
    </section>
  );
};

export default Main;
