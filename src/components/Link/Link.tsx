import cx from 'classnames';
import * as React from 'react';
import './Link.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  fillEffect?: boolean;
  label: string;
  newTab?: boolean;
  url?: string;
};

/**
 * This link component should handle every link throughout the app.
 * It accepts any valid React Element as children. A particular filling effect will be enabled
 * by default if `newTab` (which loads the `url` link on a new window) is set to true.
 */
export const Link: React.SFC<Props> = ({ children, className, fillEffect, label, newTab, url }) => (
  <a
    className={cx(className, { 'ext-link': newTab && fillEffect })}
    href={url}
    aria-label={label}
    rel={newTab! ? 'noreferrer noopener' : ''}
    target={newTab! ? '_blank' : ''}
  >
    {
      (label && !children) ?
        label :
        children
    }
  </a>
);

Link.defaultProps = {
  className: '',
  fillEffect: true,
  url: '#',
};
