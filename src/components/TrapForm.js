import { useFormik } from "formik";
import * as Yup from "yup";
import Map from "./Map";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrapForm = ({ trap }) => {
  const navigate = useNavigate();

  const trapSchema = Yup.object().shape({
    name: Yup.string(),
      // .min(2, "Too Short!")
      // .max(50, "Too Long!")
      // .required("Required"),
    latitude: Yup.number(),
    longitude: Yup.number(),
  });

  const formik = useFormik({
    validationSchema: trapSchema,
    initialValues: {
      name: "",
      description: "",
      type: "",
      power: "",
      latitude: -25.53306890690744,
      longitude: -54.54576713745118,
    },
    onSubmit: (values) => {
      const { name } = values;
      if (!name) alert('Preencha o campo Nome');

      let url = trap ? "http://localhost:3010/trap/" + trap.id : "http://localhost:3010/trap";
      let method = trap ? "PUT" : "POST";

      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
        }),
      })
      .then(() => {
        alert('Armadilha cadastrada com sucesso');
        navigate('/armadilhas');
      })
      .catch((err) => alert('Erro ao cadastrar armadilha'));
    },
  });

  useEffect(() => {
    if (trap) {
      console.log('trap', trap)
      formik.setValues({
        name: trap.name,
        latitude: trap.latitude,
        longitude: trap.longitude,
      });
    }
  }, [trap]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary">
        Nome
      </label>
      <input
        id="name"
        name="name"
        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-secondary text-primary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <div className="h-[400px] my-[50px]">
        <Map
          draggable={true}
          onDrag={(latitude, longitude) => {
            formik.setFieldValue("latitude", latitude);
            formik.setFieldValue("longitude", longitude);
          }}
          markers={[
            {
              name: formik.values.name,
              position: {
                lat: formik.values.latitude,
                lng: formik.values.longitude,
              },
            },
          ]}
        ></Map>
      </div>
      <div className="flex justify-end">
        <button
          className="btn-primary mr-5"
          type="submit"
          onClick={() => navigate("/armadilhas")}
        >
          Voltar
        </button>
        <button
          className="btn-primary"
          type="submit"
        >
          { trap ? 'Editar' : 'Cadastrar' }
        </button>
      </div>
    </form>
  );
};

export default TrapForm;
