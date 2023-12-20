"use client"

import { useEffect, useState } from "react";

 export type Hero = {
  id: string;
  title: string;
    subtitle: string;   
    section: string;
    video: string;
}[]

const useHeroData = () => {
   const [heroData, setHeroData] = useState<Hero|[]>([])
   const [loading,setLoading]=useState<boolean>(false)
   const getHeroData = async () => {
      setLoading(true)
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/hero`);
         const data = await response.json();
         setHeroData(data);
         setLoading(false)
      } catch (error) {
         console.error("Error fetching hero data:", error);
      }
   };
  useEffect(() => {
     getHeroData()

  },[])  
    
   return [heroData, loading, setHeroData, getHeroData, ]
   
};

export default useHeroData;