import {star} from '../assets/icons'

const ReviewCard = ({imgUrl,customerName,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <img src={imgUrl} className='object-cover rounded-full h-[120px] w-[120px]'  alt="Customer" />
        <p className='info-text mt-6  text-center max-w-sm'>{feedback}</p>
        <div className='flex justify-center items-center flex-row gap-2.5 mt-3'>
          <img src={star} height={24} width={24} className='object-contain' />
          <p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin font-bold text-3xl text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
