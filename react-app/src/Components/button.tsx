import React from 'react';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

