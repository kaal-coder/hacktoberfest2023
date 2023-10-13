import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between items-center max-lg:flex-col w-full gap-10 max-container">
      <div className="flex flex-1 flex-col lg:max-w-lg">
        <h2 className="text-4xl font-palanquin capitalize font-bold  ">
          We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>Shoes
        </h2>
        <p className="mt-4 info-text  ">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 info-text  ">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center"> 
        <img src={shoe8} alt="shoe8"
        className="object-contain"
        height={522}
        width={570} />
      </div>
    </section>
  )
}

export default SuperQuality
