import React from "react";
import Useritem from "./Useritem";
import "./UsersList.css";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  console.log(props.items.length, "karim");

  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2> No users found</h2>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user) => (
          <Useritem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        ))}
      </ul>
    );
  }
};
export default UsersList;
