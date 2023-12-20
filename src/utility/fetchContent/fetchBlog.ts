import { BlogType } from "@/types/types";

export const fetchBlogs = async ({
  limit,
  skip,
}: {
  limit?: number|string;
  skip?: number |string ;
}) => {
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog?limit=${limit||''}&skip=${skip||''}`, {
      cache: "no-cache",
    });
    const { blogs } = await res.json();
    return blogs as BlogType[];
  } catch (error) {
    console.log("error when fetching blogs", error);
  }
};
