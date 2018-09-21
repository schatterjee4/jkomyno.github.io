import cx from 'classnames';
import * as React from 'react';
import './Link.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  label: string;
  newTab?: boolean;
  url?: string;
};

export const Link: React.SFC<Props> = ({ children, className, newTab, url, label }) => (
  <a
    className={cx(className, { 'ext-link': newTab! })}
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
  url: '#',
};
