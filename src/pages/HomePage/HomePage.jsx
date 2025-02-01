import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { TailSpin } from "react-loader-spinner";
import ContactList from "../../components/ContactList/ContactList";

const HomePage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 18 }}>Phonebook</h1>
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

      <ContactList />
    </div>
  );
};

export default HomePage;
