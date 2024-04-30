import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import styles from "./IncluirButton.module.css";

const IncluirButton: FunctionComponent = () => {
  return (
    <form className={styles.incluirButton}>
      <FrameComponent2 selectionFieldPlaceholder="Salada Ceasar" />
      <FrameComponent1 />
      <div className={styles.descriptionField}>
        <div className={styles.formcontrol}>
          <div className={styles.descrio}>Descrição</div>
          <div className={styles.selectionfield}>
            <div className={styles.aSaladaCsar}>
              A Salada César é uma opção refrescante para o verão.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>
          <div className={styles.incluir}>Excluir prato</div>
        </button>
        <button className={styles.button1}>
          <div className={styles.incluir1}>Salvar alterações</div>
        </button>
      </div>
    </form>
  );
};

export default IncluirButton;
