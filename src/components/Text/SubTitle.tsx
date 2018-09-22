import cx from 'classnames';
import * as React from 'react';

interface Props {
  big?: boolean;
  children: React.ReactNode;
  code?: boolean;
}

/**
 * This component should be used to display subtitles. Since the subtitle is read
 * from `props.children`, it can be either a string or a React Component.
 * The subtitle can be conditionally enlarged with the `big` prop.
 * If you need to display code, just pass the `code` prop.
 */
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
