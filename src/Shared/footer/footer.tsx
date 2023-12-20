import Image from "next/image";
import Link from "next/link";
import CommonPattern from "../commonPattern/commonPattern";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "linkedin",
      icon: "/svgs/linkedin.svg",
      link: "https://www.linkedin.com/company/webtricker/",
      alt: "",
    },
    {
      id: 2,
      name: "instagram",
      icon: "/svgs/instagram.svg",
      link: "https://www.instagram.com/webtricker/",
      alt: "",
    },
    {
      id: 3,
      name: "facebook",
      icon: "/svgs/facebook.svg",
      link: "https://www.facebook.com/webtricker",
      alt: "",
    },
    {
      id: 4,
      name: "twitter",
      icon: "/svgs/twitter.svg",
      link: "https://twitter.com/webtricker",
      alt: "",
    },
  ];
  return (
    <>
      {/* <!-- Beginning footer section--> */}
      <footer className="main-footer-section">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          <div className="footer-inner flex">
            <div className="footer-main flex">
              <div className="footer-info">
                <div className="footer-logo animate-from-bottom">
                  <Link href="/">
                    <Image
                      width={500}
                      height={500}
                      src="/svgs/main-logo.svg"
                      alt="main-logo"
                    />
                  </Link>
                </div>
                <div className="footer-info-list animate-from-bottom">
                  <ul>
                    <li>
                      <Link href="www.webtricker.com">
                        <Image
                          width={500}
                          height={500}
                          src="/svgs/internet.svg"
                          alt="internet"
                        />
                        <span>www.webtricker.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@webtricker.com">
                        <Image
                          width={500}
                          height={500}
                          src="/svgs/mail.svg"
                          alt="internet"
                        />
                        <span>info@webtricker.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+8801712377577">
                        <Image
                          width={500}
                          height={500}
                          src="/svgs/tel.svg"
                          alt="internet"
                        />
                        <span>+8801712377577</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget-wrap flex">
                <div className="footer-widget animate-from-bottom">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget animate-from-bottom">
                  <h6>Project</h6>
                  <ul>
                    <li>
                      <Link href="/portfolios">Works</Link>
                    </li>
                    <li>
                      <Link href="/about">Team</Link>
                    </li>
                    <li>
                      <Link href="/services">Pricing</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget big-widget animate-from-bottom">
                  <h6>Support</h6>
                  <ul>
                    <li>
                      <Link href="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget big-widget social-widget animate-from-bottom">
                  <h6>Support</h6>
                  <ul>
                    {socialLinks.map((item) => (
                      <li key={item?.id}>
                        <Link href={item?.link} target="_blank">
                          <Image
                            width={500}
                            height={500}
                            src={item?.icon}
                            alt={item?.name}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom animate-from-bottom ">
              <p className="">
                {new Date().getFullYear()} Webtricker. All Rights Reserved
              </p>
              <div
                style={{
                  width: "100%",
                  height: "1rem",
                }}
                className=""
              ></div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- //End main footer section --> */}
    </>
  );
};

export default Footer;
