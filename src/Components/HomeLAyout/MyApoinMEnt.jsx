import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyApoinMEnt = () => {
    const {name}=useContext(AuthContext)
    console.log(name)

    return (
        <div>
            
        </div>
    );
};

export default MyApoinMEnt;