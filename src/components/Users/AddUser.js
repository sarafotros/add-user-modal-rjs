import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
        return;
    }
    if(+enteredAge < 1){
        return;
    }
    props.onAddList( enteredUser, enteredAge);
    console.log( enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
};

  const userChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">Userame</lable>
        <input
          id="username"
          type="text"
          value={enteredUser}
          onChange={userChangeHandler}
        />
        <lable htmlFor="age">Age</lable>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
