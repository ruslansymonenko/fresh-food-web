// import type { AuthOptions, User } from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import { AuthService } from '@/services/auth.service';
// import { IServiceResponse } from '@/types/service.intrfecace';
// import { IUserAuthServerData } from '@/types/auth.interface';
//
// const authService = new AuthService();
//
// const authConfig: AuthOptions = {
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: 'email', type: 'email', required: true },
//         password: { label: 'password', type: 'string', required: true },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           return null;
//         }
//         if (!credentials.email && !credentials.password) {
//           return null;
//         }
//
//         const currentUser: IServiceResponse<IUserAuthServerData | null> =
//           await authService.login(credentials);
//
//         if (currentUser.data !== null) {
//           console.log(currentUser.data);
//           return currentUser.data.user as User;
//         }
//
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/auth/login',
//     newUser: '/auth/register',
//   },
// };
//
// export default authConfig;
