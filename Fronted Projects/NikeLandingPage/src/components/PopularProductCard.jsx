import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} 
      className="w-[280px] h-[280px]" />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" height={24} width={24}/>
        <p className="text-xl font-montserrat text-slate-gray leading-normal">(4.5)</p>
      </div>
      <h3 className="font-palanquin text-2xl font-semibold mt-2 leading-normal">{name}</h3>
      <p className="text-coral-red  font-montserrat text-2xl font-semibold mt-2 leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard
