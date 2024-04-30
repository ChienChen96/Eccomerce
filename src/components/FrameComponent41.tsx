import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent41.module.css";

export type FrameComponent4Type = {
  polygon1?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  polygon1,
  frameDivPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div className={styles.signUpInner} style={frameDivStyle}>
      <div className={styles.polygonParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={polygon1}
        />
        <h1 className={styles.foodExplorer}>food explorer</h1>
      </div>
    </div>
  );
};

export default FrameComponent4;
