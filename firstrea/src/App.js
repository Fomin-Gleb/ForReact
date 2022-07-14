import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/users";
import Home from "./pages/home/home";
import NotFound from "./pages/NotFound/notFound";
import Layout from "./components/layout";
import User from "./pages/users/user/user";
import QueryAuth from "./hok/searchAut";
import LoginPage from "./pages/loginPage/loginPage";
import { AboutContext } from "./context/aboutContext";
import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/aboutPage/contact/contactPage";
import TeamPage from "./pages/aboutPage/team/teamPage";
import { DarkLightContext } from "./context/darkLightContext";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [color, setColor] = useState('');
  const contactUs = {
    tel: "+375 33 888-44-22",
    email: "glebmsms@gmail.com",
    smth: "smth",
  };
  const teamUs = [
    {
      name: "Gleb",
      avatar: "Photo",
    },
    {
      name: "Ilya",
      avatar: "Photo",
    },
    {
      name: "Danil",
      avatar: "Photo",
    },
  ];

  return (
    <DarkLightContext.Provider
      value={{ isChecked, setIsChecked, color, setColor }}
    >
      <AboutContext.Provider value={{ contactUs, teamUs }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="users"
                element={
                  <QueryAuth>
                    <Users />
                  </QueryAuth>
                }
              />
              <Route
                path="users/:id/:name"
                element={
                  <QueryAuth>
                    <User />
                  </QueryAuth>
                }
              />
              <Route path="login" element={<LoginPage />} />
              <Route path="about/*" element={<AboutPage />}>
                <Route path="contact" element={<ContactPage />} />
                <Route path="team" element={<TeamPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </AboutContext.Provider>
    </DarkLightContext.Provider>
  );
}

export default App;
