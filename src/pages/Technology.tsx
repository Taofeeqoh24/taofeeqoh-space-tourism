import { useState } from "react";
import { technology } from "../starter-code/data.json";
// import { BsCircle } from "react-icons/bs";

function Technology() {
	const [card] = useState(technology);
	const [value, setValue] = useState(0);

	const { name, images, description } = card[value]

	return (
		<>
			<section className="technology px-5" >
				<h1 className="pt-30 lg:pt-30 lg:max-w-7xl lg:mx-auto
          text-white text-2xl uppercase text-center lg:text-left 
          lg:pl-40"
				>
					<span className="text-gray-400 m-2">03</span>
					Space Launch 101
				</h1>
				<div className="flex items-center justify-center flex-col-reverse md:grid md:grid-cols-2 
          gap-5 md:items-center lg:max-w-4xl lg:mx-auto mt-12 lg:mt-0 lg:text-center">
					<article className="text-center lg:text-left lg:flex items-center">
						<div className="lg:grid lg:grid-cols-1 g">
							{card.map((_item, index) => (
								<button
									key={index}
									onClick={() => setValue(index)}
									className={`uppercase text-white text-2xl h-12 w-12
                 rounded-full border-2 p-2 pb-2 m-2 lg:mr-20 border-white   
								 ${index === value && "bg-gray-900 text-white"}`
									}
								>
									{index + 1}
								</button>
							))}
						</div>
						<div className="lg:ml-12">
							<h5 className="text-2xl font-bold text-white
               my-5 uppercase tracking-widest">The Terminology</h5>
							<h2 className="text-4xl font-bold text-white
               mb-5 uppercase tracking-widest"
							>
								{name}
							</h2>
							<p className="text-gray-400 lg:w-2/3 mb-10">
								{description}
							</p>
						</div>


					</article>

					<article>
						<picture>
							<source media="(min-width: 768px)" srcSet={images.portrait} />
							<img
								src={images.landscape}
								alt={name}
								title={name}
								className="block lg:w-11/12 mt-16 lg:mt-4"
							/>
						</picture>
					</article>
				</div>
			</section>
		</>
	)
}

export default Technology;