import { useFormik } from "formik";
import * as Yup from "yup";

const TrapForm = ({ trap }) => {
  const trapSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    validationSchema: trapSchema,
    initialValues: {
      name: "",
      description: "",
      type: "",
      power: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (trap) {
    formik.setValues({
      name: trap.name,
    });
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Nome</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrapForm;
