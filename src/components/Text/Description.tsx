import cx from 'classnames';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  big?: boolean;
}

/**
 * This component should be used to display important descriptions.
 * The description can be conditionally enlarged with the `big` prop.
 */
export const Description: React.SFC<Props> = ({ big, children }) => (
  <p className={cx('', {
      'is-size-5-mobile is-size-3-desktop': big,
      'is-size-5-mobile is-size-4-desktop': !big,
    })}
  >
    {children}
  </p>
);

Description.defaultProps = {
  big: false,
};
