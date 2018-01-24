import * as React from 'react';
import './Text.css';

interface Props {
  children: React.ReactNode;
}

export const Overview: React.SFC<Props> = ({ children }) => (
  <p className="brief">
    {children}
  </p>
);
