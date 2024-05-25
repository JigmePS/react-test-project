import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPasswordInput from "../../components/ViPasswordInput";
import ViTextInput from "../../components/ViTextInput";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const doLogin = (e) => {
    let isLogin = false;
    if (email === "admin" && password === "admin") {
      isLogin = true;
    }

    if (isLogin) {
      localStorage.setItem('isLogin', '1');
      navigate('/home');
    } else {
      alert('Login failed');
    }
  }

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === '1') {
      navigate('/home');
    }
  }, []);

  const icon = document.getElementById("Svg");
  const pword = document.getElementById("EnterPassword");

  // icon.addEventListener("click", function () {
  //   this.classList.toggle("fa-eye-slash")
  //   const type = pword.getAttribute("type") === "password" ? "text" : "password"
  //   pword.setAttribute("type", type)
  // })

  return (
    <>
    {/* <div className="login-form">
      <h1>User Login</h1>
      <form onSubmit={doLogin}>
        <ViTextInput
          title="Email"
          name="email"
          handleInputChange={handleInputChange}
          value={email} />
        <ViPasswordInput
          title="Password"
          name="password"
          handleInputChange={handleInputChange}
          value={password} />

        <div className="form-group">
          <button type="submit" className="btn">Login</button>
        </div>
      </form>
    </div> */}
      <body id="lobody">

        <div id="RootWrapperLogin">

          <div id="Case">

            <span id="LogInToOperis">
              Log in to Operis
            </span>

            <form onSubmit={doLogin} id="Form">

              <div id="Email">
                <ViTextInput
                  title="Email"
                  name="email"
                  handleInputChange={handleInputChange}
                  value={email}
                  id="EnterEmail"
                  placeholder="Enter Email" />
              </div>

              <div id="Password">

                <ViPasswordInput
                  title="Password"
                  name="password"
                  handleInputChange={handleInputChange}
                  value={password}
                  id="EnterPassword"
                  placeholder="Enter Password" />

                {/* <i class="fa-solid fa-eye" id="Svg"></i> */}

              </div>

              <input type="submit" value="Log in" id="InputLogin" />

            </form>

            {/* <div id="Line1"></div>

            <span id="NewUser">New User?</span>

            <a href="user?page=newUsers" id="SignUpForAnAccount">
              Sign up for an account
            </a> */}

          </div>

          <span id="Copyright2024Operis">
            Copyright © 2024 Operis
          </span>

        </div>

      </body></>
  );
}

export default Login;