// import logo from "./logo.svg";
import "./App.css";
// import Main from "./components/Main";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/users";
import Home from "./pages/home/home";
import NotFound from "./pages/NotFound/notFound";
import Layout from "./components/layout";
import User from "./pages/users/user/user";
import UserInfo from "./components/UsersTable/userInfo/userInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id/:name" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
