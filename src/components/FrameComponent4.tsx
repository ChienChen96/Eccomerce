import { FunctionComponent } from "react";
import KruskalAlgorithm from "./KruskalAlgorithm";
import Card4 from "./Card4";
import Card3 from "./Card3";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.bebidasParent}>
      <div className={styles.bebidas}>Bebidas</div>
      <div className={styles.frameParent}>
        <KruskalAlgorithm
          dish="/dish-81@2x.png"
          torradasDeParma="Espresso"
          text="Café cremoso feito na temperatura e pressões perfeitas."
          text1="R$ 15,97"
          propLeft="0px"
        />
        <Card4
          dish="/dish-91@2x.png"
          torradasDeParma={`Suco de maracujá >`}
          cycleDetector="Suco de maracujá gelado, cremoso, docinho."
          primAlgorithm="R$ 13,97"
          propDebugCommit="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
        />
        <div className={styles.cardParent}>
          <Card4
            dish="/dish-101@2x.png"
            torradasDeParma={`Tè d'autunno >`}
            cycleDetector="Chá de anis, canela e limão. Sinta o outono italiano."
            primAlgorithm="R$ 19,97"
            propDebugCommit="unset"
            propPosition="absolute"
            propTop="0px"
            propLeft="0px"
          />
          <Card3
            dish="/dish-111@2x.png"
            torradasDeParma={`Pomo bourbon  >`}
            connectedComponent="Maçã, whisky, canela. On the rocks."
            shortestPathTree="R$ 79,97"
            propPadding="var(--padding-46xl) var(--padding-4xl)"
            propPosition="absolute"
            propDebugCommit="unset"
            propTop="0px"
            propLeft="331px"
          />
          <img className={styles.frameChild} alt="" src="/group-5951.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
