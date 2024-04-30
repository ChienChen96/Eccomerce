import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.saladaRavanelloParent}>
      <h1 className={styles.saladaRavanello}>Salada Ravanello</h1>
      <h2 className={styles.rabanetesFolhasVerdes}>
        Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão
        naan dá um toque especial.
      </h2>
      <div className={styles.ingredients}>
        <button className={styles.tag}>
          <div className={styles.alface}>alface</div>
        </button>
        <button className={styles.tag1}>
          <div className={styles.cebola}>cebola</div>
        </button>
        <button className={styles.tag2}>
          <div className={styles.poNaan}>pão naan</div>
        </button>
        <button className={styles.tag3}>
          <div className={styles.pepino}>pepino</div>
        </button>
        <button className={styles.tag4}>
          <div className={styles.rabanete}>rabanete</div>
        </button>
        <button className={styles.tag5}>
          <div className={styles.tomate}>tomate</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
