import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onHandleError} />
      <Card className={style.modal}>
        <headre className={style.title}>
          <h2>{props.title}</h2>
        </headre>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
