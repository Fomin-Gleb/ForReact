import User from "./User/User";
import UsersTable from "./UsersTable/usersTable";
import ToDoList from "./ToDoList/ToDoList";
import "./Main.css"
import React, { useEffect, useState, useMemo } from "react";
import usersService from "../Api/usersServise";

const Main = (props) => {

  const [users, setUsers] = useState([]);

  // const Sort = (val) => {
  //   const sortUsers = [...users].sort((a, b) => a.val.localeCompare(b.val))
  //   setUsers(sortUsers)
  // }

  async function getUsersFromServer() {
    const newUSers = await usersService.getAllUsers();
    setUsers(newUSers)
  }

  useEffect(() => {
    getUsersFromServer();
  }, []);

  // const [page, setPage] = useState(1);
  // const miniSliderNext = () => {
  //   if (page !== users.length) {
  //     setPage(page + 1);
  //   } else {
  //     setPage(1)
  //   }
  // }
  // const miniSliderBack = () => {
  //   if (page !== 1) {
  //     setPage(page - 1);
  //   } else {
  //     setPage(users.length)
  //   }
  // }
  // const miniSliderReset = () => {
  //   setPage(1);
  // }

  return (
    <section>
      <div className="container">
        <div className="main">

          {
            // props.ps === 'Home' ?
            // users.map((user) => (

            <UsersTable
              arr={users}
              // sort={Sort}
              setUsers={setUsers}
            />

            // if (page === user.id) {
            //   return (
            //     <User
            //       name={user.name}
            //       username={user.username}
            //       email={user.email}
            //       street={user.address.street}
            //       suite={user.address.suite}
            //       city={user.address.city}
            //       zipcode={user.address.zipcode}
            //       lat={user.address.geo.lat}
            //       lng={user.address.geo.lng}
            //       phone={user.phone}
            //       website={user.website}
            //       companyName={user.company.name}
            //       catchPhrase={user.company.catchPhrase}
            //       bs={user.company.bs}
            //       keys={user.id}
            //       key={user.id}
            //       next={miniSliderNext}
            //       back={miniSliderBack}
            //       reset={miniSliderReset}
            //     />
            //   );
            // }
            // )
            // )
            // : props.ps === 'toDo' &&
            // <ToDoList />
          }
        </div>
      </div>
    </section>
  );
};

export default Main;
