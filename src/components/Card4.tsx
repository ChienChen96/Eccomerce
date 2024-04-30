import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card4.module.css";

export type Card4Type = {
  dish?: string;
  torradasDeParma?: string;
  cycleDetector?: string;
  primAlgorithm?: string;

  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Card4: FunctionComponent<Card4Type> = ({
  dish,
  torradasDeParma,
  cycleDetector,
  primAlgorithm,
  propDebugCommit,
  propPosition,
  propTop,
  propLeft,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propDebugCommit, propPosition, propTop, propLeft]);

  return (
    <div className={styles.card} style={card2Style}>
      <div className={styles.pencilWrapper}>
        <img className={styles.pencilIcon} alt="" src="/pencil.svg" />
      </div>
      <div className={styles.dishWrapper}>
        <img className={styles.dishIcon} alt="" src={dish} />
      </div>
      <b className={styles.torradasDeParma}>{torradasDeParma}</b>
      <div className={styles.text}>
        <div className={styles.cycleDetector}>{cycleDetector}</div>
      </div>
      <div className={styles.dijkstraAlgorithm}>
        <div className={styles.text1}>
          <div className={styles.primAlgorithm}>{primAlgorithm}</div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
