import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
} from "react";
import styles from "./Card2.module.css";

export type Card2Type = {
  dish?: string;
  torradasDeParma?: string;
  text?: string;
  text1?: string;
  plusChecked?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAccentColor?: CSSProperties["accentColor"];
};

const Card2: FunctionComponent<Card2Type> = ({
  dish,
  torradasDeParma,
  text,
  text1,
  plusChecked,
  propWidth,
  propHeight,
  propAccentColor,
}) => {
  const [plusIconChecked, setPlusIconChecked] = useState(true);
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const plusStyle: CSSProperties = useMemo(() => {
    return {
      accentColor: propAccentColor,
    };
  }, [propAccentColor]);

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardInner}>
        <div className={styles.frameParent}>
          <div className={styles.dishWrapper}>
            <img className={styles.dishIcon} loading="lazy" alt="" src={dish} />
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
                <input
                  className={styles.plus}
                  checked={plusChecked}
                  type="checkbox"
                  onChange={(event) => setPlusIconChecked(event.target.checked)}
                  style={plusStyle}
                />
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

export default Card2;
