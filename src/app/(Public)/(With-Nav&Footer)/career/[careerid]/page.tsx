import Link from "next/link";
import React from "react";

const CarrierSinglePage = () => {
  return (
    <section className="main-content-wrap career-details-page">
      <div className="career-detail-hero-wrap">
        <div className="common-wrap clear">
          <div className="career-detail-hero-inner flex">
            <div className="career-detail-hero-content">
              <h2 className="split-heading">Senior Product Designer</h2>
              <p className="animate-from-bottom">Design • Remote • Fulltime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="career-submission-wrap">
        <div className="common-wrap clear">
          <div className="career-submission-inner flex">
            <div className="career-submission-content-wrap flex">
              <div className="career-submission-content animate-from-bottom">
                <h5 className="split-heading">Job Overview</h5>
                <p>
                  Dui sed elementum, ornare etiam mauris purus eu quam. Commodo
                  posuere duis pellentesque vel etiam turpis sed. Fermentum
                  eleifend ut neque, fringilla nisl convallis. Nibh tincidunt
                  diam aliquam, et. Adipiscing consequat amet, at mattis magna
                  amet, urna duis. Ut purus tincidunt viverra faucibus cursus
                  convallis aliquam. Amet mi nibh sed neque, phasellus neque.
                  Eget imperdiet eget ut laoreet cursus enim. Placerat vitae id
                  tempor tempus ullamcorper arcu fermentum viverra. Diam morbi
                  tellus amet eget consequat. Volutpat enim tortor ut in.{" "}
                </p>
              </div>
              <div className="career-submission-content animate-from-bottom">
                <h5 className="split-heading">Requirement</h5>
                <ul>
                  <li>
                    Sagittis pellentesque nisi tincidunt congue tincidunt ut
                    urna rhoncus dis.{" "}
                  </li>
                  <li>
                    Ut neque, ullamcorper sit hac porta accumsan. Aliquet
                    ultricies amet euismod ac consequat{" "}
                  </li>
                  <li>
                    consectetur augue sed. Nisl amet, in nibh dolor, sit aliquet
                    et, lacus. Parturient purus ut amet gravida.{" "}
                  </li>
                  <li>
                    Donec rutrum egestas est, integer. Ultricies venenatis
                    venenatis tincidunt at et congue. Pharetra{" "}
                  </li>
                  <li>
                    sed eros, leo bibendum pulvinar a elit, tortor et. Fringilla
                    arcu dignissim aenean cras.
                  </li>
                </ul>
              </div>
            </div>
            <div className="career-submission-form">
              <h2 className="split-heading">Form Submission</h2>
              <p className="animate-from-bottom">
                Faucibus mi pellentesque ac congue in at porta sed in. Odio sed
                nisl platea ut praesent et dignissim luctus.
              </p>
              <form action="#">
                <div className="input-row-wrap flex">
                  <div className="input-row flex">
                    <div className="input-col animate-from-bottom">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-col animate-from-bottom">
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="input-row flex">
                    <div className="input-col animate-from-bottom">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-col animate-from-bottom">
                      <input type="file" placeholder="Email" />
                    </div>
                  </div>
                  <div className="input-row flex animate-from-bottom">
                    <textarea placeholder="Message or description"></textarea>
                  </div>
                  <div className="input-row input-row-submit flex animate-from-bottom">
                    <input type="submit" value="Apply" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="positions-wrap">
        <div className="common-wrap clear">
          <div className="positions-inner flex">
            <div className="positions-title">
              <h2 className="split-heading">Other Open Positions</h2>
              <p className="animate-from-bottom">
                Nec non, et sed semper suspendisse. Sapien, ridiculus euismod
                varius faucibus feugiat et dignissim porta id. Facilisi neque
                nec id nunc massa. Nisl nibh faucibus nunc vel.{" "}
              </p>
            </div>
            <div className="positions-component-wrap flex">
              <div className="positions-component flex animate-from-bottom">
                <div className="positions-component-content animate-from-bottom">
                  <h4>Senior Product Designer</h4>
                  <p>Design • Remote • Fulltime</p>
                </div>
                <div className="positions-component-btn animate-from-bottom">
                  <Link
                    href="/career/career-details"
                    className="btn transparent"
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="positions-component flex animate-from-bottom">
                <div className="positions-component-content animate-from-bottom">
                  <h4>Lead Developer</h4>
                  <p>Development • Onsite • Fulltime</p>
                </div>
                <div className="positions-component-btn animate-from-bottom">
                  <Link
                    href="/career/career-details"
                    className="btn transparent"
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="positions-component flex animate-from-bottom">
                <div className="positions-component-content animate-from-bottom">
                  <h4>Senior Sales Manager</h4>
                  <p>Marketing • Remote • Fulltime</p>
                </div>
                <div className="positions-component-btn animate-from-bottom">
                  <Link
                    href="/career/career-details"
                    className="btn transparent"
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className="positions-component flex animate-from-bottom">
                <div className="positions-component-content animate-from-bottom">
                  <h4>UIUX Designer</h4>
                  <p>Designer • Onsite • Parttime</p>
                </div>
                <div className="positions-component-btn animate-from-bottom">
                  <Link
                    href="/career/career-details"
                    className="btn transparent"
                  >
                    Apply
                  </Link>
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

export default CarrierSinglePage;
