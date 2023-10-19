import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard key={service} {...service} />
      ))}
    </section>
  )
}

export default Services
