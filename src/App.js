import {React, useState, Fragment} from 'react';
import AddUser from './components/User/AddUser';
import UsersLists from './components/User/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (uname, uage) =>{
    setUsersList((prevUserList)=>{
      return [...prevUserList, {name:uname, age:uage, id:Math.random().toString()}];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={handleAddUser}/>
      <UsersLists user={usersList} />
    </Fragment>
  );
}

export default App;
