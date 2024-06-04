import React from 'react';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import {menu} from '@/components/ui/navbar/menu.data';
import MenuItem from '@/components/ui/navbar/MenuItem';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href='/'>
          <h1 className={styles.header_link}>Fresh Food</h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {menu.map(item => (
            <MenuItem item={item} key={item.link}></MenuItem>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;