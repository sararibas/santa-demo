import React from "react";
import "./Button.css";

interface ButtonProps {
  children: string;
  color?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  disabled,
  children,
  color = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button
      id="submit"
      type="submit"
      disabled={disabled}
      className={"mb-3 p-2 btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
