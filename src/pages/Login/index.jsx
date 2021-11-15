import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

import "./login.css";

function Login() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup
      .string()
      .required("Senha Obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Mínimo de 8 dígitos(Carac. Especial, Num, Maiúscula, Minúscula)"
        // deve conter ao menos um dígito
        // deve conter ao menos uma letra minúscula
        // deve conter ao menos uma letra maiúscula
        // deve conter ao menos um caractere especial
        // deve conter ao menos 8 dos caracteres mencionados
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de Senha Obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push(`/loginSuccess/${data.name}`);
  };

  return (
    <div id="formulario">
      <div id="title">
        <h1>Seja Bem vindo a React Form</h1>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <input placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirme a Senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Login;
