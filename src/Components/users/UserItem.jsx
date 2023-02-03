import React from 'react'

const UserItem = props => {
  const {user}= props;
  const {name,email}=user;
  return (
    <div className='col-md-4 my-4'>
      <div className='card mb-3'>
        <div className='card-body'>
          <h5 className='card-title' style={{color:"black"}}>{name} </h5>
          <p className='card-text' style={{color:"black"}}>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserItem
