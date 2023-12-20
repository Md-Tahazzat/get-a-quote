import React from "react";

const CommonPattern = ({ className, numOfDiv }: { className: string, numOfDiv:number}) => {
  return (
    <div className={className}>
      {
            Array.from(Array(numOfDiv).keys()).map((_, index) => {
                  return <div key={index}></div>;
                  }
            )
      }

    </div>
  );
};

export default CommonPattern;
