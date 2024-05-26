import { useFormik } from "formik";
import { setToken } from "../utils";
import { useNavigate } from "react-router-dom";
import { home } from "../routes";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { username, password } = values;
      console.log("values", values);

      if (!username || !password) {
        alert("Preencha todos os campos");
        return;
      }

      if (username === "admin" && password === "admin") {
        setToken("admin");
        alert("Login efetuado com sucesso");
        navigate(home);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="md:w-1/3 max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="alo"
            />
          </div>
          <div className="md:w-1/3 max-w-sm">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Insira seu usuário"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="password"
              type="password"
              placeholder="Insira sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Lembrar de mim</span>
              </label>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Não tem uma conta? Entre em contato com o administrador{" "}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
