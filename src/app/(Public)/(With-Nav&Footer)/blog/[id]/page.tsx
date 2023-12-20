import { BlogType } from "@/types/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import parser from "html-react-parser";
import { fetchBlogs } from "@/utility/fetchContent/fetchBlog";
import formattedDate from "@/utility/formattedDate";
import CommonPattern from "@/Shared/commonPattern/commonPattern";

const fetchSingleBlog = async (id: string) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/blog/${id}`);
  const { blog } = await res.data;
  return blog as BlogType;
};

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const blog = await fetchSingleBlog(id);
  const blogs = (await fetchBlogs({ limit: 3 })) as BlogType[];

  return (
    <section className="main-content-wrap blog-details-page">
      <div className="blog-details-wrap">
        <div className="common-wrap clear">
          <div className="blog-details-inner flex">
            <div className="blog-details-component flex">
              <div className="blog-details-component-thumb animate-from-bottom">
                <figure>
                  <Image
                    width={500}
                    height={500}
                    src={blog.themeImage}
                    alt="IMAGE"
                  />
                </figure>
              </div>
              <div className="blog-details-component-content">
                <h2 className="split-heading">{blog.title}</h2>
                <div className="blog-component-author flex animate-from-bottom">
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
            </div>
            <div className="blog-details-discription-wrap flex">
              <div className="blog-details-discription">
                {parser(blog.content)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-wrap">
        <div className="common-wrap clear">
          <div className="blog-inner flex">
            <div className="blog-title animate-from-bottom">
              <h2 className="split-heading">More Blog</h2>
            </div>
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
                      <Link href={`/blog/${blog.id}`}>
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
                ))}

              {/*//! single blog is end here */}
            </div>
          </div>
        </div>
      </div>

      <div className="cta-wrap">
        <div className="common-wrap clear">
          <div className="cta-inner flex animate-from-bottom">
            <CommonPattern numOfDiv={5} className="common-pattern" />
            <div className="cta-content">
              <h2 className="split-heading justify-center">
                Have a project idea to collaborate with?
              </h2>
              <div className="cta-content-btn flex animate-from-bottom">
                <Link href="/contact" className="btn">
                  Contact Us
                </Link>
              </div>
              C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
