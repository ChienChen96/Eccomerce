import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <FrameComponent4 polygon1="/polygon-11.svg" />
      <form className={styles.crieSuaContaParent}>
        <h1 className={styles.crieSuaConta}>Crie sua conta</h1>
        <div className={styles.formcontrol}>
          <div className={styles.seuNome}>Seu nome</div>
          <input
            className={styles.selectionfield}
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
        </div>
        <div className={styles.formcontrol1}>
          <div className={styles.email}>Email</div>
          <input
            className={styles.selectionfield1}
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
          />
        </div>
        <div className={styles.formcontrol2}>
          <div className={styles.senha}>Senha</div>
          <input
            className={styles.selectionfield2}
            placeholder="No mínimo 6 caracteres"
            type="text"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.criarConta}>Criar conta</div>
        </button>
        <div className={styles.jTenhoUma}>Já tenho uma conta</div>
      </form>
    </div>
  );
};

export default SignUp;
