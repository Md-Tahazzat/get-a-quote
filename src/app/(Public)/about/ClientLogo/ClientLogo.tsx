"use client"

import CompanyLogo from '@/components/pages/About/companyLogo/companyLogo';
import React, { useEffect, useState } from 'react';
type TClient = {
  id: string;
  image: string;
}[]

const ClientLogo = () => {

  const [clientLogo, setClientLogo] = useState<TClient>([])
  useEffect(() => {
     
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient`)
      .then(res => res.json())
      .then(data => {
        setClientLogo(data)
        console.log(data);
     })

  },[])


  return (
    <>
      <div className="clients-item-wrap flex">
        {clientLogo.map(client => {
          return (
            <>
            
              <CompanyLogo key={client?.id} companyImage={ client?.image} />
            </>
          )
        })}
      </div>
      
    </>
  );
};

export default ClientLogo;