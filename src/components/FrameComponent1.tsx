import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import Card from "./Card";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.sobremesasParent}>
      <h1 className={styles.sobremesas}>Sobremesas</h1>
      <div className={styles.frameParent}>
        <FrameComponent2
          dish="/dish-4@2x.png"
          torradasDeParma={`Prugna Pie >`}
          text="Torta de ameixa com massa amanteigada, polvilho em açúcar."
          text1="R$ 79,97"
        />
        <Card
          dish="/dish-5@2x.png"
          torradasDeParma={`Peachy pastrie >`}
          text="Delicioso folheado de pêssego com folhas de hortelã."
          text1="R$ 32,97"
        />
        <Card
          dish="/dish-6@2x.png"
          torradasDeParma={`Macarons  >`}
          text="Farinha de amêndoas, manteiga, claras e açúcar."
          text1="R$ 79,97"
        />
        <img className={styles.frameChild} alt="" src="/group-5950.svg" />
        <div className={styles.card}>
          <div className={styles.dishWrapper}>
            <img className={styles.dishIcon} alt="" src="/dish-7@2x.png" />
          </div>
          <h2 className={styles.torradasDeParma}>{`Bolo de damasco  >`}</h2>
          <div className={styles.text}>
            <div className={styles.text1}>
              Damascos frescos em uma massa sem glúten.
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text2}>
              <div className={styles.text3}>R$ 19,97</div>
            </div>
          </div>
          <div className={styles.cardInner}>
            <div className={styles.frameGroup}>
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
                    <img className={styles.plusIcon} alt="" src="/plus-3.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.incluir}>incluir</div>
              </div>
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
