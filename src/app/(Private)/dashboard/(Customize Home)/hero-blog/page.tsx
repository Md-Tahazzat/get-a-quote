// 'use client';
import HeroBlogContent from "@/components/pages/Dashboard/Pages/Home/hero-blog/HeroBlogContent";
import HeroBlogContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-blog/HeroBlogContentHeader";
import Link from "next/link";
import { fetchBlogs } from "@/utility/fetchContent/fetchBlog";
// import { FaPlus } from "react-icons/fa";

const HeroBlog = async () => {
  const blogs = await fetchBlogs({});

  return (
    <section className="container px-4 mx-auto mt-10">
      <div className="flex items-center justify-between gap-x-3 md:px-6 lg:px-8">
        <h2 className="text-3xl font-medium ">All Blogs</h2>
        <div className="">
          <Link
            href={"/dashboard/home/hero-blog/add-blog-post"}
            //  htmlFor="add-new-title-for-homepage-content"
            className="btn btn-primary"
          >
            {/* <FaPlus className="mr-2" /> */}
            Add New Title
          </Link>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <HeroBlogContentHeader />
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {blogs &&
                    blogs.map((blog) => (
                      <HeroBlogContent key={blog.id} {...blog} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;
