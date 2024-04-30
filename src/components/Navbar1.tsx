import { FunctionComponent } from "react";
import styles from "./Navbar1.module.css";

const Navbar1: FunctionComponent = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.polygonParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/polygon-1.svg"
            />
            <div className={styles.subtree}>
              <h2 className={styles.foodExplorer}>food explorer</h2>
              <div className={styles.adminWrapper}>
                <div className={styles.admin}>admin</div>
              </div>
            </div>
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
        <div className={styles.textWrapper}>
          <div className={styles.text}>Meus favoritos</div>
        </div>
      </div>
      <button className={styles.button}>
        <img className={styles.receiptIcon} alt="" src="/receipt.svg" />
        <div className={styles.meuPedido0}>Novo prato</div>
      </button>
      <div className={styles.nestedTree}>
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

export default Navbar1;
