import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {userLoginWithmailpass}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const name=e.target.name.value
        const password=e.target.password.value
        const confarmpassword=e.target.confarmpassword.value
        if (password !== confarmpassword) {
            return alert("Passwords do not match!");
          }

        console.log(name,email,password,confarmpassword)
        userLoginWithmailpass(email,password)
        .then((result) => {
         console.log(result) 
        }).
        catch((error) =>
             {
         const errorCode = error.code;
         console.log(error.message)            
        });
    }
    return (
        <div>
             <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ConFarm Password</span>
          </label>
          <input name="confarmpassword" type="password" placeholder="Confarm password" className="input input-bordered" required />
    
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>

        </div>
    );
};

export default Register;