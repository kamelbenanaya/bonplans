import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "karim",
      image:
        "https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/259185053_4680958415293609_1307443318632329043_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RneoAnRQgOwAX_5ucOh&_nc_ht=scontent.ftun18-1.fna&oh=00_AT_XmHSL8s5vifD_IHO19WC-lRvr-6LhOEo7Nfd-6RMiXQ&oe=635AB26B",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
