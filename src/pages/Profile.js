import React from 'react'

function Profile(userInfo){
return (
    <div>
    
    
       <h1>User Profile</h1>
       <p>Name:{userInfo.userName}</p>
       <p>Email:{userInfo.email}</p>
    
    
    </div>
)}
  export default Profile;