import classNames from 'classnames';
import { FC, ReactNode, memo } from 'react';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className } = props;
  return <button className={classNames('border outline-none px-3 py-1 rounded hover:bg-black/[0.05] pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50', className)}>{children}</button>;
};

export default memo(Button);
