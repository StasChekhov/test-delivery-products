import React, { useEffect } from "react";
import s from "../components/Delivery.module.css";
import DeliveryForm from "./DeliveryForm";

export default function Modal({ onClose, loan }) {
 //  const [number, setNumber] = useState("");
 useEffect(() => {
  const escapeFunction = (e) => {
   if (e.code === "Escape") {
    onClose();
   }
  };
  window.addEventListener("keydown", escapeFunction);
  return () => {
   window.removeEventListener("keydown", escapeFunction);
  };
 }, [onClose]);

 const overlayClick = (e) => {
  if (e.currentTarget === e.target) {
   onClose();
  }
 };

 //  console.log(loan);
 return (
  <div className={s.overlay} onClick={overlayClick}>
   <div className={s.modal}>
    <div className={s.modalContent}>
     <DeliveryForm onClose={onClose} formData={loan} isChange />
    </div>
   </div>
  </div>
 );
}
