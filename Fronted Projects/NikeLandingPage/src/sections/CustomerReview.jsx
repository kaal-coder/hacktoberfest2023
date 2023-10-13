import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin  font-bold text-center ">
          What Our<span className="text-coral-red"> Customer </span>Say?
        </h3>
        <p className="mt-4 m-auto info-text text-center max-w-lg  ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="mt-24 flex flex-1 items-center justify-evenly max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <ReviewCard
              key={review.customerName}
              imgUrl={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}

        </div>
    </section>
  )
}

export default CustomerReview
