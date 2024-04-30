import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent41";
import FormControl from "../components/FormControl";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <FrameComponent4
        polygon1="/polygon-11.svg"
        frameDivPadding="199.6px 0px 0px"
      />
      <form className={styles.emailSenhaFields}>
        <h1 className={styles.faaLogin}>Faça login</h1>
        <FormControl
          email="Email"
          exemploExemploexePlacehol="Exemplo: exemplo@exemplo.com.br"
        />
        <FormControl
          email="Senha"
          exemploExemploexePlacehol="No mínimo 6 caracteres"
        />
        <button className={styles.button}>
          <div className={styles.entrar}>Entrar</div>
        </button>
        <div className={styles.criarUmaConta}>Criar uma conta</div>
      </form>
    </div>
  );
};

export default SignIn;
