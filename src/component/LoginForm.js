import React, { useState } from 'react';
// import './LoginForm.css'


 function LoginForm(props) {
     const [username,setUsername]= useState("")  /*state hook */
     const [password,setPassword]= useState("")  /*state hook */

    return (
        <form>
            <div>
                <title>moi ban dang nhap</title>
            </div>
            <div>

                <input type="text" placeholder="username" value={username} onChange={(event) =>{
                    setUsername(event.target.value)
                    
                }}></input>
       
            </div>
            <div>

                <input type="password" placeholder="password" value={password} onChange={(event) =>{
                    setPassword(event.target.value)
                }}></input>
                {password.length <6 && <p>nhap mat khau lon hon 6 ki tu</p>} 
            </div>
            <div>
                <button onClick={props.hi}>login</button>
            </div>
        </form>
    );
}
export default LoginForm ;