import { FunctionComponent } from "react";
import KruskalAlgorithm from "./KruskalAlgorithm";
import Card4 from "./Card4";
import Card3 from "./Card3";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.sobremesasParent}>
      <div className={styles.sobremesas}>Sobremesas</div>
      <div className={styles.frameParent}>
        <KruskalAlgorithm
          dish="/dish-41@2x.png"
          torradasDeParma={`Prugna Pie >`}
          text="Torta de ameixa com massa amanteigada, polvilho em açúcar."
          text1="R$ 79,97"
          propLeft="277px"
        />
        <Card4
          dish="/dish-51@2x.png"
          torradasDeParma={`Peachy pastrie >`}
          cycleDetector="Delicioso folheado de pêssego com folhas de hortelã."
          primAlgorithm="R$ 32,97"
          propDebugCommit="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
        />
        <Card4
          dish="/dish-61@2x.png"
          torradasDeParma={`Macarons  >`}
          cycleDetector="Farinha de amêndoas, manteiga, claras e açúcar."
          primAlgorithm="R$ 79,97"
          propDebugCommit="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
        />
        <img className={styles.frameChild} alt="" src="/group-59501.svg" />
        <Card3
          dish="/dish-71@2x.png"
          torradasDeParma={`Bolo de damasco  >`}
          connectedComponent="Damascos frescos em uma massa sem glúten."
          shortestPathTree="R$ 19,97"
          propPadding="var(--padding-35xl) var(--padding-4xl)"
          propPosition="relative"
          propDebugCommit="unset"
          propTop="unset"
          propLeft="unset"
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
