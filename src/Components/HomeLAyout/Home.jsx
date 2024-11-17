import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import FeedBAck from "../FeedBAck/FeedBAck";

const Home = () => {
    const services=useLoaderData()
    const {serviceData,feedbackData }=services

    return (
        <div>
            <Banner></Banner>
       <div className="grid grid-cols-3 gap-5">
       {
            serviceData.slice(0,3).map(service=><Services  key={service.id} service={service}></Services>)
          }

       </div>
   <div className="w-1/4 mx-auto">
   <NavLink className="btn  p-3 btn-primary" to="/alltratment">
   Show All treatment 
       </NavLink>
   </div>
       <FeedBAck feedbackData ={feedbackData }></FeedBAck>
        </div>
    );
};

export default Home;