import {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ]
}

console.log("GITHUB_ID:", process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_SECRET_ID:", process.env.GOOGLE_SECRET_ID);
