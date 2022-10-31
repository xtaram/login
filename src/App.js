import { useState } from "react";
import "./App.css";
import profile from "./images/user.png";
import email from "./images/mail.png";
import pass from "./images/pass.jpg";
import welcome from "./images/welcome.webp"
import { ToastContainer,toast,Zoom,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = (e) => {
    console.log({ username, password });
    axios
      .post("http://localhost3000", { username: username, password: password })
      .then((result) => {
        console.log(result.data);
        alert("success");
      })
      .catch((error) => {
      if(error){
        toast("API ERROR",{
          className:"error-toast",
          draggable:true,
          position:toast.POSITION.TOP_CENTER
        })
      } 
      });
  };
  return (
    <div className="App">
      <div className="login-form">
        <form>
          <div className="input-container">
          <img src={welcome} alt="welcome" className="welcome"></img>
            <img src={profile} alt="profile" className="profile"></img>
            Username :{" "}
            <input
              value={username}
              onChange={handleUsername}
              type="text"
            />{" "}
          </div>
          <div className="input-container">
            <img src={pass} alt="pass" className="pass"></img>
            Password:{" "}
            <input
              value={password}
              onChange={handlePassword}
              type="text"
            />{" "}
          </div>
          <div className="button-container">
            <button> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
