import React from 'react'

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg, prodImg }) => {

  const handleChange=()=>{
    if(bigShoeImg !== imgUrl.bigShoe){
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <div className={
      `border-2 rounded-lg 
      ${(bigShoeImg === imgUrl.bigShoe)
        ? "border-coral-red"
        : "border-transparent"} cursor-pointer max-sm:flex-1
        `}
      onClick={handleChange}
    >
      <div className='flex justify-center items-center bg-card bg-cover bg-center
      rounded-xl max-sm:p-4 sm:w-40 sm:h-40'>
        <img src={ prodImg? prodImg :imgUrl.thumbnail} 
        alt="shoe Collection" 
        className='object-contain'
        width={127}
        height={103}
        />
      </div>
    </div>
  )
}

export default ShoeCard
