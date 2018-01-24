import cx from 'classnames';
import * as React from 'react';
import './Text.css';

interface Props {
  children: React.ReactNode;
  big?: boolean;
}

export const Description: React.SFC<Props> = ({ big, children }) => (
  <p className={cx('', { 'is-size-5-mobile is-size-3-desktop': big, 'is-size-5-mobile is-size-4-desktop': !big })}>
    {children}
  </p>
);

Description.defaultProps = {
  big: false,
};
