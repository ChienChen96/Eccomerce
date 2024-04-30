import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./KruskalAlgorithm.module.css";

export type KruskalAlgorithmType = {
  dish?: string;
  torradasDeParma?: string;
  text?: string;
  text1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const KruskalAlgorithm: FunctionComponent<KruskalAlgorithmType> = ({
  dish,
  torradasDeParma,
  text,
  text1,
  propLeft,
}) => {
  const gradiente1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.kruskalAlgorithm}>
      <div className={styles.card}>
        <div className={styles.dataAggregator}>
          <img
            className={styles.pencilIcon}
            loading="lazy"
            alt=""
            src="/pencil.svg"
          />
        </div>
        <div className={styles.container}>
          <img className={styles.dishIcon} loading="lazy" alt="" src={dish} />
        </div>
        <b className={styles.torradasDeParma}>{torradasDeParma}</b>
        <div className={styles.text}>
          <div className={styles.text1}>{text}</div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text2}>
            <div className={styles.text3}>{text1}</div>
          </div>
        </div>
      </div>
      <div className={styles.gradienteParent}>
        <div className={styles.gradiente} style={gradiente1Style} />
        <img
          className={styles.caretleftIcon}
          loading="lazy"
          alt=""
          src="/caretleft-1.svg"
        />
      </div>
    </div>
  );
};

export default KruskalAlgorithm;
