import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import styles from "./IncludeButton.module.css";

const IncludeButton: FunctionComponent = () => {
  return (
    <section className={styles.includeButton}>
      <FrameComponent3 editarPrato="Adicionar prato" />
      <form className={styles.formControlPrecoParent}>
        <FrameComponent2 selectionFieldPlaceholder="Ex.: Salada Ceasar" />
        <FrameComponent1 />
        <div className={styles.dishDetails}>
          <div className={styles.formcontrol}>
            <div className={styles.descrio}>Descrição</div>
            <div className={styles.selectionfield}>
              <div className={styles.faleBrevementeSobre}>
                Fale brevemente sobre o prato, seus ingredientes e composição
              </div>
            </div>
          </div>
        </div>
        <button className={styles.includeButton1}>
          <div className={styles.button}>
            <div className={styles.incluir}>Salvar alterações</div>
          </div>
        </button>
      </form>
    </section>
  );
};

export default IncludeButton;
