import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.outputCollector}>
        <div className={styles.logicTree}>
          <div className={styles.logicTreeInner}>
            <div className={styles.polygonParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
              <h2 className={styles.foodExplorer}>food explorer</h2>
            </div>
          </div>
          <button className={styles.selectionfield}>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
            <div className={styles.busquePorPratosOuIngredienWrapper}>
              <div className={styles.busquePorPratos}>
                Busque por pratos ou ingredientes
              </div>
            </div>
          </button>
          <div className={styles.text}>Meus favoritos</div>
        </div>
      </div>
      <button className={styles.button}>
        <img className={styles.receiptIcon} alt="" src="/receipt.svg" />
        <div className={styles.meuPedido0Wrapper}>
          <div className={styles.meuPedido0}>Pedidos (0)</div>
        </div>
      </button>
      <div className={styles.signoutWrapper}>
        <img
          className={styles.signoutIcon}
          loading="lazy"
          alt=""
          src="/signout.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
