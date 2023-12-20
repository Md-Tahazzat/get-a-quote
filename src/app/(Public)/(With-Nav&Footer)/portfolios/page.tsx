import CommonPattern from "@/Shared/commonPattern/commonPattern";
import FooterIdea from "@/Shared/footerIdea/footerIdea";
import ProjectCard from "@/components/pages/Home/projectCard/projectCard";
import { fetchProjects } from "@/utility/fetchContent/fetchProjects";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const Work = async () => {
  const projects = (await fetchProjects({ skip: 1 })) as Project[];
  const heroProject = (await fetchProjects({})) as Project[];

  return (
    <section className="main-content-wrap work-page">
      <div className="hero-wrap">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          <div className="hero-inner flex">
            <div className="hero-content-wrap">
              <h1 className="split-heading justify-center">
                See the various kinds of best projects we have completed
              </h1>
              <p className="animate-from-bottom">
                Varius amet, integer tellus non eget viverra. Ultrices tellus
                donec gravida id sed senectus dolor cursus sed. Ullamcorper
                tellus ac cras nec, pretium laoreet duis.{" "}
              </p>
              <div className="hero-btn flex animate-from-bottom">
                {/* //todo link id is added dynamically */}
                <Link href="/portfolios/portfolios-details-Id" className="btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="largest-work-wrap">
        <div className="common-wrap clear">
          <div className="largest-work-inner flex">
            {heroProject?.length > 0 && (
              <Link href={`/portfolios/${heroProject[0].id}`}>
                {" "}
                <div className="largest-work-component flex">
                  {/* //todo link id is added dynamically */}
                  <div className="work-component-thumb animate-from-bottom">
                    <figure>
                      <Image
                        width={500}
                        height={500}
                        src={heroProject[0].projectUrl ?? "/img/cover-1.jpg"}
                        alt="blog-thumb"
                      />
                    </figure>
                  </div>
                  <div className="largest-work-component-content">
                    <div className="work-component-content animate-from-bottom">
                      <h2 className="split-heading">
                        {heroProject[0].projectName}
                      </h2>
                      <p>{heroProject[0].projectDescription}</p>
                    </div>
                    <div className="project-component-content-btn animate-from-bottom">
                      {/* //todo link id is added dynamically */}
                      <div className="secondary-arrow-btn">
                        See Detail Project
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="our-project-wrap">
        <div className="common-wrap clear">
          <div className="our-project-inner flex">
            <div className="project-component-wrap flex">
              {projects?.length > 0 &&
                projects?.map((project: Project) => (
                  <ProjectCard
                    id={project.id}
                    key={project.id}
                    // projectImgUrl={"/img/cover-1.jpg"}
                    projectImgUrl={project.projectUrl ?? "/img/cover-1.jpg"}
                    projectTitle={project.projectName}
                    projectSubtitle={project.projectDescription ?? ""}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <FooterIdea />
    </section>
    
  );
};

export default Work;
