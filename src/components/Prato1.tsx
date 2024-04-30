import { FunctionComponent } from "react";
import Component from "./Component";
import FrameComponent from "./FrameComponent";
import Footer from "./Footer";
import styles from "./Prato1.module.css";

const Prato1: FunctionComponent = () => {
  return (
    <div className={styles.prato}>
      <section className={styles.selectionFieldContainer}>
        <Component />
        <div className={styles.selectionFieldContainerInner}>
          <div className={styles.dishNameLabelParent}>
            <div className={styles.dishNameLabel}>
              <div className={styles.ingredientsListContainer}>
                <img
                  className={styles.caretleftIcon}
                  loading="lazy"
                  alt=""
                  src="/caretleft1.svg"
                />
              </div>
              <h2 className={styles.voltar}>voltar</h2>
            </div>
            <div className={styles.paoNaanTag}>
              <img
                className={styles.dishIcon}
                loading="lazy"
                alt=""
                src="/dish2@2x.png"
              />
              <div className={styles.rabaneteTag}>
                <div className={styles.tomateTag}>
                  <FrameComponent />
                  <button className={styles.buttonWrapper}>
                    <div className={styles.button}>
                      <div className={styles.incluir}>Editar prato</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Prato1;
