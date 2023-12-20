
"use client"
import React, { useEffect, useState } from 'react';
import ServiceCard from '../serviceCard/serviceCard';
import SectionTitle from '@/Shared/sectionTitle/sectionTitle';
import useHeroData, { Hero } from '@/app/Hooks/useHeroData';
import { type } from 'os';


type TService = {
  id: string;
  name: string;
  image: string;
  
}[]
const OurServices = () => {
  const [heroData] = useHeroData()
  const [services, setHeroService] = useState<TService|[]>([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/homeService`)
      .then(res => res.json())
      .then(data => {
        setHeroService(data)
    })

  },[])

  return (
    <>
      <div className="our-services-wrap">
        <div className="common-wrap clear">
          <div className="our-services-inner flex">
            <div className="common-title our-services-title animate-from-bottom">
              <SectionTitle
                title={(heroData as Hero)[1]?.title}
                subtitle={(heroData as Hero)[1]?.subtitle}
              />
            </div>


            <div className="our-services-component-wrap flex">
              {
                services.map(service => {
                  return (
                    <>
                    
                      <ServiceCard
                        key={service.id}
                        imgUrl={service.image}
                        servicesText={service.name}
                      />
                    </>
                  )
                })
              }
             
            </div>

          </div>
        </div>
      </div>
      
    </>
  );
};

export default OurServices;