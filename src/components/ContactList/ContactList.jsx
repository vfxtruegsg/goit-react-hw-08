import clStyles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/filters/selectors";
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul style={{ marginBottom: 48 }} className={clStyles["contact-list"]}>
      {filteredContacts.map((item, index) => (
        <Contact
          key={index}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
