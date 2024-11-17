import Feedbackcart from "./Feedbackcart";

const FeedBAck = ({feedbackData}) => {

    return (
      <div>
          <h2 className="text-2xl text-center my-10">Clint FeedBAck </h2>
        <div className="grid grid-cols-3">
           
            {
                feedbackData.map(feed=><Feedbackcart key={feed.id}  feed={feed}> </Feedbackcart>)
            }
        </div>
      </div>
    );
};

export default FeedBAck;