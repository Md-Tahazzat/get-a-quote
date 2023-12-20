import FooterIdea from "@/Shared/footerIdea/footerIdea";
import {
  fetchProjects,
  fetchSingleProjects,
} from "@/utility/fetchContent/fetchProjects";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default async function WorkDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  const projects = (await fetchProjects({ limit: 4 })) as Project[];

  const randomProjects = shuffleArray(projects);

  function shuffleArray(array: any) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const singleProject: any = await fetchSingleProjects(id);

  // console.log(singleProject)
  return (
    <section className="main-content-wrap work-details-page">
      <div className="work-details-wrap">
        <div className="common-wrap clear">
          <div className="work-details-inner flex">
            <div className="work-details-title-and-content flex">
              <div className="work-details-title">
                <h2 className="split-heading">
                  {singleProject?.project?.projectName}
                </h2>
              </div>
              <div className="work-details-content animate-from-bottom">
                <p className="animate-from-bottom">
                  {singleProject?.project?.projectDescription}
                </p>
              </div>
            </div>
            <div className="work-details-thumb animate-from-bottom w-96">
              <Image
                width={500}
                height={500}
                alt=""
                src={singleProject?.project?.projectUrl}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                }}
              />
            </div>
            <div className="work-details-driscription-wrap flex">
              <div className="work-details-driscription flex">
                <div className="work-details-driscription-content-wrap flex">
                  <div className="work-details-driscription-content">
                    <h2 className="split-heading">Client</h2>
                    <p className="animate-from-bottom">
                      {singleProject?.project?.clientDescription}
                    </p>
                  </div>
                </div>
                <div className="work-details-driscription-content-wrap flex">
                  <div className="work-details-driscription-content">
                    <h2 className="split-heading">Project Goals</h2>
                    <p className="animate-from-bottom">
                      {singleProject?.project?.projectGoals}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-details-video-wrap animate-from-bottom">
              {singleProject?.project?.projectOverviewVideo ? (
                <iframe
                  style={{
                    width: "100%",
                  }}
                  width="560"
                  height="415"
                  src={`${singleProject?.project?.projectOverviewVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <figure>
                    <Image
                      width={500}
                      height={500}
                      src="/img/portfolios/IMAGE.jpg"
                      alt="IMAGE"
                    />
                  </figure>
                  <div className="work-details-play-btn">
                    <Image
                      width={500}
                      height={500}
                      src="/svgs/portfolios/play-btn.svg"
                      alt="play-btn"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="work-details-content-component-wrap flex">
              <div className="work-details-content-component">
                <h2 className="split-heading">Problems</h2>
                <p className="animate-from-bottom">
                  {singleProject?.project?.projectProblem}
                </p>
              </div>
              <div className="work-details-content-component">
                <h2 className="split-heading">Solutions</h2>
                <p className="animate-from-bottom">
                  {singleProject?.project?.projectSolutions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-work-wrap">
        <div className="common-wrap clear">
          <div className="related-work-inner flex">
            <div className="related-work-title animate-from-bottom">
              <h2 className="split-heading">More Project</h2>
            </div>
            <div className="related-work-component-wrap flex">
              {randomProjects.length > 0 &&
                randomProjects.map((project: Project) => (
                  <Link
                    key={project.id}
                    href={`/portfolios/${project?.id}`}
                    className="project-component animate-from-bottom"
                  >
                    <div className="project-component-thumb">
                      <figure>
                        <Image
                          width={500}
                          height={500}
                          src={project.projectUrl ?? "/img/cover-1.jpg"}
                          alt="project-component-thumb"
                        />
                      </figure>
                    </div>
                    <div className="project-component-content">
                      <h4 className="split-heading">{project.projectName}</h4>
                      <p className="small-text">
                        {project.projectDescription ?? ""}{" "}
                      </p>
                      <div className="project-component-content-btn">
                        <Link
                          href={`/portfolios/${project?.id}`}
                          className="secondary-arrow-btn"
                        >
                          See Detail Project
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <FooterIdea />
    </section>
  );
}

// export default WorkDetails;
