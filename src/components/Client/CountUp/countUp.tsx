"use client"
import React, { ReactNode } from 'react';
import CountUp, { useCountUp } from 'react-countup';

const CountUpWrapper = ({children,number}:{number:number,children:ReactNode;}) => {
      useCountUp({
            ref: 'countUpRef',
            end: number,
            enableScrollSpy: true,
            scrollSpyDelay: 100,
          });
      return (
            <CountUp enableScrollSpy start={0} end={number} duration={5} delay={0}>
            {({ countUpRef }) => (
              <em ref={countUpRef}>
                    
              {children}</em>
            )}
          </CountUp>
      );
};

export default CountUpWrapper;
/* 
"use client"
import React, { ReactNode } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CountUpWrapper = ({children,number}:{number:number,children:ReactNode;}) => {
      return (
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <em >
            {isVisible ? <CountUp  start={0} end={number} duration={5} delay={0} /> : null}
          </em>
        )}
      </VisibilitySensor>
            
      );
};

export default CountUpWrapper; */