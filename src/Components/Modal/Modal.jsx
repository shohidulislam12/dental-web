import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Modal = () => {
    const{creatuserWithEmailAndPass}=useContext(AuthContext)
    const handleSubmit=(e)=>{
e.preventDefault()
console.log(e)
const email=e.target.email.value
const name=e.target.name.value
const password=e.target.password.value

console.log(name,email,password)
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleSubmit} className="card-body">
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
        <div>
        <label for="start">Apontment date:</label>

<input type="date" id="start" name="trip-start" value="2024-01-01" min="2024-01-01" max="2026-12-31" />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;