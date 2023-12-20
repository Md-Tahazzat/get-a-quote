const jwt = require("jsonwebtoken");

export const validateToken = async (token: string) => {
  fetch(`${process.env.NEXTAUTH_URL}/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.status === 200) {
        return result?.email;
      } else {
        throw new Error("Invalid token");
      }
    })
    .catch((error) => {
      throw new Error(error?.message);
    });
};
