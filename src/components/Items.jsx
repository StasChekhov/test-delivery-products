import PropTypes from "prop-types";
import s from "./Delivery.module.css";
import { useDispatch } from "react-redux";
import { useDeleteDeliveryMutation } from "redux/deliveryApi";

const ContactItems = ({ id, name, from, to, radio, time, comment, handle }) => {
 const dispatch = useDispatch();
 const [deleteContact, result] = useDeleteDeliveryMutation();

 return (
  <>
   <div className={s.contactBlock}>
    <span className={s.contactName}>{name}</span>
    <span className={s.contactPhone}>From: {from}</span>
    <span className={s.contactPhone}>To: {to}</span>
    <span className={s.contactPhone}>Radio: {radio}</span>
    <span className={s.contactPhone}>Time: {time}</span>
    <span className={s.contactPhone}>Comment: {comment}</span>
    <button type="button" data-id={id} className={s.update} onClick={handle}>
     Change
    </button>
    <button
     type="button"
     data-id={id}
     className={s.delete}
     onClick={() => deleteContact(id)}
    >
     Delete
    </button>
   </div>
  </>
 );
};
// onClick={() => dispatch(remove({ id }))}
export default ContactItems;
