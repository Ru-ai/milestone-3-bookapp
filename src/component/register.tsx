import React, { useState } from 'react'
import { ImportsNotUsedAsValues } from 'typescript';
import axios from 'axios'
import History, { useHistory } from 'react-router-dom'
function Register() {
  const history=useHistory()
  const [register, setregister] = useState({
    username:"",
    password:"",
    email:"",
    phone:""
  });
   
  const handleUsername=(event:any)=>{
    setregister({...register,username:event.target.value})
  }
  const handlePassword=(event:any)=>{
    setregister({...register,password:event.target.value})
  }
  const handleemail=(event:any)=>{
    setregister({...register,email:event.target.value})
  }
  const handleUserPhone=(event:any)=>{
    setregister({...register,phone:event.target.value})
  }

  const [submitted,setsubmitted]=useState(false)
  const [valid,setvalid]=useState(false)
  const handleSubmit=(event:any)=>{
    event.preventDefault()
    if(register.username && register.password && register.email && register.phone){
      setvalid(true)
    }
    setsubmitted(true)
    let newUser={
      username:register.username,
      password:register.password,
      email:register.email,
      phone:register.phone

    }
     console.log(newUser)
  

  axios.post('/user/signup',newUser)
  .then(()=>alert ('user as : ' +register.username))
  .catch((err)=>alert('error'+err.message))
  }


  return (

        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    <strong>BOOK APP REGISTERATION</strong>
                </div>
                {submitted &&  valid ? <div className="Success">Success!Thank you for registering</div>:null}
                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="form-group">
                                <label className="form-control-label"><strong>USERNAME</strong></label>
                                <input onChange={handleUsername} value={register.username} type="text" className="form-control"></input>
                           </div>
                           {submitted && !register.username ?<span>Please enter your username</span>:null} 
                            <div className="form-group">
                                <label className="form-control-label"><strong>PASSWORD</strong></label>
                                <input onChange={handlePassword} value={register.password} type="password" className="form-control" ></input>
                            </div>
                            {submitted && !register.password ?<span>Please enter your password</span>:null}
                            <div className="form-group">
                                <label className="form-control-label"><strong>EMAIL</strong></label>
                                <input onChange={handleemail} value={register.email} type="email" className="form-control" ></input>
                            </div>
                            {submitted && !register.email ?<span>Please enter your Email</span>:null}
                            <div className="form-group">
                                <label className="form-control-label"><strong>PHONE NUMBER</strong></label>
                                <input onChange={handleUserPhone} value={register.phone} type="phone" className="form-control" ></input>
                            </div>
                            {submitted && !register.phone ?<span>Please enter your phone</span>:null}
                            
                                
                                <div className="registersubmit">
                                    <button type="submit" className="registersubmit" ><strong>REGISTER</strong></button>
                                </div>
                            
                        </form>
                    </div>
               
                </div>
                <div className="col-lg-3 col-md-2"></div>
          
        </div>
</div>
 )
  }

export default Register