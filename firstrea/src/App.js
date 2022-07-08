// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";

function App() {
  // const [users, setUsers] = useState([]);

  // const loadUsers = async () => {
  //   const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   setUsers(resp.data);
  // };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const [pageStatus, setPageStatus] = useState("Home");

  // const pageNewUser = () => {
  //   setPageStatus("toDo");
  // };
  // const pageHome = () => {
  //   setPageStatus("Home");
  // };

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
