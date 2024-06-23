'use client';

import { FC, useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { menu } from '@/components/ui/navbar/menu.data';
import MenuItem from '@/components/ui/navbar/MenuItem';
import NavbarTop from '@/components/ui/navbar/NavbarTop';
import AppSearch from '@/components/ui/search/Search';
import { CircleUserRound, ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';
import { IUserAuthServerData } from '@/types/auth.interface';
import AuthService from '@/services/auth.service';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

interface INavbarProps {
  user: IUserAuthServerData | null;
}

const Navbar: FC = () => {
  const user = false;
  const session = useSession();

  console.log(session);

  const handleLogOut = async () => {
    const logoutStatus = await AuthService.logout();
    toast.info(logoutStatus.message);
  };

  return (
    <header className={styles.header}>
      <NavbarTop />
      <div className={styles.header_container}>
        <div className="flex align-center">
          <Link href="/">
            <h1 className={styles.header_link}>Fresh Food</h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16 mr-4">
            {menu.map((item) => (
              <MenuItem item={item} key={item.link}></MenuItem>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between">
          <AppSearch />
          <Link className="mx-2" href="/cart">
            <ShoppingCart />
          </Link>
          <button onClick={() => signOut()}>Log Out</button>
          {user ? <Link href="/profile"></Link> : ''}
          {user ? (
            <button onClick={handleLogOut}>Log out</button>
          ) : (
            <Link className="mx-2" href="/api/auth/signin">
              <CircleUserRound />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
