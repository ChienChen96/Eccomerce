import { FunctionComponent } from "react";
import styles from "./FrameComponent21.module.css";

export type FrameComponent2Type = {
  selectionFieldPlaceholder?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  selectionFieldPlaceholder,
}) => {
  return (
    <div className={styles.formcontrolParent}>
      <div className={styles.formcontrol}>
        <div className={styles.imagemDoPrato}>Imagem do prato</div>
        <button className={styles.button}>
          <img
            className={styles.uploadsimpleIcon}
            alt=""
            src="/uploadsimple.svg"
          />
          <div className={styles.selecioneImagem}>Selecione imagem</div>
        </button>
      </div>
      <div className={styles.formcontrolWrapper}>
        <div className={styles.formcontrol1}>
          <div className={styles.nome}>Nome</div>
          <input
            className={styles.selectionfield}
            placeholder={selectionFieldPlaceholder}
            type="text"
          />
        </div>
      </div>
      <div className={styles.categoriaParent}>
        <div className={styles.categoria}>Categoria</div>
        <div className={styles.formcontrol2}>
          <div className={styles.selectionfield1}>
            <div className={styles.selectionDropdown}>
              <div className={styles.formControlImage}>Refeição</div>
            </div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
