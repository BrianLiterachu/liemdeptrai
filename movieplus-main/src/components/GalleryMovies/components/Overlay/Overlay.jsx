import { useRef } from "react";
import styles from "./Overlay.module.css";

export const Overlay = () => {
  const overlayRef = useRef();

  const handleMouseMove = ({ clientX, clientY }) => {
    try {
      overlayRef.current.style = `
      left: ${clientX - 240}px; 
      top: ${clientY - 240}px;
      `;
    } catch (error) {}
  };

  window.onmousemove = handleMouseMove;

  return <div className={styles.overlay} ref={overlayRef}></div>;
};
