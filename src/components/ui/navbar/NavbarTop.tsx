import { FC } from 'react';

import styles from './Navbar.module.scss';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const NavbarTop: FC = () => {
  return (
    <div className={styles.header_top}>
      <h2 className="font-light text-sm">The best food for a good price</h2>
      <div className="flex items-center justify-center">
        <Link className="text-rose-500 text-sm mr-4" href="tel: +3801234567800">
          +38 (123) 456 78 00
        </Link>
        <button
          className="hover:underline hover:text-rose-600 transition flex"
          data-modal-target="authentication-modal"
          data-modal-toggle="callrequest-modal"
        >
          <PhoneCall className="max-h-5" />
          <span className="ml-2 text-sm">Request a call</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
