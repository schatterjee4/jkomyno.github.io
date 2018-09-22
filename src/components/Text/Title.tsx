import cx from 'classnames';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  big?: boolean;
  center?: boolean;
}

/**
 * This component should be used to display titles. Since the title is read
 * from `props.children`, it can be either a string or a React Component.
 * The title can be conditionally enlarged with the `big` prop and centered
 * via the `center` prop.
 */
export const Title: React.SFC<Props> = ({ big, center, children }) => (
  <h1 className={cx('title', {
      'has-text-centered': center,
      'is-size-3-mobile is-size-1-desktop': big,
      'is-size-4-mobile is-size-2-desktop': !big,
    })}
  >
    {children}
  </h1>
);

Title.defaultProps = {
  big: false,
  center: false,
};
