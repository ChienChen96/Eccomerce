import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card3.module.css";

export type Card3Type = {
  dish?: string;
  torradasDeParma?: string;
  connectedComponent?: string;
  shortestPathTree?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Card3: FunctionComponent<Card3Type> = ({
  dish,
  torradasDeParma,
  connectedComponent,
  shortestPathTree,
  propPadding,
  propPosition,
  propDebugCommit,
  propTop,
  propLeft,
}) => {
  const card3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      position: propPosition,
      debugCommit: propDebugCommit,
      top: propTop,
      left: propLeft,
    };
  }, [propPadding, propPosition, propDebugCommit, propTop, propLeft]);

  return (
    <div className={styles.card} style={card3Style}>
      <div className={styles.dishWrapper}>
        <img className={styles.dishIcon} alt="" src={dish} />
      </div>
      <b className={styles.torradasDeParma}>{torradasDeParma}</b>
      <div className={styles.text}>
        <div className={styles.connectedComponent}>{connectedComponent}</div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text1}>
          <div className={styles.shortestPathTree}>{shortestPathTree}</div>
        </div>
      </div>
      <img className={styles.pencilIcon} alt="" src="/pencil.svg" />
    </div>
  );
};

export default Card3;
