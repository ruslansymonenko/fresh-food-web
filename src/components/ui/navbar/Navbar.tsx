'use client';

import { FC } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { menu } from '@/components/ui/navbar/menu.data';
import MenuItem from '@/components/ui/navbar/MenuItem';
import NavbarTop from '@/components/ui/navbar/navbar-top/NavbarTop';
import AppSearch from '@/components/ui/search/Search';
import { CircleUserRound, ShoppingCart, LogOut } from 'lucide-react';
import { IUserAuthServerData } from '@/types/auth.interface';
import AuthService from '@/services/auth.service';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useCart } from '@/hooks/useCart';

interface INavbarProps {
  user: IUserAuthServerData | null;
}

const Navbar: FC = () => {
  const session = useSession();
  const { cartItems } = useCart();

  console.log(session);

  const handleLogOut = async () => {
    await AuthService.logout();
    await signOut();
  };

  return (
    <header className={styles.header}>
      <NavbarTop />
      <div className={styles.header_container}>
        <div className="flex align-center">
          <Link href="/">
            <h1 className={styles.header_link}>Fresh Food</h1>
          </Link>

          <nav className={styles.nav}>
            {menu.map((item) => (
              <MenuItem item={item} key={item.link}></MenuItem>
            ))}
          </nav>
        </div>
        <div className={styles.controllers}>
          <AppSearch />
          <Link className="mx-4 relative" href="/cart">
            <ShoppingCart />
            <div className="absolute flex items-center justify-center h-6 w-6 bg-primary rounded-full top-4 left-4 text-white">
              <span className="text-sm font-semibold">{cartItems.length}</span>
            </div>
          </Link>
          {session.data ? (
            <div className={styles.btns}>
              <button onClick={handleLogOut}>
                <LogOut />
              </button>
            </div>
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
