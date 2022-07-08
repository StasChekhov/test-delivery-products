import s from "./components/Delivery.module.css";
import Section from "./components/Section";
import DeliveryForm from "./components/DeliveryForm";
import List from "./components/List";
import Filter from "./components/Filter";
import { useGetDeliveryQuery } from "redux/deliveryApi";
import { useState } from "react";
import Modal from "components/Modal";

export default function App() {
 const { data, error, isLoading } = useGetDeliveryQuery();

 const [isOpen, setIsOpen] = useState(false);
 const [modal, setModal] = useState({});
 //  console.log(modal);

 const handleModalOpen = (loan) => {
  setModal(loan);
  setIsOpen(true);
 };

 return (
  <div className={s.section}>
   <Section title="Delivery card">
    <DeliveryForm />
   </Section>
   <Section title="List">
    {data?.length < 1 ? <p>Your contacts list is empty</p> : <Filter />}
    <List handle={handleModalOpen} />
    {isOpen && (
     <Modal loan={modal} setLoan={setModal} onClose={() => setIsOpen(false)} />
    )}
   </Section>
  </div>
 );
}
