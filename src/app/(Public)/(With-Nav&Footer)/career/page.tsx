import CommonPattern from "@/Shared/commonPattern/commonPattern";
import Hero from "@/components/pages/career/hero/hero";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import Image from "next/image";
import Link from "next/link";

export const metadata = setMetaData("Career");

const CareerPage = () => {
  return (
    <div>
      <section className="main-content-wrap career-page">
        <div className="hero-wrap">
          <CommonPattern className="common-pattern" numOfDiv={5} />

          <Hero
            title="Find a role that suits you, and join us"
            description="Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium laoreet duis."
          />
        </div>

        <div className="career-information-wrap">
          <div className="common-wrap clear">
            <div className="career-information-inner flex">
              <div className="career-information-thumb animate-from-bottom">
                <figure>
                  <Image
                    width={500}
                    height={400}
                    src="/img/career/IMAGE.jpg"
                    alt="IMAGE"
                  />
                </figure>
              </div>
              <div className="career-information-container flex">
                <div className="career-information-item-wrap flex">
                  <div className="career-information-item flex animate-from-bottom">
                    <div className="career-information-item-icon">
                      <Image
                        width={500}
                        height={400}
                        src="/svgs/career/profile.svg"
                        alt="profile"
                      />
                    </div>
                    <div className="career-information-item-content">
                      <span>120</span>
                      <em>Good People</em>
                    </div>
                  </div>
                  <div className="career-information-item flex animate-from-bottom">
                    <div className="career-information-item-icon">
                      <Image
                        width={500}
                        height={400}
                        src="/svgs/career/global.svg"
                        alt="profile"
                      />
                    </div>
                    <div className="career-information-item-content">
                      <span>16</span>
                      <em>Different Country</em>
                    </div>
                  </div>
                  <div className="career-information-item flex animate-from-bottom">
                    <div className="career-information-item-icon">
                      <Image
                        width={500}
                        height={400}
                        src="/svgs/career/bag.svg"
                        alt="profile"
                      />
                    </div>
                    <div className="career-information-item-content">
                      <span>54</span>
                      <em>Roles available</em>
                    </div>
                  </div>
                </div>
                <div className="career-information-content animate-from-bottom">
                  <h2 className="split-heading">
                    We work together and create something great
                  </h2>
                  <p className="animate-from-bottom">
                    Ornare egestas ac ac vel tempus vestibulum. Diam praesent
                    sit a aenean tellus, ultrices sed. Pulvinar enim lorem amet,
                    nunc lorem pharetra et magna. Ultrices id tincidunt ipsum
                    amet. Lectus elit diam egestas ullamcorper tellus
                    pellentesque. Dictumst neque nunc dui nisl, orci tincidunt
                    donec consectetur at.{" "}
                  </p>
                  <p>
                    Pellentesque fames dignissim ullamcorper ultricies. Sit
                    mattis at mollis ipsum at. Suspendisse commodo id
                    scelerisque mattis pretium, posuere nullam quam. Fringilla
                    velit et et lacus, ultricies urna lorem tellus integer.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="positions-wrap">
          <div className="common-wrap clear">
            <div className="positions-inner flex">
              <div className="positions-title ">
                <h2 className="split-heading">Open Positions</h2>
                <p className="animate-from-bottom">
                  Nec non, et sed semper suspendisse. Sapien, ridiculus euismod
                  varius faucibus feugiat et dignissim porta id. Facilisi neque
                  nec id nunc massa. Nisl nibh faucibus nunc vel.{" "}
                </p>
              </div>
              <div className="positions-component-wrap flex">
                <div className="positions-component flex animate-from-bottom">
                  <div className="positions-component-content">
                    <h4 className="split-heading">Senior Product Designer</h4>
                    <p className="animate-from-bottom">
                      Design • Remote • Fulltime
                    </p>
                  </div>
                  <div className="positions-component-btn animate-from-bottom">
                    {/* //todo change link dynamically */}
                    <Link href="/career/careerId" className="btn transparent">
                      Apply
                    </Link>
                  </div>
                </div>
                <div className="positions-component flex animate-from-bottom">
                  <div className="positions-component-content animate-from-bottom">
                    <h4 className="split-heading">Lead Developer</h4>
                    <p className="animate-from-bottom">
                      Development • Onsite • Fulltime
                    </p>
                  </div>
                  <div className="positions-component-btn animate-from-bottom">
                    {/* //todo change link dynamically */}
                    <Link href="/career/careerId" className="btn transparent">
                      Apply
                    </Link>
                  </div>
                </div>
                <div className="positions-component flex animate-from-bottom">
                  <div className="positions-component-content animate-from-bottom">
                    <h4 className="split-heading">Senior Sales Manager</h4>
                    <p className="animate-from-bottom">
                      Marketing • Remote • Fulltime
                    </p>
                  </div>
                  <div className="positions-component-btn animate-from-bottom">
                    {/* //todo change link dynamically */}
                    <Link href="/career/careerId" className="btn transparent">
                      Apply
                    </Link>
                  </div>
                </div>
                <div className="positions-component flex animate-from-bottom">
                  <div className="positions-component-content animate-from-bottom">
                    <h4 className="split-heading">UIUX Designer</h4>
                    <p className="animate-from-bottom">
                      Designer • Onsite • Parttime
                    </p>
                  </div>
                  <div className="positions-component-btn animate-from-bottom">
                    {/* //todo change link dynamically */}
                    <Link href="/career/careerId" className="btn transparent">
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit-wrap">
          <div className="common-wrap clear">
            <div className="benefit-inner flex">
              <div className="common-title benefit-title animate-from-bottom">
                <h2 className="split-heading justify-center">
                  Perks and benefit
                </h2>
              </div>
              <div className="benefit-component-wrap flex">
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Health insurance</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Life insurance</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Life insurance</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Paid time off</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Flexible scheduling</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Remote work</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Career development</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Reward programs</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Wellness programs</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Lunch stipend </h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Work/life balance</h5>
                </div>
                <div className="benefit-component animate-from-bottom">
                  <em></em>
                  <h5>Child care</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-mission-wrap">
          <div className="common-wrap clear">
            <div className="our-mission-inner flex">
              <div className="our-mission-thumb animate-from-bottom">
                <figure>
                  <Image
                    width={500}
                    height={400}
                    src="/img/career/mission.jpg"
                    alt="mission"
                  />
                </figure>
              </div>
              <div className="our-mission-content">
                <h6 className="split-heading ">OUR MISSION</h6>
                <h2 className="split-heading">How we reach our goal</h2>
                <p className="animate-from-bottom">
                  Embarking on a journey infused with ingenuity, dedication, and
                  unwavering commitment, Webtricker Web Design and Development
                  Agency is guided by a collective vision that fuels our
                  aspirations. Our dream of standing as the epitome of web
                  design agencies, renowned for offering &quot;simply the
                  best&quot; responsive web design services, unfurls through a
                  symphony of strategies rooted in our values and shared
                  passion. Our path to this pinnacle is painted with the hues of
                  creativity and cutting-edge technology, crafting immersive
                  digital experiences that transcend expectations and resonate
                  on an emotional level.
                </p>
                <p className="animate-from-bottom">
                  Our expedition begins with a deep dive into the essence of
                  each project, unraveling client objectives, understanding
                  target audiences, and decoding industry landscapes.
                  Collaboration becomes our bedrock, intertwining design and
                  development to sculpt interfaces that captivate both visually
                  and functionally, for we are not just creators; we are
                  storytellers weaving brand tales through the threads of code,
                  user interactions, and visual marvels. Our journey dances to
                  the rhythm of innovation, swaying with the winds of evolving
                  trends and technologies that shape the digital era.
                </p>
                <p className="animate-from-bottom">
                  Nurturing a culture of perpetual learning, we empower our team
                  to venture beyond boundaries, making each project an
                  opportunity to transcend norms and break new ground. The heart
                  of our pursuit is guided by unwavering transparency, steadfast
                  integrity, and an unyielding pursuit of perfection. Our
                  interactions with clients evolve into deep-rooted partnerships
                  based on trust, empathy, and shared dreams. Through open lines
                  of communication and meticulous project management, we
                  translate our clients&apos; visions into digital symphonies
                  that resonate with souls.
                </p>
                <p className="animate-from-bottom">
                  {" "}
                  Our aim transcends mere satisfaction; we are driven to
                  consistently surpass expectations. Success is not just
                  measured in deliverables, but also in the genuine smiles we
                  bring to our clients&apos; faces. Our approach is painted with
                  empathy, crafting solutions that truly cater to user needs,
                  evoke emotions, and spark profound interactions. The voyage of
                  Webtricker Web Design and Development Agency towards the apex
                  of success is a testament to our unwavering dedication,
                  pioneering spirit, and commitment to redefining norms. With
                  each stride, we draw closer to our ultimate vision of being
                  the unparalleled web design agency, weaving dreams with our
                  &quot;simply the best&quot; responsive web design services,
                  and creating a digital landscape that resonates with hearts
                  and aspirations
                </p>
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
    </div>
  );
};

export default CareerPage;
