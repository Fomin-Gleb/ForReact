import User from "./User";
import ToDoList from "./ToDoList";
import "./style/style.css"
import { useState } from "react";

const Main = (props) => {
  const [page, setPage] = useState(1);
  const miniSliderNext = () => {
    if (page !== props.arr.length) {
      setPage(page + 1);
    } else {
      setPage(1)
    }
  }
  const miniSliderBack = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(props.arr.length)
    }
  }
  const miniSliderReset = () => {
    setPage(1);
  }
  // const [toDo, setToDo] = useState([])
  // const Remove = (elem) => {
  //   setToDo = ([...elem].filter(p => p.id !== elem.id))
  // }
  return (
    <section>
      <div className="container">
        <div className="main">
          {props.arr.map((user) => {
            if (props.ps === 'Home') {
              if (page === user.id) {
                return (
                  <User
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    street={user.address.street}
                    suite={user.address.suite}
                    city={user.address.city}
                    zipcode={user.address.zipcode}
                    lat={user.address.geo.lat}
                    lng={user.address.geo.lng}
                    phone={user.phone}
                    website={user.website}
                    companyName={user.company.name}
                    catchPhrase={user.company.catchPhrase}
                    bs={user.company.bs}
                    keys={user.id}
                    key={user.id}
                    next={miniSliderNext}
                    back={miniSliderBack}
                    reset={miniSliderReset}
                  />
                );
              }
            }
            if (props.ps === 'toDo') {
              if (page === user.id) {
                return (
                  <ToDoList  />
                );
              }
            }
          }
          )
          }
        </div>
      </div>
    </section>
  );
};

export default Main;
