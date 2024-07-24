import React from "react";
import logo from "../../assets/Saudi Arabia Ministry of Municipal and Rural Affairs & Housing.png";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/icons/checked-icn.svg";

interface IButtonProps {
  onClick?: () => void;
}
const IconButton = ({ onClick }: IButtonProps) => {
  return (
    <div className="iconBackground">
      <Logo className="icon" />
    </div>
  );
};

export default IconButton;
