// import React from 'react';

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers= useLoaderData();
    const [users,setUsers]= useState(loadedUsers);
    const handleDelate =_id =>{
        console.log('delete', _id);
        fetch( `http://localhost:5000/users/${_id}`,{
            method:"Delete"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted')
                const remaining = users.filter(user=>user._id !== _id)
                setUsers(remaining);
            }
        })
        }
    return (
        <div>
          <h2>  {users.length}</h2>
          {
            users.map(user => <p key={user._id}>
                {user.name} : {user.email}
                <Link to={`/update/${user._id}`}>
                <button>Update</button>
                </Link>
                <button onClick={()=>handleDelate(user._id)}>X</button></p>)
          }
        </div>
    );
};

export default Users;