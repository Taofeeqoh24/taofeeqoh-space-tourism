import { useState } from "react";
import { crew } from "../starter-code/data.json";
import { BsCircle } from "react-icons/bs";

function Crew() {
  const [people] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = people[value]

  return (
    <>
      <section className="crew px-5" >
        <h1 className="pt-30 lg:pt-30 lg:max-w-7xl lg:mx-auto
          text-white text-2xl uppercase text-center lg:text-left 
          lg:pl-40"
        >
          <span className="text-gray-400 m-2">02</span> 
            Pick your crew
        </h1>
        <div className="md:grid md:grid-cols-2 
          gap-5 md:items-center lg:max-w-4xl lg:mx-auto mt-12 lg:mt-0 lg:text-center">
          <article className="text-center lg:text-left lg:mt-20 ">
            <h5 className="text-2xl font-bold text-white
               mb-5 uppercase tracking-widest">{role}</h5>
            <h2 className="text-4xl font-bold text-white
               mb-5 uppercase tracking-widest"
            >
              {name}
            </h2>
            <p className="text-gray-400 lg:w-2/3 mb-10">
              {bio}
            </p>

            {people.map((_item, index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`uppercase text-white text-2xl h-5
                  pb-2 mb-[-10px] mx-2 ${index === value && "bg-white rounded-full"}`}
              >
                <BsCircle className="h-5 w-5" />
              </button>
            ))}
          </article>

          <article>
            <img
              src={images.png}
              alt={name}
              title={name}
              className="block mx-auto lg:w-8/12 w-9/12 mt-16 lg:mt-4"
            />
          </article>
        </div>
      </section>
    </>
  )
}

export default Crew;