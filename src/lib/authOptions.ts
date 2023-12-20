import bcrypt from "bcryptjs";
import prisma from "@/server/database/database";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        // const user = { id: '1', name: "admin", email: "admin@email.com" };
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        const isValid = await bcrypt.compare(
          credentials?.password as string,
          user?.password as string
        );

        // console.log({ user, isValid });
        
      
        if(!user || !isValid) {
          throw new Error("Invalid credentials");
        }

        if(user.role!== "ADMIN") {
          throw new Error("You are not authorized");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };

      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
