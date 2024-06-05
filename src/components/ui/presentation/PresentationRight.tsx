import { FC } from 'react';
import Image from 'next/image';

import styles from './Presentation.module.scss';

const PresentationRight: FC = () => {
  return (
    <div className={styles.right}>
      <div className={styles.image_front}>
        <Image
          src="/presentation/presentation-1.jpg"
          alt="presentation photo"
          className={styles.image}
          priority
          width={500}
          height={500}
        />
      </div>
      <div className={styles.image_back}>
        <Image
          src="/presentation/presentation-2.jpg"
          alt="presentation photo"
          className={styles.image}
          priority
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default PresentationRight;
