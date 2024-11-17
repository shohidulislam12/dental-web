import { NavLink } from "react-router-dom";
import imgs from "../../assets/images.jpg"
import Modal from "../Modal/Modal";
const Services = ({service}) => {
    const { name,description,image,id,priceRange}=service
    return (
        <div className="card bg-base-100 ">
        <figure className="px-10 pt-10">
          <img
            src={imgs}
            alt={name}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0,100)}</p>
          <p>price range:{priceRange}</p>
          <div className="card-actions flex justify-between">
          <NavLink to={`/details/${id}`}>
          <button className="btn btn-primary">CheckOut More</button>
          </NavLink>
  
          <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Apoinment</button>
        
          </div>
        </div>
      </div>
    );
};

export default Services;