import { FunctionComponent } from "react";
import KruskalAlgorithm from "./KruskalAlgorithm";
import Card4 from "./Card4";
import Card3 from "./Card3";
import styles from "./BTree.module.css";

const BTree: FunctionComponent = () => {
  return (
    <div className={styles.bTree}>
      <div className={styles.refeies}>Refeições</div>
      <div className={styles.octree}>
        <KruskalAlgorithm
          dish="/dish1@2x.png"
          torradasDeParma={`Salada Ravanello >`}
          text="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
          text1="R$ 49,97"
        />
        <div className={styles.card}>
          <img className={styles.pencilIcon} alt="" src="/pencil.svg" />
          <div className={styles.splayTree}>
            <div className={styles.blinkingTree}>
              <div className={styles.persistentTree}>
                <img className={styles.dishIcon} alt="" src="/dish-12@2x.png" />
              </div>
              <b className={styles.torradasDeParma}>{`Spaguetti Gambe  >`}</b>
              <div className={styles.text}>
                <div
                  className={styles.weightedGraph}
                >{`Massa fresca com camarões e pesto. `}</div>
              </div>
              <div className={styles.undirectedGraph}>
                <div className={styles.text1}>
                  <div className={styles.starGraph}>R$ 79,97</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card4
          dish="/dish-21@2x.png"
          torradasDeParma={`Torradas de Parma >`}
          cycleDetector="Presunto de parma e rúcula em um pão com fermentação natural."
          primAlgorithm="R$ 25,97"
        />
        <img className={styles.octreeChild} alt="" src="/group-59501.svg" />
        <Card3
          dish="/dish-31@2x.png"
          torradasDeParma={`Salada Molla  >`}
          connectedComponent="Massa fresca com camarões e pesto. "
          shortestPathTree="R$ 79,97"
        />
      </div>
    </div>
  );
};

export default BTree;
