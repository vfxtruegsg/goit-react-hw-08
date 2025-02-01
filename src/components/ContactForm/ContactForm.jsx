import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import formStyles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();

  const contactValues = {
    name: "",
    number: "",
  };

  const submitForm = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
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
      <Form className={formStyles["form-block"]}>
        <div className={formStyles["input-block"]}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={formStyles["input-field"]}
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="name"
            component="span"
          />
        </div>
        <div className={formStyles["input-block"]}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xx-xx"
            className={formStyles["input-field"]}
          />
          <ErrorMessage
            className={formStyles["error"]}
            name="number"
            component="span"
          />
        </div>
        <button className={formStyles["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
