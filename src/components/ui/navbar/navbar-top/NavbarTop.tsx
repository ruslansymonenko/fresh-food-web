import { FC } from 'react';

import styles from './NavbarTop.module.scss';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const NavbarTop: FC = () => {
  return (
    <div className={styles.header_top}>
      <h2 className={styles.title}>The best food for a good price</h2>
      <div className={styles.controllers}>
        <Link className={styles.phone} href="tel: +3801234567800">
          +38 (123) 456 78 00
        </Link>
        <button
          className={styles.call_btn}
          data-modal-target="authentication-modal"
          data-modal-toggle="callrequest-modal"
        >
          <PhoneCall className="max-h-5" />
          <span className={styles.call_btn_text}>Request a call</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarTop;
