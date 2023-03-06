import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [addUserList, setAddUserList] = useState([]);

  const handdleAddUser = (uName, uAge) => {
    setAddUserList((prevList) => {
      return [
        ...prevList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddList={handdleAddUser} />
      <UsersList users={addUserList} />
    </div>
  );
}

export default App;
