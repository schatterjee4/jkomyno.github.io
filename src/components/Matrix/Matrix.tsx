import * as React from 'react';
import MatrixText from 'react-matrix-text';
import './Matrix.css';

const renderColumn = (char: string) => (
  <span
    key={char}
    className="matrix-column"
  >
    {char}
  </span>
);

const renderRow = (columns: JSX.Element[]) => (
  <div className="is-flex has-text-centered is-size-4-mobile is-size-3-tablet is-size-2-desktop">
    {columns}
  </div>
);

interface Props {
  columns: number,
  sentence: string
};

export const Matrix: React.SFC<Props> = ({ columns, sentence}) => (
  <div className="matrix-brackets">
    <div className="matrix-wrapper is-uppercase">
      <MatrixText
        sentence={sentence}
        columns={columns}
        renderColumn={renderColumn}
        renderRow={renderRow}
      />
    </div>
  </div>
);
