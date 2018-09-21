import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Row: React.SFC<Props> = ({ children }) => (
  <div className="columns">
    {children}
  </div>
);
