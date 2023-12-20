import { TeamData } from "@/types/types";

export const getTeamData = async (limit?: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/team-member?limit=${limit || ""}`,
      { next: { tags: ["teamMember"] } }
    );

    const { teamMember } = await res.json();
    // console.log('this is team fetch function',teamMember)
    return teamMember as TeamData[];
  } catch (error) {
    console.log(error);
    return null;
  }
};
