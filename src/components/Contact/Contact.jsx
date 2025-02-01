import cntStyles from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteNumber = () => dispatch(deleteContact(id));
  return (
    <li className={cntStyles["contact-block"]}>
      <div>
        <div className={cntStyles["inf-sec"]}>
          <MdPerson className={cntStyles["inf-sec-hover"]} />
          <p className={cntStyles["inf-sec-hover"]}>{name}</p>
        </div>
        <div className={cntStyles["inf-sec"]}>
          <BsFillTelephoneFill className={cntStyles["inf-sec-hover"]} />
          <p className={cntStyles["inf-sec-hover"]}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={deleteNumber}
        className={cntStyles["del-btn"]}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
