// import React from 'react';

import { useLoaderData } from "react-router-dom";
const handleDelate =_id =>{
console.log('delete', _id);
fetch( `http://localhost:5000/users/${_id}`,{
    method:"Delete"
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.deletedCount > 0){
        alert('deleted success')
    }
})
}

const Users = () => {
    const users= useLoaderData();
    return (
        <div>
          <h2>  {users.length}</h2>
          {
            users.map(user => <p key={user._id}>
                {user.name} : {user.email}
                <button onClick={()=>handleDelate(user._id)}>X</button></p>)
          }
        </div>
    );
};

export default Users;