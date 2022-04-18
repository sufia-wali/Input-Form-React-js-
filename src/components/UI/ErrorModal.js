import React from "react";
import Card from './Card';
import Button from "./Button";
import './ErrorModal.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {

  return <div className="backdrop" onClick={props.onConfirm} />

}

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}> Okay!</Button>
      </footer>
    </Card>
  )
}
const ErrorModal = (props) => {

  return <React.Fragment>

    {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />,
      document.getElementById('backdrop-root'))
    }
    {ReactDOM.createPortal(
      <ModalOverlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm} />,
      document.getElementById('overlay-root'))
    }
  </React.Fragment>

}

export default ErrorModal;