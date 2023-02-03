import UsersList from './Components/users/UsersList';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [users,setUsers]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  const getUsers= async()=>{
    try {
      const res= await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.log('error',err.message);
      setError(err.message);
      setLoading(false);
      
    }
  };

  useEffect(()=>{
    getUsers();
  },[]);
  
  if (loading===true){
    return <div>loading...</div>
  }
    if (error !== ''){
      return <div>{error}</div>
    }
  
  return (
    <div className="container">
      <UsersList users={users}/>
    </div>
  );
}

export default App;
