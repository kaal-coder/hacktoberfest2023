import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12 ">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="font-palanquin text-4xl font-bold">Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {
            products.map((prod) => (
              <PopularProductCard key={prod.name} {...prod} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
