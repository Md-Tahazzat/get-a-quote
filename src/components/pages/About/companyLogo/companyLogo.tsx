import Image from 'next/image';
import React from 'react';

const CompanyLogo = ({companyImage}:{companyImage:string}) => {
      return (
            <>
                   <div className="clients-item animate-from-bottom">
                  <Image
                    width={500}
                    height={500}
                    src={companyImage}
                    alt="LOGO"
                  />
                </div>
            </>
      );
};

export default CompanyLogo;