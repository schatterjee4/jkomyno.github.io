import cx from 'classnames';
import * as React from 'react';
import './Text.css';

interface Props {
  big?: boolean;
  children: React.ReactNode;
  code?: boolean;
}

export const SubTitle: React.SFC<Props> = ({ big, code, children }) => (
  <h3 className={cx('subtitle', {
        'is-code': code,
        'is-size-3-desktop is-size-4-mobile': big,
        'is-size-4-desktop is-size-5-mobile': !big,
      })}
  >
    {children}
  </h3>
);

SubTitle.defaultProps = {
  big: false,
  code: false,
};
