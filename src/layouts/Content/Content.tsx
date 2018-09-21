import * as React from 'react';

interface Props {
  children: React.ReactNode;
};

export const Content: React.SFC<Props> = ({ children }) => (
  <div className="container content is-fluid">
    {children}
  </div>
);
