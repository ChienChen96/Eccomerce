import { FunctionComponent } from "react";
import styles from "./FrameComponent31.module.css";

export type FrameComponent3Type = {
  editarPrato?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  editarPrato,
}) => {
  return (
    <div className={styles.formControlPriceParent}>
      <div className={styles.formControlPrice}>
        <div className={styles.caretleftWrapper}>
          <img
            className={styles.caretleftIcon}
            loading="lazy"
            alt=""
            src="/caretleft1.svg"
          />
        </div>
        <h3 className={styles.voltar}>voltar</h3>
      </div>
      <h1 className={styles.editarPrato}>{editarPrato}</h1>
    </div>
  );
};

export default FrameComponent3;
