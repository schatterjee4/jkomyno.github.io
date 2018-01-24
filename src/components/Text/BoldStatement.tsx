import * as React from 'react';
import './Text.css';

interface Props {
  children: React.ReactNode;
}

export const BoldStatement: React.SFC<Props> = ({ children }) => (
  <h3 className="is-size-4-mobile is-size-3-desktop">
    {children}
  </h3>
);
