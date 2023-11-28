import React from 'react';

interface Props {
  children: string;
  color?: 'danger' | 'primary' | 'secondary';
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick, color = 'danger' }) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;