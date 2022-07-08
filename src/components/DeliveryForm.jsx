import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Delivery.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
 useAddDeliveryMutation,
 useGetDeliveryQuery,
 useUpdateDeliveryMutation,
 useGetDeliveryByIdQuery,
} from "redux/deliveryApi";

export default function DeliveryForm({ formData, isChange, onClose }) {
 //  const dispatch = useDispatch();
 const [name, setName] = useState(formData.name);

 const [from, setFrom] = useState(formData.from);
 const [to, setTo] = useState(formData.to);
 const [radio, setRadio] = useState(formData.radio);
 const [time, setTime] = useState(formData.time);
 const [comment, setComment] = useState(formData.comment);
 //  console.log(formData.id);

 const { data = [], error, isLoading, refetch } = useGetDeliveryQuery();
 const [addContact, result] = useAddDeliveryMutation(data);
 const {} = useGetDeliveryByIdQuery(formData.id);
 const [updateMaterial] = useUpdateDeliveryMutation();

 const onSaveContact = async () => {
  const contact = {
   name,
   from,
   to,
   radio,
   time,
   comment,
  };

  if (
   data.find((item) => item.name.toLowerCase() === contact.name.toLowerCase())
  ) {
   return alert(`Contact ${name} already exists`);
  }
  await addContact({ id: nanoid(), name, from, to, radio, time, comment });
 };

 const onUpdateMaterial = async (fields) => {
  try {
   await updateMaterial({ id: formData.id, ...fields });
  } catch (error) {
   console.log(error);
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (isChange) {
   // изменерие контакta
   onUpdateMaterial();
   onClose();
  } else {
   onSaveContact();
  }
  setName("");
  setFrom("");
  setTo("");
  setTime("");
 };

 return (
  <>
   <form onSubmit={handleSubmit} className={s.form}>
    <div className={s.div}>
     <label className={s.label}>Name</label>
     <input
      className={s.input}
      id={nanoid()}
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      placeholder="Ivan Dudka"
     />
     <label className={s.label}>From</label>
     <input
      className={s.input}
      type="text"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      placeholder="City:"
     />
     <label className={s.label}>To</label>
     <input
      className={s.input}
      type="text"
      value={to}
      onChange={(e) => setTo(e.target.value)}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      placeholder="City:"
     />
     <label className={s.label}>Choose type of your item:</label>
     <div className={s.checks}>
      <p>
       <input
        type="radio"
        id="test1"
        name="radio-group"
        checked={radio === "Gadgets"}
        onChange={() => setRadio("Gadgets")}
       />
       <label for="test1">Gadgets</label>
      </p>
      <p>
       <input
        type="radio"
        id="test2"
        name="radio-group"
        checked={radio === "Drinks"}
        onChange={() => setRadio("Drinks")}
       />
       <label for="test2">Drinks</label>
      </p>
      <p>
       <input
        type="radio"
        id="test3"
        name="radio-group"
        checked={radio === "Clothes"}
        onChange={() => setRadio("Clothes")}
       />
       <label for="test3">Clothes</label>
      </p>
      <p>
       <input
        type="radio"
        id="test3"
        name="radio-group"
        checked={radio === "Apple"}
        onChange={() => setRadio("Apple")}
       />
       <label for="test3">Other</label>
      </p>
     </div>

     <label className={s.label}>Date of dispatch</label>
     <input
      type="datetime-local"
      name="Startdate"
      value={time}
      onChange={(e) => setTime(e.target.value)}
     />

     <label for="comment" className={s.label}>
      Comments:
     </label>
     <textarea
      id="comment"
      name="comment"
      rows="4"
      cols="50"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Write some details"
     ></textarea>
     {isChange ? (
      <button type="submit" className={s.buttonUpdate}>
       Update
      </button>
     ) : (
      <button type="submit" className={s.button}>
       Add
      </button>
     )}
    </div>
   </form>
  </>
 );
}

DeliveryForm.defaultProps = {
 formData: {
  name: "",
  from: "",
  to: "",
  radio: "",
  time: "",
  comment: "",
 },
};
