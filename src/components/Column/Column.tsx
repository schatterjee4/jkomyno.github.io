import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Column: React.SFC<Props> = ({ children, className }) => (
  <div className={`column ${className}`}>
    {children}
  </div>
);

Column.defaultProps = {
  className: '',
};
