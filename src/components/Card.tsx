import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  dish?: string;
  torradasDeParma?: string;
  text?: string;
  text1?: string;
};

const Card: FunctionComponent<CardType> = ({
  dish,
  torradasDeParma,
  text,
  text1,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.frameParent}>
          <div className={styles.dishWrapper}>
            <img className={styles.dishIcon} alt="" src={dish} />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <h2 className={styles.torradasDeParma}>{torradasDeParma}</h2>
      <div className={styles.text}>
        <div className={styles.text1}>{text}</div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text2}>
          <div className={styles.text3}>{text1}</div>
        </div>
      </div>
      <div className={styles.cardChild}>
        <div className={styles.frameGroup}>
          <div className={styles.stepperWrapper}>
            <div className={styles.stepper}>
              <input className={styles.frameInput} type="checkbox" />
              <div className={styles.heading}>
                <b className={styles.b}>01</b>
              </div>
              <div className={styles.plusWrapper}>
                <input className={styles.plus} type="checkbox" />
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.incluir}>incluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
