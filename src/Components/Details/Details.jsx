import { useLoaderData, useParams } from "react-router-dom";
import Services from "../Services/Services";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
    const items=useLoaderData()
    console.log("items are",items)
    const {id}=useParams()
    const {name}=useContext(AuthContext)
    console.log("details",name)
  const itemdetils=items.find((item)=>item.id==id)
  console.log(itemdetils)
    return (
        <div>
           <Services service={itemdetils}></Services>
        </div>
    );
};

export default Details;