// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // The `secret` option is used to sign and encrypt session tokens and other sensitive data.
  // It is important for security, ensuring that tokens cannot be tampered with.
  // See: https://next-auth.js.org/configuration/options#secret
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate user credentials
        console.log("authorize");
        if (!credentials?.email || !credentials?.password)
          throw new Error("Missing email or password");
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error("User not found");
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid password");
        // Return user object for session without password
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
