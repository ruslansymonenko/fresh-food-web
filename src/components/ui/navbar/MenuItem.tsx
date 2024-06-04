'use client'

import React, {FC} from 'react';
import {IMenuItem} from '@/components/ui/navbar/nemu.interface';
import Link from 'next/link';
import cn from 'clsx';
import {usePathname} from 'next/navigation';

interface IMenuItemProps {
  item: IMenuItem
}

const MenuItem:FC<IMenuItemProps> = ({item}) => {
  const pathname = usePathname();

  return (
    <div>
      <Link href={item.link} className={cn('text-base font-medium transition duration-100' +
        ' hover:text-rose-600', pathname === item.link ? 'text-rose-600' : 'text-gray-600')}>{item.name}</Link>
    </div>
  );
};

export default MenuItem;