import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar1";
import BTree from "../components/BTree";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./Home1.module.css";

const Home1: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <Navbar1 />
      <main className={styles.familyTreeParent}>
        <section className={styles.familyTree}>
          <div className={styles.binaryTree}>
            <div className={styles.binaryTreeChild} />
            <div className={styles.saboresInigualveis}>
              Sabores inigualáveis
            </div>
            <div className={styles.sintaOCuidado}>
              Sinta o cuidado do preparo com ingredientes selecionados
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group1@2x.png"
            />
          </div>
        </section>
        <div className={styles.redBlackTree}>
          <BTree />
          <FrameComponent5 />
          <FrameComponent4 />
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.polygonParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/polygon-1-1.svg"
              />
              <b className={styles.foodExplorer}>food explorer</b>
            </div>
          </div>
          <div className={styles.subtitleWrapper}>
            <div className={styles.subtitle}>
              © 2023 - Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home1;
