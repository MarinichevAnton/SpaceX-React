import React from "react";

export interface ButtonFCProps {
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const ButtonFC: React.FC<ButtonFCProps> = ({ className, onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonFC;
