// 'use client';
//
// import { FC, PropsWithChildren, useEffect } from 'react';
// import { TypeComponentAuthFields } from '@/app/providers/auth-provider/auth-page.types';
// import dynamic from 'next/dynamic';
// import { useCheckAuth } from '@/hooks/useCheckAuth';
// import { useActions } from '@/hooks/useActions';
// import { AuthTokenService } from '@/services/auth-token.service';
// import { usePathname } from 'next/navigation';
//
// const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });
//
// export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
//   Component: { isOnlyCustomer },
//   children,
// }) => {
//   const { user } = useCheckAuth();
//   const { checkAuth, logout } = useActions();
//   const tokenService = new AuthTokenService();
//
//   const pathname = usePathname();
//
//   useEffect(() => {
//     const accessToken = tokenService.getAccessToken();
//
//     if (accessToken) {
//       checkAuth();
//     }
//   }, []);
//
//   useEffect(() => {
//     const refreshToken = tokenService.getRefreshToken();
//
//     if (!refreshToken && user) {
//       logout();
//     }
//   }, [pathname]);
//
//   return isOnlyCustomer ? (
//     <DynamicCheckRole Component={{ isOnlyCustomer }}>{children}</DynamicCheckRole>
//   ) : (
//     <>{children}</>
//   );
// };
