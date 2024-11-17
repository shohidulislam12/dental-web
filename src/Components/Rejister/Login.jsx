import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { auth } from "../../Firebase/Firebase.init";
import { NavLink } from "react-router-dom";

const Login = () => {
    const {signinWithGoogle}=useContext(AuthContext)
    const handleGoogle=()=>{
        signinWithGoogle(auth)
        .then((result) => {
console.log(result)
          }).catch((error) => {
            const errorCode = error.code;
      
          });
    }
    return (
        <div>
            <h2 onClick={handleGoogle} className="btn btn-ghost">Google login</h2>
            <div><h2>if you are new in these wb plese  <NavLink to="/register"><button  className="text-red-600">Register  </button></NavLink></h2></div>
        </div>
    );
};

export default Login;