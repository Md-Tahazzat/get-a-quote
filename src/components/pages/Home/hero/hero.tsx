"use client"
import useHeroData, { Hero } from "@/app/Hooks/useHeroData";
import Link from "next/link";

const Hero = () => {

  const [heroData, loading,]=useHeroData()

  return (
    <>
      <div className="hero-inner flex">
        <div className="hero-content-wrap">
          <div className="animate-from-bottom  ">
            
             
            {loading ? <h1 className="split-heading justify-center is-visible">WE ARE WEBTRICKER.  A WEB DESIGN &amp; DEVELOPMENT   AGENCY. </h1> : <h1 className="split-heading justify-center is-visible">{(heroData as Hero)[0]?.title}</h1>}
           
            
            
          </div>
          <p className="lead-text animate-from-bottom">
            
            {loading ? "Embrace the Magic of Possibility with Webtricker: Where Dreams Blossom into Digital Brilliance." : <>{ (heroData as Hero)[0]?.subtitle}</>}
          </p>
          <div className="hero-btn animate-from-bottom flex">
            <Link href="/services" className="btn">
              Services
            </Link>
            <Link href="/contact" className="btn transparent">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;