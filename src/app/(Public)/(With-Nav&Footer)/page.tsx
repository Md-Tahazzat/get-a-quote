import CommonPattern from "@/Shared/commonPattern/commonPattern";
import FooterIdea from "@/Shared/footerIdea/footerIdea";
import SectionTitle, {
  SectionTitleLeftAlign,
} from "@/Shared/sectionTitle/sectionTitle";
import Testimonial from "@/components/Client/testimonial/testimonial";
import BlogTitle from "@/components/pages/Home/BlogTitle/BlogTitle";
import HeroVideo from "@/components/pages/Home/HeroVideo/HeroVideo";
import HomeAbout from "@/components/pages/Home/HomeAbout/HomeAbout";
import OurServices from "@/components/pages/Home/OurServices/OurServices";
import ProjectTitle from "@/components/pages/Home/ProjectTitle/ProjectTitle";
import Hero from "@/components/pages/Home/hero/hero";
import ProjectCard from "@/components/pages/Home/projectCard/projectCard";
import { BlogType } from "@/types/types";
import { fetchBlogs } from "@/utility/fetchContent/fetchBlog";
import { fetchProjects } from "@/utility/fetchContent/fetchProjects";
import formattedDate from "@/utility/formattedDate";
import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const blogs = (await fetchBlogs({ limit: 3 })) as BlogType[];
  const projects = (await fetchProjects({ limit: 4 })) as Project[];
   
  return (
    <>
      <section className="main-content-wrap">
        <div className="hero-wrap">
          <CommonPattern className="common-pattern" numOfDiv={5} />
          <div className="common-wrap clear">
            <Hero />
          </div>
        </div>
        <HeroVideo></HeroVideo>

        <HomeAbout></HomeAbout>

        {/* our services */}
        <OurServices></OurServices>

        <div className="our-project-wrap">
          <div className="common-wrap clear">
            <div className="our-project-inner flex">
               <ProjectTitle></ProjectTitle>
              <div className="project-component-wrap flex">
                {/* //todo make it dynamic later */}
                {projects &&
                  projects?.map((project: Project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      // projectImgUrl={"/img/cover-1.jpg"}
                      projectImgUrl={project.projectUrl ?? "/img/cover-1.jpg"}
                      projectTitle={project.projectName}
                      projectSubtitle={project.projectDescription ?? ""}
                    />
                  ))}
              </div>
              <div className="our-project-btn flex animate-from-bottom">
                <Link href="/portfolios" className="btn transparent">
                  See More Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-wrap">
          <div className="common-wrap clear">
            <div className="testimonial-inner flex">
              <div className="testimonial-title-wrap">
                <div className="testimonial-title animate-from-bottom">
                  <SectionTitleLeftAlign
                    title="TESTIMONIAL"
                    subtitle="What do they say about us?"
                  />
                </div>
              </div>
              <div className="testimonial-component-wrap">
                {/* //todo make it dynamic  */}

                <Testimonial />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-wrap">
          <div className="common-wrap clear">
            <div className="blog-inner flex">
             <BlogTitle></BlogTitle>
              <div className="blog-component-wrap flex">
                {/*//! single blog is start from here */}
                {blogs &&
                  blogs.map((blog) => {
                    return (
                      <div
                        key={blog.id}
                        className="blog-component animate-from-bottom"
                      >
                       
                          <Link href={`/blog/${blog.id}`} className="blog-component-thumb">
                            <figure>
                              <Image
                                width={500}
                                height={500}
                                src={blog.themeImage}
                                alt="blog-thumb"
                              />
                            </figure>
                          </Link>
                     
                        <div className="blog-component-content">
                          <Link href="/blog/blog-details">
                            <h5>{blog.title}</h5>
                          </Link>
                          <p>{blog.shortDescription}</p>
                        </div>
                        <div className="blog-component-author flex">
                          <div className="blog-component-author-thumb">
                            <figure>
                              <Image
                                width={500}
                                height={500}
                                src="/img/blog-author-1.png"
                                alt="blog-author"
                              />
                            </figure>
                          </div>
                          <div className="blog-component-author-content">
                            <h6>{blog.author.name}</h6>
                            <em>{formattedDate(blog.createdAt)}</em>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/*//! single blog is end here */}
              </div>
            </div>
          </div>
        </div>

        <FooterIdea />
      </section>
    </>
  );
};
export default HomePage;
