
"use client"
import React, { useState } from 'react';
import CompanyLogo from '../companyLogo/companyLogo';
import Image from 'next/image';
import './HeroVideo.css'
import useHeroData, { Hero } from '@/app/Hooks/useHeroData';
import Loading from '@/app/loading';

const HeroVideo = () => {
  const [heroData, loading,] = useHeroData()

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(false)
  }
  return (
    <div className="find-us-wrap">
      <div className="common-wrap clear">
        <div className="find-us-inner flex">
          <div className="find-us-thumb animate-from-bottom">
            {show ?
              <>

                <figure>
                  <Image
                    width={500}
                    height={500}
                    src="/img/IMAGE.jpg"
                    alt="IMAGE"
                  />


                </figure>
              </> :

              <>


                <div className="iframe-container">

                  {
                    loading ? <>
                      <div className='bg-gray-500 w-full h-full animate-pulse flex justify-center items-center'>
                        <Loading></Loading>
                     </div>
                    
                    </> : <>
                      <iframe
                        className='responsive-iframe'
                        src={(heroData as Hero)[0]?.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen

                      ></iframe>

                    </>
                  }
                </div>


                {/* <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/abbdJ4Yfm54?si=LqA6RxhGIP2DLpoj"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}



              </>}


            {show ? <div onClick={handleShow} className="play-btn"></div> : ""}

          </div>
          <div className="find-us-item-wrap flex animate-from-bottom ">
            <CompanyLogo companyLogo="/svgs/Company-logo-1.svg" />
            <CompanyLogo companyLogo="/svgs/Company-logo-2.svg" />
            <CompanyLogo companyLogo="/svgs/Company-logo-3.svg" />
            <CompanyLogo companyLogo="/svgs/Company-logo-4.svg" />
            <CompanyLogo companyLogo="/svgs/Company-logo-5.svg" />
          </div>
        </div>
      </div>
    </div>

  )
};

export default HeroVideo;