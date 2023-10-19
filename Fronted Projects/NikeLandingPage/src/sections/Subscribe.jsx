import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex flex-1 max-lg:flex-col gap-10 justify-between items-center " id="contact-us">
      <h2 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">
        Sign Up for 
        <span className="text-coral-red"> Updates </span>& Newsletters
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com"
        className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>

    </section>
  )
}

export default Subscribe
