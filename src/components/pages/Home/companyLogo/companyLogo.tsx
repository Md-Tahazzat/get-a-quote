import Image from 'next/image';
import React from 'react';

const CompanyLogo = ({companyLogo}:{companyLogo:string}) => {
      return (
            <div className="find-us-item">
            <Image
              width={500}
              height={500}
              src={companyLogo}
              alt="Company-logo"
            />
            </div>
      );
};

export default CompanyLogo;