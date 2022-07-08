import Button from "../Button/Button"


const User = (props) => {

  return (
    <div className="main-content">
      <div className="main-content_element"><p>Name: </p><p>{props.name}</p> </div>
      <div className="main-content_element"><p>Username: </p><p>{props.username}</p></div>
      <div className="main-content_element"><p>Email: </p><p>{props.email}</p></div>
      <div className="main-content_element"><p>Street: </p><p>{props.street}</p></div>
      <div className="main-content_element"><p>Suite: </p><p>{props.suite}</p></div>
      <div className="main-content_element"><p>City: </p><p>{props.city}</p></div>
      <div className="main-content_element"><p>Zipcode: </p><p>{props.zipcode}</p></div>
      <div className="main-content_element"><p>Lat: </p><p>{props.lat}</p></div>
      <div className="main-content_element"><p>Lng: </p><p>{props.lng}</p></div>
      <div className="main-content_element"><p>Phone: </p><p>{props.phone}</p></div>
      <div className="main-content_element"><p>Website: </p><p>{props.website}</p></div>
      <div className="main-content_element"><p>Company name: </p><p>{props.companyName}</p></div>
      <div className="main-content_element"><p>Catch Phrase: </p><p>{props.catchPhrase}</p></div>
      <div className="main-content_element"><p>BS: </p><p>{props.bs}</p></div>
      <div className="main-content_btn">
        <Button onClick={props.back}>Back</Button>
        <Button onClick={props.reset}>Reset</Button>
        <Button onClick={props.next}>Next</Button>
      </div>
      <div className="main-content_element"><p>Номер пользователя: </p><p>{props.keys}</p></div>
    </div>
  );
};

export default User;
