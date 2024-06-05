import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'string', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          return null;
        }

        return null;
      },
    }),
  ],
};
