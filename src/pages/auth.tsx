import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao, IconeCheck } from "../components/icons/MenuIcons";
import useAuth from "../data/hook/useAuth";

enum Modo {
  LOGIN = "login",
  CADASTRO = "cadastro",
  ESQUECI_SENHA = "esqueci-senha",
}

export default function Autenticacao() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<Modo>(Modo.LOGIN);
  const [erro, setErro] = useState(null);
  const [success, setSuccess] = useState(null);
  const { usuario, loginGoogle, login, cadastrar, redirect } = useAuth();

  async function submit() {
    try {
      if (modo === Modo.LOGIN) {
        await login(email, password);
      }
      if (modo === Modo.ESQUECI_SENHA) {
        await redirect(email).then(() => {
          setModo(Modo.LOGIN);
          handleSuccess("Verifique seu e-mail para recuperação de senha");
        });
      } else {
        await cadastrar(email, password);
      }
    } catch (e) {
      handleError(e?.message ?? "Erro desconhecido");
    }
  }

  async function handleError(message: string, tempo = 5) {
    setErro(message);
    setTimeout(() => setErro(null), tempo * 1000);
  }

  async function handleSuccess(message: string, tempo = 5) {
    setSuccess(message);
    setTimeout(() => setSuccess(null), tempo * 1000);
  }

  function renderModos() {
    if (modo === Modo.LOGIN || modo === Modo.ESQUECI_SENHA) {
      return (
        <div>
          {modo === Modo.LOGIN ? (
            <p className={`mt-10 mb-5`}>
              Esqueceu sua senha?
              <a
                onClick={() => setModo(Modo.ESQUECI_SENHA)}
                className={`
               text-blue-500 hover:text-blue-800 
               font-semibold cursor-pointer`}
              >
                {" "}
                Clique aqui{" "}
              </a>
            </p>
          ) : (
            <div></div>
          )}
          <hr />
          <p className={`mt-5`}>
            Não possui uma conta?
            <a
              onClick={() => setModo(Modo.CADASTRO)}
              className={`text-blue-500 hover:text-blue-800 
            font-semibold cursor-pointer`}
            >
              {" "}
              Cadastre-se gratuitamente
            </a>
          </p>
        </div>
      );
    }
    if (modo === Modo.CADASTRO) {
      return (
        <p className={`mt-10`}>
          Já possui um cadastro?
          <a
            onClick={() => setModo(Modo.LOGIN)}
            className={`
            text-blue-500 hover:text-blue-800 
            font-semibold cursor-pointer`}
          >
            {" "}
            Entre com sua conta{" "}
          </a>
        </p>
      );
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block  md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className={`h-screen w-full`}
        />
      </div>

      <div className={`m-10 w-full md:w-1/2 `}>
        <h1 className={`text-xl font-bold mb-5`}>
          {modo === Modo.LOGIN
            ? "Entre com sua conta"
            : modo === Modo.CADASTRO
            ? "Cadastre-se na plataforma"
            : "Recuperar senha"}
        </h1>
        {erro ? (
          <>
            <div
              className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}
            >
              {IconeAtencao()}
              <span className="ml-3">{erro}</span>
            </div>
          </>
        ) : success ? (
          <>
            <div
              className={`
                        flex items-center
                        bg-green-600 text-white py-3 px-5 my-2
                        border border-green-800 rounded-lg
                    `}
            >
              {IconeCheck()}
              <span className="ml-3">{success}</span>
            </div>
          </>
        ) : (
          false
        )}
        <AuthInput label="E-mail" value={email} valueChanged={setEmail} />
        {!(modo === Modo.ESQUECI_SENHA) ? (
          <AuthInput
            label="Senha"
            value={password}
            type="password"
            valueChanged={setPassword}
          />
        ) : (
          <div></div>
        )}
        <button
          onClick={() => submit()}
          className={`
             w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg mt-6 px-4 py-3   
                `}
        >
          {modo === Modo.LOGIN
            ? "Entrar"
            : modo === Modo.CADASTRO
            ? "Cadastrar"
            : "Recuperar senha"}
        </button>

        <hr className={`w-full border-gray-500 my-6`} />

        <button
          onClick={() => loginGoogle()}
          className={`
             w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3   
                `}
        >
          Entrar com Google
        </button>
        {renderModos()}
      </div>
    </div>
  );
}
