

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 rounded-[20px] shadow-3xl">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
         <img
            src={imgURL}
            alt={label}
            width={24}
            height={24}
            className="object-contain"
         />
      </div>
      <h3 className="mt-5 text-3xl font-palanquin font-bold leading-normal">{label}</h3>
      <p className="mt-3 text-lg font-montserrat leading-normal break-words text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard