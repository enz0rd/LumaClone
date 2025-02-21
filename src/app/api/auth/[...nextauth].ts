import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "otp-credentials",
            name: "OTP Credentials",
            async authorize(credentials, req) {
                const user = { id: "1", name: "Admin" };
                return user;
            },
            credentials: {
                email: { label: "Email", type: "email" },
                otp: { label: "OTP", type: "text" }
            }

        })
    ]
}