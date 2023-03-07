import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error Empty filed",
        message: "feild cannot be empty",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Error Invalid age",
        message: "age cannot be neagtive",
      });
      return;
    }
    props.onAddList(enteredUser, enteredAge);
    console.log(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  };

  const userChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const handleErrorRemove = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={handleErrorRemove}
        />
      )}
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
    </div>
  );
};

export default AddUser;
