// import React from 'react'
import logo from "/assets/shared/logo.svg";
import hamsburger from "/assets/shared/icon-hamburger.svg";
import { Link } from "react-router-dom";

function Header() {

  const handleClick = () => {
    const navbar = document.querySelector('.navbar')
    const listItems = document.querySelectorAll(".list-items")

    navbar?.classList.toggle("open")
    listItems.forEach((item) => 
      item.addEventListener('click', () => 
      navbar?.classList.remove('open')) 
    )
  }
  return (
    <>
      <header className="header p-4 flex items-center
        justify-between w-full lg:flex-row">
        <div>
          <Link to="/"><img src={logo} alt="Space Tourism" title="Space Tourism" /></Link>
        </div>

        <nav className="navbar backdrop-blur-3xl absolute w-[calc(100vw-100px)] p-8 lg:p-5 h-screen lg:h-auto justify-end">
          <ul className="text-white">
            <li className="list-items">
              <Link to="/" className="lg:text-white lg:flex lg:items-center ">
                <span className="lg:text-2xl lg:font-bold mr-2">00</span> Home
              </Link>
            </li>
            <li className="list-items">
              <Link to="/destination" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-2xl lg:font-bold mr-2">01</span> Destination
              </Link>
            </li>
            <li className="list-items">
              <Link to="/crew" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-2xl lg:font-bold mr-2">02</span> Crew
              </Link>
            </li>
            <li className="list-items">
              <Link to="/technology" className="lg:text-white lg:flex lg:items-center">
                <span className="lg:text-2xl lg:font-bold mr-2">03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden">
          <button onClick={handleClick}>
            <img src={hamsburger} alt="navbar" className="text-white text-4xl" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header