"use client";
import CommonPattern from "@/Shared/commonPattern/commonPattern";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// export const metadata = setMetaData("Contact");

const ContactPage = () => {
  const [tab, setTab] = useState("contact-tab-item-1");
  const tabButtonRef1 = useRef<HTMLLIElement | null>(null);
  const tabButtonRef2 = useRef<HTMLLIElement | null>(null);
  const handleTabChange = (currentTab: string) => {
    setTab(currentTab);
  };

  return (
    <section className="main-content-wrap contact-page">
      <div className="hero-wrap">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          <div className="hero-inner flex">
            <div className="hero-content-wrap">
              <h1 className="split-heading justify-center">
                Contact us to give a project or just say hello! 👋
              </h1>
              <p className="animate-from-bottom">
                Varius amet, integer tellus non eget viverra. Ultrices tellus
                donec gravida id sed senectus dolor cursus sed. Ullamcorper
                tellus ac cras nec, pretium laoreet duis.{" "}
              </p>
              <div className="hero-btn flex animate-from-bottom">
                <Link href="/contact" className="btn">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-wrap">
        <div className="common-wrap clear">
          <div className="contact-inner flex">
            <div className="contact-container flex">
              <div className="contact-tab-trigger flex animate-from-bottom">
                <ul>
                  <li className={`${tab === "contact-tab-item-1" && "active"}`}>
                    <Link
                      onClick={() => handleTabChange("contact-tab-item-1")}
                      href="#contact-tab-item-1"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className={`${tab === "contact-tab-item-2" && "active"}`}>
                    <Link
                      onClick={() => handleTabChange("contact-tab-item-2")}
                      href="#contact-tab-item-2"
                    >
                      Work with us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="contact-tab-item-wrap flex">
                <div
                  className="contact-tab-item animate-from-bottom"
                  id="contact-tab-item-1"
                >
                  <div className="contact-title animate-from-bottom">
                    <h2 className="split-heading justify-center">
                      Say hello to us !
                    </h2>
                    <p className="animate-from-bottom">
                      Write anything you want to say to say hello to us, or you
                      can send an email to{" "}
                      <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                    </p>
                  </div>
                  <form action="#">
                    <div className="input-row-wrap flex">
                      <div className="input-row flex">
                        <div className="input-col animate-from-bottom">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="input-col animate-from-bottom">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="input-row flex">
                        <div className="input-col animate-from-bottom">
                          <input type="number" placeholder="Phone" />
                        </div>
                        <div className="input-col animate-from-bottom">
                          <input type="mail" placeholder="Email" />
                        </div>
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <input
                          type="text"
                          placeholder="Company or organization"
                        />
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <textarea placeholder="Message or description"></textarea>
                      </div>
                      <div className="input-row input-row-submit flex animate-from-bottom">
                        <input type="submit" value="Send" />
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="contact-tab-item animate-from-bottom"
                  id="contact-tab-item-2"
                >
                  <div className="contact-title animate-from-bottom">
                    <h2 className="animate-from-bottom">
                      Trust your project to us
                    </h2>
                    <p className="animate-from-bottom">
                      Write anything you want to say to say hello to us, or you
                      can send an email to{" "}
                      <Link href="mailto:hello@square.co">hello@square.co</Link>
                    </p>
                  </div>
                  <form action="#">
                    <div className="input-row-wrap flex">
                      <div className="input-row flex">
                        <div className="input-col animate-from-bottom">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="input-col animate-from-bottom">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="input-row flex">
                        <div className="input-col animate-from-bottom">
                          <input type="number" placeholder="Phone" />
                        </div>
                        <div className="input-col animate-from-bottom">
                          <input type="mail" placeholder="Email" />
                        </div>
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <input
                          type="text"
                          placeholder="Company or organization"
                        />
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <h6 className="animate-from-bottom">
                          Project Category
                        </h6>
                        <div className="radio-input-row-wrap flex">
                          <div className="radio-input-row animate-from-bottom">
                            <input
                              type="radio"
                              id="radio-1"
                              name="projectCategory"
                            />
                            <label htmlFor="radio-1">UIUX Design</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input
                              type="radio"
                              id="radio-2"
                              name="projectCategory"
                            />
                            <label htmlFor="radio-2">Motion Design</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input
                              type="radio"
                              id="radio-3"
                              name="projectCategory"
                            />
                            <label htmlFor="radio-3">Prototype</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input
                              type="radio"
                              id="radio-4"
                              name="projectCategory"
                            />
                            <label htmlFor="radio-4">UX Research</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input
                              type="radio"
                              id="radio-5"
                              name="projectCategory"
                            />
                            <label htmlFor="radio-5">Graphic Design</label>
                          </div>
                        </div>
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <h6 className="animate-from-bottom">Your Budget</h6>
                        <div className="radio-input-row-wrap radio-input-row-budget flex">
                          <div className="radio-input-row animate-from-bottom">
                            <input type="radio" id="radio-6" name="Budget" />
                            <label htmlFor="radio-6">&lt; $5000</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input type="radio" id="radio-7" name="Budget" />
                            <label htmlFor="radio-7">$5,000 - $10,000</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input type="radio" id="radio-8" name="Budget" />
                            <label htmlFor="radio-8">$10,000 - $30,000</label>
                          </div>
                          <div className="radio-input-row animate-from-bottom">
                            <input type="radio" id="radio-9" name="Budget" />
                            <label htmlFor="radio-9"> $30,000</label>
                          </div>
                        </div>
                      </div>
                      <div className="input-row flex animate-from-bottom">
                        <textarea placeholder="Message or description"></textarea>
                      </div>
                      <div className="input-row input-row-submit flex animate-from-bottom">
                        <input type="submit" value="Send" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="get-in-touch-wrap">
        <div className="common-wrap clear">
          <div className="get-in-touch-inner flex">
            <div className="get-in-touch-thumb-wrap flex animate-from-bottom">
              <div className="common-pattern">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="get-in-touch-logo animate-from-bottom">
                <Image
                  width={500}
                  height={500}
                  src="svgs/contact/wbt-logo.svg"
                  alt="wbt-logo"
                />
              </div>
            </div>
            <div className="get-in-touch-content">
              <div className="get-in-touch-title">
                <h2 className="split-heading">Get in touch with us</h2>
                <p className="animate-from-bottom">
                  Nec non, et sed semper suspendisse. Sapien, ridiculus euismod
                  varius faucibus feugiat et dignissim porta id. Facilisi neque
                  nec id nunc massa. Nisl nibh faucibus nunc vel.{" "}
                </p>
              </div>
              <div className="get-in-touch-item-wrap flex">
                <div className="get-in-touch-item animate-from-bottom">
                  <div className="get-in-touch-item-icon">
                    <Link href="mailto:info@gmail.com">
                      <Image
                        width={500}
                        height={500}
                        src="svgs/contact/mail.svg"
                        alt="mail"
                      />
                    </Link>
                  </div>
                  <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                  <span>Email</span>
                </div>
                <div className="get-in-touch-item animate-from-bottom">
                  <div className="get-in-touch-item-icon">
                    <Link href="tel:+8801407-090991">
                      <Image
                        width={500}
                        height={500}
                        src="svgs/contact/tel.svg"
                        alt="tel"
                      />
                    </Link>
                  </div>
                  <Link href="tel:+8801407-090991">+8801407-090991</Link>
                  <span>Phone</span>
                </div>
                <div className="get-in-touch-item animate-from-bottom">
                  <div className="get-in-touch-item-icon">
                    <Link href="www.webtricker.com">
                      <Image
                        width={500}
                        height={500}
                        src="svgs/contact/web.svg"
                        alt="web"
                      />
                    </Link>
                  </div>
                  <Link href="www.webtricker.com">info@gmail.com</Link>
                  <span>Webiste</span>
                </div>
                <div className="get-in-touch-item animate-from-bottom">
                  <div className="get-in-touch-item-icon">
                    <Link href="mailto:info@gmail.com">
                      <Image
                        width={500}
                        height={500}
                        src="svgs/contact/address.svg"
                        alt="address"
                      />
                    </Link>
                  </div>
                  <Link href="https://www.google.com/maps/place/Webtricker+Web+Design+%26+Development+Agency/@24.9143954,89.9413507,229m/data=!3m1!1e3!4m5!3m4!1s0x0:0x209802aa6366f9da!8m2!3d24.9141901!4d89.9414119">
                    Zia College mor, Bagerhata, Jamalpur
                  </Link>
                  <span>Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-wrap">
        <div className="common-wrap clear">
          <div className="cta-inner flex animate-from-bottom">
            <div className="common-pattern">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="cta-content">
              <h2 className="split-heading justify-center">
                Have a project idea to collaborate with?
              </h2>
              <div className="cta-content-btn flex animate-from-bottom">
                <Link href="/contact" className="btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
