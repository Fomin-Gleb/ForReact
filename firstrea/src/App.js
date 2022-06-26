import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const [pageStatus, setPageStatus] = useState("Home");

  const pageNewUser = () => {
    setPageStatus("toDo");
  };
  const pageHome = () => {
    setPageStatus("Home");
  };

  return (
    <div className="App">
      <Header addnw={pageNewUser}  home={pageHome}/>
      <Main arr={users} ps={pageStatus} />
      <Footer />
    </div>
  );
}

export default App;
