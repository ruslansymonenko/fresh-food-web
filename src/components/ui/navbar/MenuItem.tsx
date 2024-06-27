'use client';

import React, { FC } from 'react';
import { IMenuItem } from '@/components/ui/navbar/menu.interface';
import Link from 'next/link';
import cn from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

interface IMenuItemProps {
  item: IMenuItem;
}

const MenuItem: FC<IMenuItemProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <div className={styles.menu_item}>
      <Link
        href={item.link}
        className={cn(
          styles.menu_item_link,
          pathname === item.link ? 'text-primary' : 'text-gray-600',
        )}
      >
        <span className={styles.menu_item_text}>{item.name}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
