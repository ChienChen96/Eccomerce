import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.triangleShapeParent}>
          <img
            className={styles.triangleShapeIcon}
            alt=""
            src="/polygon-1-1.svg"
          />
          <h3 className={styles.foodExplorer}>food explorer</h3>
        </div>
      </div>
      <div className={styles.subtitleWrapper}>
        <div className={styles.subtitle}>
          © 2023 - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
