import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import createCard from "./CreateCard";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgSRC="https://media.licdn.com/dms/image/C4D03AQHSunnLgLaksg/profile-displayphoto-shrink_400_400/0/1606905736325?e=1707955200&v=beta&t=GPJ3VhtpUw30CnjPPy50dWyJfx4xk2DYDpPP28kgukA" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
