import ContactItems from "./Items";
import s from "./Delivery.module.css";
// import PropTypes from "prop-types";
import { useMemo } from "react";
import { getFilter } from "redux/clickSlice";
import { useSelector } from "react-redux";
import { useGetDeliveryQuery } from "redux/deliveryApi";

const ContactList = ({ handle }) => {
 const filter = useSelector(getFilter);
 const { data = [], error, isLoading } = useGetDeliveryQuery();
 const filteredContacts = useMemo(
  () =>
   filter ? data.filter((contact) => contact.name.includes(filter)) : data,
  [filter, data]
 );
 //  const filteredContacts = (data, filter) => {
 //   const normalizedFilter = filter.toLowerCase();
 //   return data.filter((contact) =>
 //    contact.name.toLowerCase().includes(normalizedFilter)
 //   );
 //  };
 return (
  <ul>
   {filteredContacts.map((e) => {
    const onModal = () => {
     handle(e);
    };
    return (
     <li key={e.id} className={s.contact}>
      <ContactItems
       id={e.id}
       name={e.name}
       from={e.from}
       to={e.to}
       radio={e.radio}
       time={e.time}
       comment={e.comment}
       handle={onModal}
      />
     </li>
    );
   })}
  </ul>
 );
};

export default ContactList;
