import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  projectImgUrl,
  projectTitle,
  projectSubtitle,
  id,
}: {
  projectImgUrl: string;
  projectTitle: string;
  projectSubtitle: string;
  id: string;
}) => {
  return (
    <Link  className="project-component animate-from-bottom" href={`/portfolios/${id}`}>
      <>
        <div className="project-component-thumb">
          <figure>
            <Image
              width={500}
              height={500}
              src={projectImgUrl}
              alt="project-component-thumb"
            />
          </figure>
        </div>
        <div className="project-component-content">
          <h4 className="split-heading text-2xl font-bold">{projectTitle}</h4>
          <p className="small-text animate-from-bottom">{projectSubtitle}</p>
          <div className="project-component-content-btn animate-from-bottom">
            <div className="secondary-arrow-btn">See Detail Project</div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default ProjectCard;
