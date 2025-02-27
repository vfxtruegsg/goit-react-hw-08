import cntStyles from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

import { isEditField } from "../../redux/contacts/slice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteNumber = () => {
    dispatch(deleteContact(id));
    toast.success("Deleted");
  };

  const openFieldForEdit = () => {
    dispatch(isEditField({ isOpen: true, contactId: id }));
  };
  return (
    <li className={cntStyles["contact-block"]}>
      <div className="flex items-center justify-between w-full">
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
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openFieldForEdit}
            className={cntStyles["del-btn"]}
          >
            Edit
          </button>

          <button
            type="button"
            onClick={deleteNumber}
            className={cntStyles["del-btn"]}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Contact;
