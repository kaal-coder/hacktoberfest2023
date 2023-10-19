import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { useState } from "react"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id='home'
      className="w-full min-h-screen max-container flex xl:flex-row flex-col justify-center gap-10">
      <div className=" relative flex flex-col  items-start justify-center  w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our Summer collections</p>
        <h1 className="text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px] mt-10">
          <span className="xl:bg-white  xl:whitespace-nowrap relative z-10 pr-8">The New Arrival </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray sm:max-w-sm leading-8 mt-6 mb-14 ">Discover stylish Nike arrivals, quality
          comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap gap-16 mt-20 w-full">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-palanquin text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
        src={bigShoeImg} alt="shoeContain" 
        height={500}
        width={610}
        className="relative z-10 object-contain"/>

        <div className="flex sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard imgUrl={shoe}
              changeBigShoeImage={(newShoe)=>{setBigShoeImg(newShoe)}}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
