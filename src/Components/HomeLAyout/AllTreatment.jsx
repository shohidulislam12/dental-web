import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";

const AllTreatment = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div>
           
       <div className="grid grid-cols-3 gap-5">
       {
            services.map(service=><Services key={service.id} service={service}></Services>)
          }

       </div>

        </div>
    );
};


export default AllTreatment;