import { Service } from "@prisma/client";

export const fetchServices = async ({
  limit,
  skip,
}: {
  limit?: number | string;
  skip?: number | string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/service?limit=${limit || ""}&skip=${
        skip || ""
      }`,
      {
        cache: "no-cache",
        next: {
          tags: ["all-services"],
        }
      }
    );
    const { services } = await res.json();
    return services as Service[];
  } catch (error) {
    console.log("error when fetching Services", error);
  }
};
