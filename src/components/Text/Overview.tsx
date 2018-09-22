import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * This component should be used to display brief and not crucial text.
 */
export const Overview: React.SFC<Props> = ({ children }) => (
  <p className="brief">
    {children}
  </p>
);
