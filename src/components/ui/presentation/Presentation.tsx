import { FC } from 'react';
import PresentationLeft from '@/components/ui/presentation/PresentationLeft';
import PresentationRight from '@/components/ui/presentation/PresentationRight';

import styles from './Presentation.module.scss';

const Presentation: FC = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.container}>
        <PresentationLeft />
        <PresentationRight />
      </div>
    </section>
  );
};

export default Presentation;
