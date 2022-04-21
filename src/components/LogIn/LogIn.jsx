import React, {useState} from "react";
import Quote from "../Quote";
import Profile from "../Profile";
import axios from 'axios'



const LogIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogIn = (e)=> {
        e.preventDefault();
        if(password!=='' && username!==''){
            axios.post(
            'https://dnbnjsi71l.execute-api.us-east-1.amazonaws.com/challenge-prod/users/login',
            {username: username, password: password},
            {
                'Content-Type': 'application/json'
            }).then((r)=>{
                localStorage.clear()
                localStorage.setItem('token', r.data.body.token)
                axios.get('https://dnbnjsi71l.execute-api.us-east-1.amazonaws.com/challenge-prod/users/profile', {
                    params: { 
                        token: localStorage.getItem('token'), 
                        username: username
                    }
                }).then((r)=>{
                    console.log("user:", r)
                    localStorage.setItem("user", JSON.stringify(r.data.body))
                })
            })
            .catch((e)=>{
                console.log("Error: ", e)
            })
        }else{

        }
    }
    return (
        <div>
            <h1>Log In</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={(e)=> {setUsername(e.target.value)} } />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=> {setPassword(e.target.value)} }/>

                <button onClick={onLogIn}>Log in</button>
            </form>
            <div>
                {localStorage?.getItem('token')!==null?<Profile />:''}
            </div>
            <div>
                {localStorage?.getItem('token')!==null?<Quote />:''}
            </div>
        </div>
    )
}

export default LogIn