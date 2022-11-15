import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyToast from '../MyToast'

// import '../../App.css'

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const validEmail = (email) => {
        const regexEmail = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
    
        return regexEmail.test(email)
      }

    const login = (e) =>
    {
        e.preventDefault();
        if (!email || !password) {
            setShowToast(true)
            setToastText('Please enter both fields')
          }
          else if (!validEmail(email)) {
            setShowToast(true)
            setToastText('Please enter email correctly')
          }
          else{
            axios.post("http://localhost:3001/api/auth/login",{email: email, password: password}).then(async (res) => {
            localStorage.setItem("email", JSON.stringify(email));
            if (res.status === 200) {
              if (res) {
                
                //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
                localStorage.setItem("email", res?.data?.user?.foundUser?.email);
                if(email === "admin@gmail.com") navigate('/admin')
                    else navigate('/home')
              }
            
            }
          }).catch((err) => {
            console.log(err)
            setShowToast(true)
            setToastText('Invalid email/password')
          });
          }
        
    }

    return (
        <div className="text-center m-5-auto" style={loginStyle}>
            <h2>Sign in to us</h2>
            <form>
                <p>
                    <label style={{color: "teal"}}>Enter your email address</label><br/>
                    <input type="email" name="email" required onChange={(e) => { setEmail(e.target.value); }} />
                </p>
                <p>
                    <label style={{color: "teal"}}>Password</label>
                    <br/>
                    <input type="password" name="password" required onChange={(e) => { setPassword(e.target.value); }}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
            </form>
            <MyToast show={showToast} handleClose={() => setShowToast(false)} text={toastText} />

        </div>
    )
}

const loginStyle = {
  border: "2px solid teal",
    width: "36em",
    marginLeft: "39em",
    marginTop: "10em",
    borderRadius: "5px"
}
