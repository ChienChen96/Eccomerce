import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import Footer from "./Footer";
import styles from "./Prato.module.css";

const Prato: FunctionComponent = () => {
  return (
    <div className={styles.prato}>
      <section className={styles.header}>
        <header className={styles.navbar}>
          <div className={styles.selectionField}>
            <div className={styles.button}>
              <div className={styles.buttonInner}>
                <div className={styles.foodExplorerParent}>
                  <img
                    className={styles.foodExplorerIcon}
                    loading="lazy"
                    alt=""
                    src="/polygon-1.svg"
                  />
                  <h2 className={styles.foodExplorer}>food explorer</h2>
                </div>
              </div>
              <button className={styles.selectionfield}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.busquePorPratosOuIngredienWrapper}>
                  <div className={styles.busquePorPratos}>
                    Busque por pratos ou ingredientes
                  </div>
                </div>
              </button>
              <div className={styles.text}>Meus favoritos</div>
            </div>
          </div>
          <button className={styles.button1}>
            <img className={styles.receiptIcon} alt="" src="/receipt.svg" />
            <div className={styles.myOrder}>
              <div className={styles.meuPedido0}>Pedidos (0)</div>
            </div>
          </button>
          <div className={styles.signoutWrapper}>
            <img
              className={styles.signoutIcon}
              loading="lazy"
              alt=""
              src="/signout.svg"
            />
          </div>
        </header>
        <div className={styles.headerInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.caretleftWrapper}>
                <img
                  className={styles.caretleftIcon}
                  loading="lazy"
                  alt=""
                  src="/caretleft1.svg"
                />
              </div>
              <h2 className={styles.voltar}>voltar</h2>
            </div>
            <div className={styles.dishParent}>
              <img
                className={styles.dishIcon}
                loading="lazy"
                alt=""
                src="/dish2@2x.png"
              />
              <div className={styles.saladaRavanelloWrapper}>
                <div className={styles.saladaRavanello}>
                  <FrameComponent />
                  <div className={styles.frameContainer}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <input className={styles.frameInput} type="checkbox" />
                        <b className={styles.includeButton}>01</b>
                        <div className={styles.plusWrapper}>
                          <img
                            className={styles.plusIcon}
                            loading="lazy"
                            alt=""
                            src="/plus.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.button2}>
                      <div className={styles.incluir}>incluir ∙ R$ 25,00</div>
                    </div>
                  </div>
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

export default Prato;
