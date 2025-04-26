import React from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineClose
} from "react-icons/ai";
const Notification = ({ type, animation, message, onClose }) => {
  const icons = {
    success: <AiOutlineCheckCircle />,
    error: <AiOutlineCloseCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
  };
  return (
<div className={`notification ${type} ${animation ? animation : ''}`}>
      <div className={`notificationItem icon`}>{icons[type]}</div>
      <div className="notificationItem">{message}</div>
      <button className="notificationItem close" onClick={onClose}>{<AiOutlineClose />}</button>
    </div>
  );
};
export default Notification;
