'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SatisfiedClients = () => {
  return (
    <Marquee>
        
        <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-2.png"
                  alt="LOGO"
                />
              </div>
              <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-3.png"
                  alt="LOGO"
                />
              </div>
              <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-4.png"
                  alt="LOGO"
                />
              </div>
              <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-2.png"
                  alt="LOGO"
                />
              </div>
              <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-3.png"
                  alt="LOGO"
                />
              </div>
              <div className="satisfied-clients-item">
                <Image
                  width={500}
                  height={500}
                  src="/img/pricing/LOGO-4.png"
                  alt="LOGO"
                />
              </div>
    </Marquee>
  )
}

export default SatisfiedClients