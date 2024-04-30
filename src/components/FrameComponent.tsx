import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import Card from "./Card";
import Card2 from "./Card2";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.logicalExpression}>
      <h1 className={styles.bebidas}>Bebidas</h1>
      <div className={styles.dataPath}>
        <FrameComponent2
          dish="/dish-8@2x.png"
          torradasDeParma={`Espresso >`}
          text="Café cremoso feito na temperatura e pressões perfeitas."
          text1="R$ 15,97"
          propLeft="0px"
        />
        <Card
          dish="/dish-9@2x.png"
          torradasDeParma={`Suco de maracujá >`}
          text="Suco de maracujá gelado, cremoso, docinho."
          text1="R$ 13,97"
        />
        <div className={styles.cardParent}>
          <Card2
            dish="/dish-10@2x.png"
            torradasDeParma={`Tè d'autunno >`}
            text="Chá de anis, canela e limão. Sinta o outono italiano."
            text1="R$ 19,97"
            propWidth="304px"
            propHeight="unset"
            propAccentColor="unset"
          />
          <div className={styles.card}>
            <div className={styles.dishWrapper}>
              <img className={styles.dishIcon} alt="" src="/dish-11@2x.png" />
            </div>
            <h2 className={styles.torradasDeParma}>{`Pomo bourbon  >`}</h2>
            <div className={styles.text}>
              <div className={styles.text1}>
                Maçã, whisky, canela. On the rocks.
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text2}>
                <div className={styles.text3}>R$ 79,97</div>
              </div>
            </div>
            <div className={styles.cardInner}>
              <div className={styles.frameParent}>
                <div className={styles.stepperWrapper}>
                  <div className={styles.stepper}>
                    <div className={styles.minusWrapper}>
                      <img
                        className={styles.minusIcon}
                        alt=""
                        src="/minus-1.svg"
                      />
                    </div>
                    <div className={styles.heading}>
                      <b className={styles.b}>01</b>
                    </div>
                    <div className={styles.plusWrapper}>
                      <img
                        className={styles.plusIcon}
                        alt=""
                        src="/plus-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.incluir}>incluir</div>
                </div>
              </div>
            </div>
            <img
              className={styles.analysisArchitectIcon}
              alt=""
              src="/vector.svg"
            />
          </div>
          <img className={styles.frameChild} alt="" src="/group-5951.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
