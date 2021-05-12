import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { getAllJSDocTags } from 'typescript'

function Login() {
   
  const [user, setUser] = useState("")
  const[password,setPassword]=useState("")


 const login=(e:any)=>{
    
    e.preventDefault()
    console.log("rutu")
    axios.post('/user/login',{email:user,password:password})
    .then((res)=>
 localStorage.setItem("accesstoken", "Bearer " + res.data.accesstoken))
 .catch((err)=>console.log(err+"hi"))
}
  // handleValueChange = (e: any) => {
  //   if(name==''){
  //   setState({
  //     [e.target.name]: e.target.value,
  //   })};
  return (
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    <strong>BOOK APP LOGIN</strong>
                </div>
 
                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" onChange={(e)=>setUser(e.target.value)} className="form-control"></input>
                           </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" ></input>
                            </div>
                           
                            
 
                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                   
                                </div>
                                <div className="registerlogin">
                                    <button type="submit" onClick={(e)=>login(e)}  className="registerlogin" >LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
               
                </div>
                <div className="col-lg-3 col-md-2"></div>
          
        </div>
</div>
 )
}
export default Login