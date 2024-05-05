import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-palanquin font-bold leading-normal">
          What Our 
            <span className="text-coral-red"> Customers </span>
          Say?
      </h3>
      <p className="mt-4 max-w-lg mx-auto text-center info-text">Hear genuine stories from our satisfied customers about their exceptional experience with us</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews