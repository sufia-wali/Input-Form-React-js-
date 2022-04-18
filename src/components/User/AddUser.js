import { Fragment, React, useState } from "react";
import Card from "../UI/Card";
import './AddUser.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {

  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  }
  const addUSerHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enetr a valid name & age(non-empty values'
      });
      return;
    }
    if (+userAge.length < 1) {
      setError({
        title:'Invalid age',
        message:'Please enetr a avlid age (>0)'
      })
      return;
    }
    props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  }

  // const submitHandler = (event) => {
  //   console.log(event);
  // }

  const errorHandler=()=>{
    setError(null);
  }
  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className="input">
        <form onSubmit={addUSerHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={username} onChange={nameChangeHandler} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" value={userAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}
export default AddUser;