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
      navigate('/employee-list');
    } else {
      alert('Login failed');
    }
  }

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === '1') {
      navigate('/employee-list');
    }
  }, []);

  const icon = document.getElementById("Svg");
  const pword = document.getElementById("EnterPassword");

  return (
    <>
      <body id="lobody">

        <div id="RootWrapperLogin">

          <div id="Case">

            <span id="LogInToOperis">
              Log in to EMS
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

              </div>

              <input type="submit" value="Log in" id="InputLogin" />

            </form>

          </div>

          <span id="Copyright2024Operis">
            Copyright © 2024 EMS
          </span>

        </div>

      </body></>
  );
}

export default Login;