import { FC } from 'react';

import styles from './Presentation.module.scss';

const PresentationLeft: FC = () => {
  return (
    <div className={styles.left}>
      <h1 className={styles.left_title}>Fresh Food Shop</h1>
      <p>Discover the freshest and healthiest food options at Fresh Foods Shop</p>
    </div>
  );
};

export default PresentationLeft;
