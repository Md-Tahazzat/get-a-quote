import CommonPattern from "@/Shared/commonPattern/commonPattern";
import FooterIdea from "@/Shared/footerIdea/footerIdea";
import SectionTitle from "@/Shared/sectionTitle/sectionTitle";
import AccordionComponent from "@/components/Client/accordion/accordion";
import SatisfiedClients from "@/components/pages/pricing/satisfiedClients/satisfiedClients";
import TestimonialComponent from "@/components/pages/pricing/testimonialComponent/testimonialComponent";
import { fetchServices } from "@/utility/fetchContent/fetchService";
import { setMetaData } from "@/utility/updateTitle/updateTitle";

export const metadata = setMetaData("Pricing");

const PricingPage = async () => {
  const services = (await fetchServices({})) || [];
  return (
    <section className="main-content-wrap pricing-page">
      <div className="hero-wrap">
        <CommonPattern className="common-pattern" numOfDiv={5} />
        <div className="common-wrap clear">
          <div className="hero-inner flex">
            <div className="hero-content-wrap">
              <h1 className="split-heading justify-center text-4xl md:text-5xl lg:text-[55px] font-bold split-heading !leading-[75px]">
                We have prepared various plans that might suit you
              </h1>
              <p className="animate-from-bottom">
                We offer a comprehensive range of services that cater to the
                entire spectrum of web design and development. Our expertise
                includes:
              </p>
              <div className="hero-btn flex animate-from-bottom">
                <a href="#" className="btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-wrap">
        <div className="common-wrap clear">
          <div className="pricing-inner flex">
            <div className="pricing-component-wrap flex animate-from-bottom">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="pricing-component animate-from-bottom"
                >
                  <div className="pricing-component-content-wrap">
                    <div className="pricing-component-title flex">
                      <h3>{service.name}</h3>
                    </div>
                    <p className="small-text">{service.descriptions}</p>
                    <span>
                      ${service.price}
                      <em>/{service.duration}</em>
                    </span>
                    <ul>
                      {service.serviceTypes
                        .sort((a, b) =>
                          a.status
                            .toLowerCase()
                            .localeCompare(b.status.toLowerCase())
                        )
                        .map((item) => (
                          <li
                            key={item.type}
                            className={` ${
                              item.status === "inactive" && "disabled"
                            }`}
                          >
                            {item.type}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="pricing-component-btn">
                    <a href="#">Discover More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="satisfied-clients-wrap">
        <div className="common-wrap clear">
          <div className="satisfied-clients-inner flex">
            <div className="satisfied-clients-title common-title">
              <SectionTitle subtitle="Our satisfied clients" />
            </div>
            <div className="satisfied-clients-item-wrap animate-from-bottom">
              <SatisfiedClients />
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-about-wrap">
        <div className="common-wrap clear">
          <div className="pricing-about-inner flex">
            <div className="pricing-about-title common-title">
              <SectionTitle subtitle=" What do they say about us" />
            </div>
            <div className="pricing-about-container flex">
              <div className="pricing-about-component-wrap pricing-about-component-first">
                <TestimonialComponent direction="left" />
              </div>
              <div className="pricing-about-component-wrap pricing-about-component-second">
                <TestimonialComponent direction="right" />
              </div>
              <div className="pricing-about-component-wrap pricing-about-component-third">
                <TestimonialComponent direction="left" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-wrap">
        <div className="common-wrap clear">
          <div className="faq-inner flex">
            <div className="faq-title common-title">
              <SectionTitle subtitle="Frequently Asked Questions" />
            </div>

            <div className="faq-accordion-wrap">
              <AccordionComponent />

              
            </div>
          </div>
        </div>
      </div>

      <FooterIdea />
    </section>
  );
};

export default PricingPage;
