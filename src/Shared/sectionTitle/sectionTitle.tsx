


import React from 'react';

const SectionTitle = ({ title, subtitle }: { title?: string, subtitle?: string }) => {
       


      return (
            <>
               <h6 className="split-heading justify-center">{title}</h6>
                  <h2 className="split-heading justify-center text-[32px] md:text-[40px] lg:text-[45px] font-bold">
                    {subtitle}
                  </h2>   
            </>
      );
};

export const SectionTitleLeftAlign = ({title, subtitle}:{title?:string, subtitle?:string}) => {
      return (
            <>
                  
                  <h6 className="split-heading ">{title}</h6>
                    <h2 className="split-heading text-[32px] md:text-[40px] lg:text-[45px] font-bold">
                     {subtitle}
                    </h2>
            </>
      );

}

export default SectionTitle;