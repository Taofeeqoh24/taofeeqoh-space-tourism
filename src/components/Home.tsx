import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home px-5">
        <div className="overlay flex flex-col items-center justify-center 
          text-center text-white lg:flex lg:flex-row lg:justify-around">
          <article className="lg:text-left lg:mt-40">
            <h1 className="text-2xl text-gray-400 tracking-wider">
              SO, YOU WANT TO TRAVEL TO
              <span className="block text-6xl lg:text-9xl text-white mt-5 mb-10"> SPACE</span>
            </h1>
            <p className="text-gray-400 tracking-wider lg:w-90 lg:tracking-wide">
              Let’s face it; if you want to go to
              space, you might as well genuinely go to
              outer space and not hover kind of on the
              edge of it. Well sit back, and relax
              because we’ll give you a truly out of this
              world experience!
            </p>
          </article>

          <article className="mt-20">
            <button className="w-48 h-48 rounded-full bg-white
             text-gray-800 uppercase font-bold text-4xl 
             lg:text-4xl animate-pulse ">
              <Link to="/destination">
                Explore
              </Link>
            </button>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home;