import { FC } from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClasses?: string;
  btnType?: 'primary' | 'secondary' | 'inactive';
}

const Button: FC<IButton> = ({ children, additionalClasses, btnType = 'primary', ...props }) => {
  return (
    <button className={cn(styles.button, additionalClasses, `${styles[btnType]}`)} {...props}>
      {children}
    </button>
  );
};

export default Button;
