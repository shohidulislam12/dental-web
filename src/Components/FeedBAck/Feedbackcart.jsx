import  images from "../../assets/download.jpg"
const Feedbackcart = ({feed}) => {
    const {name,rating,comment,date,serviceUsed}=feed
    return (
        <div className="card bg-base-100  text-sm">
                    <div className="card-body">
                     <div className="flex items-center ">
                     <span><img className="w-10 h-10 rounded-full" src={images} alt="" /></span>
                     <h2 className="card-title">{name}</h2>
                    
                     </div>
                       <p>{date}</p>
                      <p>{comment}</p>
                     
                        <p className="font-semibold">{serviceUsed}</p>
                   
                    </div>
                  </div>
    );
};

export default Feedbackcart;