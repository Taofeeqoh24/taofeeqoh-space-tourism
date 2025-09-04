import { useState } from "react";
import { destinations } from "../starter-code/data.json";

function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value]

  return (
    <>
      <section className="destination px-5" >
        <h1 className="pt-30 lg:pt-30 lg:max-w-7xl lg:mx-auto
          text-white text-2xl uppercase text-center lg:text-left lg:pl-40"
        >
          <span className="text-gray-400 m-2">01</span> Pick your destination
        </h1>
        <div className="md:grid md:grid-cols-2 
          gap-5 md:items-center lg:max-w-7xl lg:mx-auto mt-18 lg:text-center">
          <article>
            <img 
              src={images.png} 
              alt={name} 
              title={name} 
              className="block mx-auto w-1/2 mb-10"
            />
          </article>

          <article className="text-center lg:text-left">
            {planets.map((item, index) => (
              <button 
                key={index} 
                onClick={() => setValue(index)} 
                className={`uppercase text-white text-2xl 
                  pb-2 mb-[-10px] mx-2 ${index === value && "border-b border-white" }`}
              >
                {item.name}
              </button>
            ))}

            <h2 className="text-5xl font-bold text-white
              mt-10 mb-5 uppercase tracking-widest"
            >
              {name}
            </h2>
            <p className="text-gray-400 lg:w-2/3 pb-8">
              {description}
            </p>
            <ul className="flex items-center lg:w-2/3 justify-between 
              flex-wrap border-t border-gray-500 pt-8 uppercase"
            > 
              <li className="text-white text-xl"><span className="text-2xl block">Avg. Distance</span> {distance}</li>
              <li className="text-white text-xl"><span className="text-2xl block">Est. Travel Time</span> {travel}</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}

export default Destination;