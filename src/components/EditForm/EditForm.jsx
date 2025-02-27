import { Formik, Form, Field, ErrorMessage } from "formik";
import formStyles from "./EditForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { editContact } from "../../redux/contacts/operations";
import { isEditField } from "../../redux/contacts/slice";
import { selectEditContactId } from "../../redux/contacts/selectors.js";

const EditForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
  const editContactId = useSelector(selectEditContactId);
  const contactValues = {
    name: "",
    number: "",
  };

  const submitForm = (values, actions) => {
    dispatch(
      editContact({
        name: values.name,
        number: values.number,
        id: editContactId,
      })
    );
    dispatch(isEditField({ isOpen: false, contactId: null }));
    toast.success("Edit");
    actions.resetForm();
  };

  const handleClose = () => {
    dispatch(isEditField(false));
  };

  const pattern = /^\d{3}-\d{2}-\d{2}$/;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(pattern, "Invalid phone number")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={contactValues}
      onSubmit={submitForm}
      validationSchema={FeedbackSchema}
    >
      <Form className="flex flex-col justify-center items-center gap-6 mb-24 ">
        <div
          style={{ position: "relative" }}
          className="flex flex-col gap-2 w-full max-w-xs"
        >
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            style={{ outline: "none" }}
            id={nameFieldId}
            className="p-3 rounded-xl hover:border-red-400 sm:max-w-md"
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="name"
            component="span"
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="flex flex-col gap-2  w-full max-w-xs"
        >
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            style={{ outline: "none" }}
            id={numberFieldId}
            placeholder="xxx-xx-xx"
            className="p-3 rounded-xl hover:border-red-400 sm:max-w-md"
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="number"
            component="span"
          />
        </div>
        <div className="flex items-center gap-12 mt-6">
          <button
            className="py-2 px-4 rounded-xl border cursor-pointer hover:bg-green-200"
            type="submit"
            onSubmit={submitForm}
          >
            Edit
          </button>
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-xl border cursor-pointer hover:bg-red-200"
            type="button"
          >
            Close
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
