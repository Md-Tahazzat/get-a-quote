import CommonPattern from "@/Shared/commonPattern/commonPattern";
import { fetchBlogs } from "@/utility/fetchContent/fetchBlog";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import Image from "next/image";
import Link from "next/link";

export const metadata = setMetaData("Blog");

const BlogPage = async () => {
  const blogs = await fetchBlogs({ skip: 1 });
  const heroBlog = await fetchBlogs({ limit: 1 });
  return (
    <section className="main-content-wrap blog-page">
      <div className="hero-wrap">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          <div className="hero-inner flex">
            <div className="hero-content-wrap">
              <h1 className="split-heading justify-center">
                Check out our various blogs for your new knowledge
              </h1>
              <p className="animate-from-bottom">
                Varius amet, integer tellus non eget viverra. Ultrices tellus
                donec gravida id sed senectus dolor cursus sed. Ullamcorper
                tellus ac cras nec, pretium laoreet duis.{" "}
              </p>
              <div className="hero-btn flex animate-from-bottom">
                <Link href="/blog/blog-details" className="btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-wrap">
        <div className="common-wrap clear">
          <div className="blog-inner flex">
            {heroBlog && (
              <div className="largest-blog-component flex">
                <Link
                  href={`/blog/${heroBlog[0].id}`}
                  className="blog-component-thumb animate-from-bottom"
                >
                  <figure>
                    <Image
                      width={500}
                      height={500}
                      src={heroBlog[0].themeImage}
                      alt="blog-thumb"
                    />
                  </figure>
                </Link>
                <div className="largest-blog-component-content">
                  <div className="blog-component-content animate-from-bottom">
                    <Link href="/blog/blog-details">
                      <h2>{heroBlog[0].title}</h2>
                    </Link>
                    <p>{heroBlog[0].shortDescription}</p>
                  </div>
                  <div className="blog-component-author flex animate-from-bottom">
                    <div className="blog-component-author-thumb">
                      <figure>
                        <Image
                          width={500}
                          height={500}
                          src="/img/blog/ceo-2.jpg"
                          alt="blog-author"
                        />
                      </figure>
                    </div>
                    <div className="blog-component-author-content">
                      <h6>Mosharaf Hossain</h6>
                      <em>Brand Designer</em>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="blog-component-wrap flex">
              {/*//! single blog is start from here */}
              {blogs &&
                blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="blog-component animate-from-bottom"
                  >
                    <Link
                      href={`/blog/${blog.id}`}
                      className="blog-component-thumb"
                    >
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
                        <h6>Loius Nathan</h6>
                        <em>Sr. Brand Designer</em>
                      </div>
                    </div>
                  </div>
                ))}

              {/*//! single blog is end here */}
            </div>
          </div>
        </div>
      </div>

      <div className="cta-wrap">
        <div className="common-wrap clear">
          <div className="cta-inner flex animate-from-bottom">
            <CommonPattern className="common-pattern" numOfDiv={5} />

            <div className="cta-content">
              <h2 className="split-heading justify-center">
                Have a project idea to collaborate with?
              </h2>
              <div className="cta-content-btn flex animate-from-bottom">
                <Link href="contact" className="btn">
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

export default BlogPage;
