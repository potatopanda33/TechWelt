import { useState } from "react";

function Login() {
    const [user, setUser] = useState();
  return (
    <div className="login">
        <img className="logo" src="./assets/images/Logo_2.png" alt="logo" />
        <form action="/">
            <h1>Login</h1>
            <div className="custom-input2">
                <i className="fa-solid fa-user"></i>
                <input type="text" onChange={(e)=>{setUser(e.target.value)}} placeholder="Username or Email"/>
            </div>
            <div className="custom-input2">
                <i className="fa-solid fa-lock"></i>
                <input type="text" placeholder="Password"/>
            </div>
            <p>Forgot password?</p>
            <button onClick={()=>{localStorage.setItem("user",user);document.location.href="/";}}>Login</button>
            <button>SignUp</button>
        </form>
        <div className="outlinks">
            <button><img src="./assets/images/google 1.png" alt="" />Google</button>
            <button><img src="./assets/images/facebook.png" alt="" />Facebook</button>
        </div>
    </div>
  );
}

export default Login;
