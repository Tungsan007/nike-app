import { star } from "../assets/icons"


const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center text-center max-lg:items-center flex-col">
      <img src={imgURL} alt={customerName}
         width={120}
         height={120}
         className="object-cover rounded-full"
      />
      <p className="mt-4 max-w-sm info-text">{feedback}</p>
      <div className="mt-4 flex justify-center items-center gap-2">
         <img src={star}
            width={24}
            height={24}
            className="object-contain m-0"
         />
         <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-palanquin text-center font-semibold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard