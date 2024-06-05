'use client';

import { FC } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { menu } from '@/components/ui/navbar/menu.data';
import MenuItem from '@/components/ui/navbar/MenuItem';
import NavbarTop from '@/components/ui/navbar/NavbarTop';
import AppSearch from '@/components/ui/search/Search';
import { useSession, signOut } from 'next-auth/react';

const Navbar: FC = () => {
  const session = useSession();

  return (
    <header className={styles.header}>
      <NavbarTop />
      <div className={styles.header_container}>
        <div className="flex align-center">
          <Link href="/">
            <h1 className={styles.header_link}>Fresh Food</h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {menu.map((item) => (
              <MenuItem item={item} key={item.link}></MenuItem>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between">
          <AppSearch />
          {session?.data ? <Link href="/profile"></Link> : ''}
          {session?.data ? (
            <Link href="/logout" onClick={() => signOut({ callbackUrl: '/' })}>
              Log out
            </Link>
          ) : (
            <Link href="/api/auth">Auth</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
