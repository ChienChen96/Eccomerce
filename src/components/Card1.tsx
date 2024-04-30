import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  dish?: string;
  torradasDeParma?: string;
  text?: string;
  text1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Card1: FunctionComponent<Card1Type> = ({
  dish,
  torradasDeParma,
  text,
  text1,
  propPadding,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.card} style={card1Style}>
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
        <div className={styles.alignmentAligner}>{text}</div>
      </div>
      <div className={styles.proximitySensor}>
        <div className={styles.text1}>
          <div className={styles.strokeStyler}>{text1}</div>
        </div>
      </div>
      <div className={styles.opacityOperator}>
        <div className={styles.scaleScaler}>
          <div className={styles.rotationRotator}>
            <div className={styles.stepper}>
              <div className={styles.blendBlender}>
                <img className={styles.minusIcon} alt="" src="/minus-1.svg" />
              </div>
              <div className={styles.heading}>
                <b className={styles.proximityProvider}>01</b>
              </div>
              <div className={styles.snapSnapper}>
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

export default Card1;
