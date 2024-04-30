import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <main className={styles.frameParent}>
        <section className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h1 className={styles.saboresInigualveis}>Sabores inigualáveis</h1>
            <div className={styles.sintaOCuidado}>
              Sinta o cuidado do preparo com ingredientes selecionados
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </section>
        <div className={styles.frameGroup}>
          <FrameComponent3 />
          <FrameComponent1 />
          <FrameComponent />
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.colorPaletteParent}>
              <img
                className={styles.colorPaletteIcon}
                alt=""
                src="/polygon-1-1.svg"
              />
              <h2 className={styles.foodExplorer}>food explorer</h2>
            </div>
          </div>
          <div className={styles.alignmentManager}>
            <div className={styles.subtitle}>
              © 2023 - Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
