import React, { useState } from "react";
import {openAlert} from "./Nav";
import axios from "axios";
function Login(props) {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    React.useEffect(()=>{
        props.p('Login');
      }, [])
  return (
    <div class = "body">
<div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card px-1 py-4">
        <div class="card-body">
            <h6 class="card-title mb-3">Welcome Scholar!</h6>
            <h6 class="information mt-4">Please enter the needed information</h6><br/>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <input class="form-control" type="email" placeholder="Username" onChange={(e)=>setUser(e.target.value)}/> </div>
                </div>
            </div><br/>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="password" placeholder="Pasword" onChange={(e)=>setPass(e.target.value)}/> </div>
                    </div>
                </div>
            </div>
            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small class="agree-text">Not a Scholar yet?</small> <a href="" style={{cursor:'pointer'}}>Sign Up</a> </div> 
            <button class="btn btn-primary btn-block confirm-button" onClick={()=>{
                axios({
                    method: 'post',
                    url: 'http://localhost/backend/scholar/',
                    data: {
                        username: user,
                        password: pass,
                        db: 'login'
                    }
                }).then((d)=>{
                    console.log(d.data);
                })
            }}>Login</button>
        </div>
    </div>
</div>
    </div>
  
  );
}

export default Login;
