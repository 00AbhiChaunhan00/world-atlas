// import { use } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Img from '/src/Component/world.png'
export const HeroSection = () => {
  const navigate=useNavigate()
  function handleClick(){
    navigate("/country")

  }
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box" onClick={handleClick}  >
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src={Img}
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
  
};