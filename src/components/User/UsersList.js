import React from "react";
import Card from "../UI/Card";
import './UsersList.css';
const UsersLists = (props) =>{
  return(
    <Card className="users">
      <ul>
        {props.user.map((element)=> (
          <li key={element.id}>
            {element.name} {element.age} years old
          </li>
          ))}
      </ul>
    </Card>
  )





}

export default UsersLists;