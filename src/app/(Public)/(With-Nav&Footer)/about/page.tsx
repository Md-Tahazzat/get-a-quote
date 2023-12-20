import FooterIdea from "@/Shared/footerIdea/footerIdea";
import SectionTitle from "@/Shared/sectionTitle/sectionTitle";
import AboutHero from "@/components/pages/About/AboutHero/AboutHero";
import OurProcess from "@/components/pages/About/ourProcess/ourProcess";
import TeamMember from "@/components/pages/About/teamMember/teamMember";
// import { teamData } from "@/data/teamData";
import ClientLogo from "@/app/(Public)/about/ClientLogo/ClientLogo";
import { getTeamData } from "@/utility/fetchContent/fetchTeamData";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import Image from "next/image";
import Link from "next/link";

export const metadata = setMetaData("About");

const AboutPage = async () => {
  const teamData = await getTeamData();
  // console.log(teamData);
  return (
    <section className="main-content-wrap">
      {/* <div className="hero-wrap about-hero">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          <Hero />
        </div>
      </div>
      <div className="about-counter-wrap">
        <div className="common-wrap clear">
          <div className="about-counter-inner flex">
            <div className="about-counter-thumb animate-from-bottom">
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="/img/about/image-1.jpg"
                  alt="about-thumb"
                />
              </figure>
            </div>
            <div className="about-counter-item-wrap flex justify-center gap-4">
              <Counter title="Project Completed" number={100} />
              <Counter title="Award winner" number={4} />
              <Counter title="Satisfied Client" number={200} />
              <Counter title="Good Testimonials" number={300} />
            </div>
          </div>
        </div>
      </div> */}

      <AboutHero></AboutHero>
      <div className="exist-wrap animate-from-bottom">
        <div className="common-wrap clear">
          <div className="exist-inner flex">
            <div className="exist-thumb animate-from-bottom">
              <figure>
                <Image
                  width={500}
                  height={500}
                  src="/img/about/exist-thumb.jpg"
                  alt="exist-thumb"
                />
              </figure>
            </div>
            <div className="exist-content">
              <SectionTitle subtitle="Why do we exist" />
              <p className="animate-from-bottom">
                At Webtricker Web Design and Development Agency, our existence
                is woven with purpose, driven by a vision that transcends pixels
                and lines of code. Led by the visionary MD Mosharaf Hossain, our
                agency&apos;s raison d&apos;être goes beyond being a web design
                agency—it&apos;s about catalyzing digital metamorphosis. We
                exist to bridge the gap between creativity and technology,
                crafting responsive web design services that are not just
                exceptional, but the epitome of &quot;simply the best.&quot;
              </p>
              <p className="animate-from-bottom">
                Our existence is a tapestry of innovation, where every project
                is a canvas and every line of code an art form. We exist to
                transform brands into digital experiences, to be the architects
                of user interactions that evoke emotions, inspire actions, and
                leave lasting imprints. Our purpose transcends aesthetics;
                it&apos;s about creating connections that endure, forging
                relationships between brands and their audiences. We exist to
                transcend the ordinary, merging design with functionality, and
                weaving empathy into every pixel. MD Mosharaf Hossain&apos;s
                leadership is our guiding North Star, steering us towards
                excellence and pushing the boundaries of what&apos;s possible.
                Our existence is rooted in the belief that every brand, every
                story, deserves to be told through interfaces that are more than
                screens—they are gateways to dreams realized. We exist to be a
                beacon of innovation, igniting digital landscapes with
                responsive web design services that empower brands to thrive in
                the digital age.
              </p>
              <p className="animate-from-bottom">
                Our journey isn&apos;t just about existence; it&apos;s about
                co-creating futures, shaping digital narratives that redefine
                industries and reshape possibilities. In a world where the
                digital realm is a canvas of limitless potential, we exist to be
                the artists, the storytellers, and the architects of meaningful
                online experiences. Our existence is a commitment to being the
                best, a testament to our dedication to creating solutions that
                transcend expectations. It&apos;s a pledge to our clients that
                when they choose us, they choose excellence, innovation, and the
                promise of digital journeys that resonate. We exist because MD
                Mosharaf Hossain&apos;s vision drives us, because our passion
                fuels us, and because the desire to craft responsive web design
                services that are simply the best propels us forward. In every
                line of code we write, in every interface we sculpt, in every
                brand we empower, our existence finds purpose. We are Webtricker
                Web Design and Development Agency, and we exist to be more than
                a company—we are the architects of digital dreams, the conduits
                of digital transformation, and the embodiment of what it means
                to be the best in the world of web design and development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-wrap">
        <div className="common-wrap clear">
          <div className="clients-inner flex">
            <div className="clients-title animate-from-bottom">
              <SectionTitle subtitle="Our satisfied clients" />
            </div>
            <ClientLogo></ClientLogo>
            {/* <div className="clients-item-wrap flex">
              <CompanyLogo companyImage="/svgs/about/logo-1.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-2.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-3.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-4.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-5.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-6.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-7.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-8.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-9.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-10.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-11.svg" />
              <CompanyLogo companyImage="/svgs/about/logo-12.svg" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="team-wrap">
        <div className="common-wrap clear">
          <div className="team-inner flex">
            <div className="team-title animate-from-bottom">
              <SectionTitle subtitle="Let’s meet our team" />
            </div>
            <div className="team-component-wrap flex">
              {teamData &&
                teamData.map((teamMember, index) => (
                  <TeamMember
                    key={`${teamMember.name}-${index}`}
                    designation={teamMember.designation}
                    name={teamMember.name}
                    image={teamMember.image}
                    socialLinks={teamMember.socialLinks}
                  />
                ))}
            </div>
            <div className="team-btn flex animate-from-bottom">
              <Link href="#" className="btn transparent">
                Explore our team
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="process-wrap">
        <div className="common-wrap clear">
          <div className="process-inner flex">
            <div className="common-title process-title">
              <SectionTitle subtitle="Our process" />

              <p className="animate-from-bottom">
                Nec non, et sed semper suspendisse. Sapien, ridiculus euismod
                varius faucibus feugiat et dignissim porta id. Facilisi neque
                nec id nunc massa. Nisl nibh faucibus nunc vel.{" "}
              </p>
            </div>
            <div className="process-component-wrap flex">
              {/* //todo make this component dynamic  */}
              <OurProcess title="Research" />
              <OurProcess title="Wireframe" />
              <OurProcess title="Design" />
              <OurProcess title="Development" />
            </div>
          </div>
        </div>
      </div>
      <FooterIdea />
    </section>
  );
};

export default AboutPage;
