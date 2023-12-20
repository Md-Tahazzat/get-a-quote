import { Project } from "@prisma/client";

export const fetchProjects = async ({
    limit,
    skip,
  }: {
    limit?: number|string;
    skip?: number |string ;
  }):Promise<Project[] | undefined> => {
     
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/project?limit=${limit||''}&skip=${skip||''}`, {
        cache: "no-cache",
        next: {
          tags: ["all-project"],
        }
      });
      const projects = await res.json();
      return projects as Project[];
    } catch (error) {
      console.log("error when fetching Projects", error);
    }
  };
  

  export const fetchSingleProjects = async (id:string) => {
     
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/project/${id}`, {
        cache: "no-cache",
      });
      const projects = await res.json();
      return projects as Project[];
    } catch (error) {
      console.log("error when fetching Projects", error);
    }
  };