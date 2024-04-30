import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  dish?: string;
  torradasDeParma?: string;
  text?: string;
  text1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  dish,
  torradasDeParma,
  text,
  text1,
  propLeft,
}) => {
  const gradienteStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.cardParent}>
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
                <div className={styles.minusWrapper}>
                  <img className={styles.minusIcon} alt="" src="/minus-1.svg" />
                </div>
                <div className={styles.heading}>
                  <b className={styles.b}>01</b>
                </div>
                <div className={styles.plusWrapper}>
                  <img className={styles.plusIcon} alt="" src="/plus-3.svg" />
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.incluir}>incluir</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.gradienteParent}>
        <div className={styles.gradiente} style={gradienteStyle} />
        <img className={styles.caretleftIcon} alt="" src="/caretleft-1.svg" />
      </div>
    </div>
  );
};

export default FrameComponent2;
