import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">We Prodive You <span className="text-coral-red">Super</span> 
        <br />
        <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="lg:max-w-lg mt-6 info-text">Ensuaring premium comfort ans style, our meticulously crafted foowear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
        <p className="lg:max-w-lg mt-6 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div>
          <Button label="View detail"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8" 
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality