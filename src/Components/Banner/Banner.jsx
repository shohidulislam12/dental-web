import { useLoaderData } from "react-router-dom";
import bannerimg from "../../assets/images.jpg"
const Banner = () => {
  
    return (
        <div className="hero bg-base-200 h-[400px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerimg}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Tips for maintaining clean and healthy teeth?</h1>
            <p className="py-6">
            Cleanliness is considered half of faith, and caring for your teeth is an essential aspect of maintaining overall hygiene.
            </p>
            <button  className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;