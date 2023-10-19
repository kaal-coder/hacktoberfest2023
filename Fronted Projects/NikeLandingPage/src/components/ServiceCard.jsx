
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16  '>
      <div className='flex justify-center items-center h-11 w-11 rounded-full bg-coral-red'>
        <img src={imgURL} alt={label}
        width={24} height={24} />
      </div>
      <h3 className='font-palanquin font-bold text-3xl leading-normal '>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg text-slate-gray leading-normal'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
