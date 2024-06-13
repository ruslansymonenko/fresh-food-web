import { FC } from 'react';
import cn from 'clsx';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        'text-white bg-rose-600 hover:bg-rose-500 font-semibold rounded-md text-sm px-4 py-2.5' +
          ' w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
