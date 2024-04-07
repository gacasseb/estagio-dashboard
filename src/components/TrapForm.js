import { useFormik } from "formik";
import * as Yup from "yup";
import Map from "./Map";
import { useEffect } from "react";

const TrapForm = ({ trap }) => {
  const trapSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lat: Yup.number(),
    lng: Yup.number(),
  });

  const formik = useFormik({
    validationSchema: trapSchema,
    initialValues: {
      name: "",
      description: "",
      type: "",
      power: "",
      lat: "",
      lng: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (trap) {
      formik.setValues({
        name: trap.name,
        lat: trap.position.lat,
        lng: trap.position.lng,
      });
    }
  }, [trap]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <div className="h-[400px] my-[50px]">
        <Map draggable={true} onDrag={(lat, lng) => {
          console.log('lat', lat, 'lng', lng)
          formik.setFieldValue('lat', lat);
          formik.setFieldValue('lng', lng);
        }} markers={[
          {
            name: formik.values.name,
            position: {
              lat: formik.values.lat,
              lng: formik.values.lng,
            }
          }
        ]}></Map>
      </div>
      <div className="">
        <button className="font-medium text-white-600 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="submit">Editar</button>
      </div>
    </form>
  );
};

export default TrapForm;
