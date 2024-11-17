import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

    return (
        <div className="flex items-center p-2 justify-between text-white bg-blue-700">
            <div>TEETH WIZARD</div>
            <div className="flex gap-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/alltratment">All Treatment</NavLink>
                <NavLink to="/myapointment">My Apoinment</NavLink>
                <NavLink to="/profile">Profile</NavLink>
               
            </div>
            <div>
                <button className="btn btn-primary">Profile</button>
            </div>
            <div className=" flex gap-2 ">
                <NavLink to="/login"><button >Login </button></NavLink>
                
            </div>
        </div>
    );
};

export default Navbar;