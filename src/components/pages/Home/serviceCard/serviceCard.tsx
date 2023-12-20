import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({
  imgUrl,
  servicesText,
}: {
  imgUrl: string;
  servicesText: string;
}) => {
  return (
    <div className="our-services-component animate-from-bottom ">
      <div className="our-services-component-icon-wrap flex">
        <div className="our-services-component-icon">
          <Image
            width={500}
            height={500}
            src={imgUrl}
            alt="services-component-icon"
          />
        </div>
      </div>
      <div className="our-services-component-content">
        <h5>{servicesText}</h5>
        <div className="our-services-component-btn">
          <Link href="/services" className="arrow-btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
