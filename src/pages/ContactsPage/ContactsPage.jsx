import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { TailSpin } from "react-loader-spinner";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectError,
  selectIsOpenFieldForEdit,
  selectLoading,
} from "../../redux/contacts/selectors";
import EditForm from "../../components/EditForm/EditForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const editFieldIsOpen = useSelector(selectIsOpenFieldForEdit);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-center mb-4 mt-12 text-2xl">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TailSpin color="red" />
        </div>
      )}
      {error && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          <h3>Something went wrong...</h3>
          <img
            src="/src/assets/close.png"
            alt="Error..."
            width="124"
            height="124"
          />
        </div>
      )}
      {editFieldIsOpen ? <EditForm /> : <ContactList />}
    </div>
  );
};

export default ContactsPage;
