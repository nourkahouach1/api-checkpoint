import React from 'react'
import UserItem from './UserItem'

const UsersList = props => {
  const {users}=props;
  console.log(users);

  const userList =users.map(user=><UserItem key={users.id} user={user}/>)
  return (
    <div className="container py-5">
      <div className="row">{userList}</div>
    </div>
  )
}

export default UsersList
