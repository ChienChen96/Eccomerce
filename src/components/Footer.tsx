import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.foodExplorerTagParent}>
        <img
          className={styles.foodExplorerTag}
          alt=""
          src="/polygon-1-11.svg"
        />
        <h2 className={styles.foodExplorer}>food explorer</h2>
      </div>
      <div className={styles.subtitleWrapper}>
        <div className={styles.subtitle}>
          © 2023 - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
