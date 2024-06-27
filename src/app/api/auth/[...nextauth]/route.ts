import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthService } from '@/services/auth.service';

const authService = new AuthService();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: '',
        },
        password: { label: 'password', type: 'string' },
      },
      async authorize(credentials, req) {
        console.log('work');
        if (!credentials?.email || !credentials?.password) return null;

        const res = await authService.login(credentials);
        console.log(res);

        if (!res) return null;

        if (!res.status) return null;

        if (!res.data?.user) return null;

        const user = res.data.user;
        console.log('user data', user);
        return {
          ...user,
          accessToken: res.data.accessToken,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      return token;
    },

    async session({ token, session }) {
      // const user = token.user;
      // @ts-ignore
      session.user = { id: token.id, email: token.email };
      session.accessToken = token.accessToken;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
