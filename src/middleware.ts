import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CLIENT_PATH } from '@/consts/apiPaths';
import { EnumTokens } from '@/types/auth.interface';

export function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies, nextUrl } = request;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes('/auth');
  const isAdminPage = url.includes('/admin');
  const isProfilePage = url.includes('/profile');

  const baseUrl = `${nextUrl.protocol}//${nextUrl.host}`;

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(`${baseUrl}`));
  }

  if (isAuthPage && !refreshToken) {
    return NextResponse.next();
  }

  if (isAdminPage && !refreshToken) {
    return NextResponse.redirect(new URL(`${baseUrl}/not-found`));
  }

  if (isProfilePage && !refreshToken) {
    return NextResponse.redirect(new URL(`${baseUrl}`));
  }

  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*', '/profile', '/auth/:path*'] };
