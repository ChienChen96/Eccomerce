import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.formcontrolWrapper}>
        <div className={styles.formcontrol}>
          <div className={styles.ingredientes}>Ingredientes</div>
          <div className={styles.plusButton}>
            <button className={styles.signOutButton}>
              <div className={styles.formControlCategoria}>
                <div className={styles.poNaan}>Pão Naan</div>
                <img className={styles.xIcon} alt="" src="/x.svg" />
              </div>
            </button>
            <button className={styles.plusButtonInner}>
              <div className={styles.adicionarParent}>
                <div className={styles.adicionar}>Adicionar</div>
                <img className={styles.plusIcon} alt="" src="/plus1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.formcontrol1}>
        <div className={styles.preo}>Preço</div>
        <input
          className={styles.selectionfield}
          placeholder="R$ 00,00"
          type="text"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
