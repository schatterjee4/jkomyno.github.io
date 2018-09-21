import * as React from 'react';

interface Props {
  color: string;
};

export const Logo: React.SFC<Props> = ({ color }) => (
  <svg className="logo" viewBox="-5 -5 1000 100">
    <path fill="transparent" d="M-1-1h650v93H-1z" />
    <g>
      <g textAnchor="middle">
        <g fontWeight={500} fontSize={72} fontFamily="Raleway Medium Alt1">
          <path fill={color} d="M11.342 71.303L8.976 78.81c4.32 3.086 9.669 4.526 15.84 4.526 5.554 0 9.874-.823 13.166-2.674 3.291-1.749 5.76-4.217 7.508-7.509 1.749-3.188 2.88-7.097 3.395-11.623.514-4.525.822-9.668.822-15.222V9.177H40.45V46.31c0 4.731-.205 8.845-.514 12.342-.411 3.6-1.131 6.583-2.16 9.052-1.029 2.468-2.571 4.217-4.629 5.451-2.057 1.235-4.834 1.852-8.331 1.852-2.983 0-5.657-.309-7.92-1.132-2.366-.72-4.217-1.543-5.554-2.571zM96.992 9.28h-9.257v38.263l9.257-9.977V9.28zM115.3 41.371l29.315-32.194h-9.978L96.992 49.6l-9.257 9.874v22.732h9.257v-22.32l12.651-13.166 26.537 35.486h10.08L115.3 41.37zM226.655 49.703c-.309 2.16-.72 4.32-1.44 6.377-1.132 3.497-2.777 6.583-4.937 9.257-2.16 2.674-4.835 4.937-7.817 6.583-3.189 1.646-6.686 2.469-10.492 2.469-3.806 0-7.2-.72-10.286-2.366a23.85 23.85 0 0 1-7.92-6.377c-2.262-2.675-3.908-5.657-5.142-9.155a36.237 36.237 0 0 1-1.543-6.788h-9.36c.308 3.291 1.028 6.583 2.263 9.668 1.542 4.526 3.908 8.435 6.994 11.932 2.983 3.497 6.583 6.274 10.8 8.331 4.217 2.057 8.948 3.086 14.091 3.086 4.937 0 9.463-.926 13.68-2.983 4.217-2.057 7.817-4.731 10.903-8.126 3.086-3.394 5.452-7.302 7.2-11.828 1.234-3.189 2.057-6.583 2.469-10.08h-9.463zM178.62 35.2c1.131-3.394 2.777-6.377 4.937-9.154 2.16-2.675 4.834-4.835 7.92-6.48 3.085-1.646 6.583-2.469 10.491-2.469 3.6 0 6.994.823 10.08 2.366 3.086 1.646 5.657 3.703 7.92 6.377s3.909 5.657 5.143 9.154c.617 1.852 1.131 3.806 1.44 5.657h9.36a46.95 46.95 0 0 0-2.057-8.331c-1.646-4.423-4.012-8.331-6.994-11.931-3.086-3.498-6.686-6.275-10.8-8.435-4.218-2.16-8.949-3.291-13.989-3.291-5.04 0-9.566 1.028-13.783 3.086-4.217 2.057-7.817 4.731-10.903 8.125-3.085 3.497-5.554 7.406-7.303 11.829-1.13 2.983-1.954 5.966-2.262 8.948h9.36c.308-1.748.822-3.6 1.44-5.451zM270.614 9.177v73.029h9.257V25.737l16.354 29.212 4.938-8.435-20.778-37.337h-9.771zm72.514 0l-26.537 47.417-4.834 8.435 2.263 4.011h5.245l24.275-43.303v56.469h9.257V9.177h-9.669zM374.436 9.177l22.731 38.057 4.732-8.125-17.28-29.932h-10.183zm54.617 0l-22.32 38.057-4.628 8.332v26.64h9.257v-26.64l27.771-46.389h-10.08zM470.57 82.206h9.257v-41.04l-9.258-12.035v53.075zM523.026 9.28v56.777l-45.258-56.88h-7.2v5.554l9.258 11.726 44.64 55.749h7.817V9.28h-9.257zM625.561 49.703c-.308 2.16-.72 4.32-1.44 6.377-1.131 3.497-2.777 6.583-4.937 9.257-2.16 2.674-4.834 4.937-7.817 6.583-3.189 1.646-6.686 2.469-10.492 2.469-3.805 0-7.2-.72-10.285-2.366a23.85 23.85 0 0 1-7.92-6.377c-2.263-2.675-3.909-5.657-5.143-9.155a36.238 36.238 0 0 1-1.543-6.788h-9.36c.309 3.291 1.029 6.583 2.263 9.668 1.543 4.526 3.909 8.435 6.994 11.932 2.983 3.497 6.583 6.274 10.8 8.331 4.217 2.057 8.949 3.086 14.092 3.086 4.937 0 9.463-.926 13.68-2.983 4.217-2.057 7.817-4.731 10.902-8.126 3.086-3.394 5.452-7.302 7.2-11.828 1.235-3.189 2.058-6.583 2.47-10.08h-9.464zM577.527 35.2c1.131-3.394 2.777-6.377 4.937-9.154 2.16-2.675 4.834-4.835 7.92-6.48 3.086-1.646 6.583-2.469 10.491-2.469 3.6 0 6.995.823 10.08 2.366 3.086 1.646 5.658 3.703 7.92 6.377 2.263 2.674 3.91 5.657 5.143 9.154.617 1.852 1.132 3.806 1.44 5.657h9.36a46.952 46.952 0 0 0-2.057-8.331c-1.646-4.423-4.011-8.331-6.994-11.931-3.086-3.498-6.686-6.275-10.8-8.435-4.217-2.16-8.949-3.291-13.989-3.291-5.04 0-9.565 1.028-13.783 3.086-4.217 2.057-7.817 4.731-10.902 8.125-3.086 3.497-5.555 7.406-7.303 11.829-1.132 2.983-1.955 5.966-2.263 8.948h9.36c.309-1.748.823-3.6 1.44-5.451z" />
        </g>
      </g>
    </g>
  </svg>
);
