import React,{useState} from 'react'
import './Login.css'
import {  Link } from 'react-router-dom';


function Login() {
  const[user,setUser]=useState("");
  const[pass,setPass]=useState("");
  const handleChangeUser=e=>{
    setUser(e.target.value)

  }
  const handleChangePass=e=>{
    setPass(e.target.value)

  }
  const handleSubmit=e=>{
    e.preventdefualt()
  }
  return (
    <div className="login">
    <div className='background' >
        <div className="shape"></div>
        <div className="shape"></div>

    </div>
    <form className='login_form' onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label className='label' >Username</label>
        <input type="text"
        value={user}
        onChange={handleChangeUser}
        placeholder="Email or Phone" className='password' />

        <label className='label' >Password</label>
        <input type="password"
        value={pass}
        onChange={handleChangePass}
        placeholder="Password" className='password' />

<Link to="/todo"><button className='login_button'  >Log In</button></Link>
        {/* <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div> */}
    </form>
</div>
  )
}

export default Login