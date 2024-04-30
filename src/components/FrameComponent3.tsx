import { FunctionComponent } from "react";
import Card2 from "./Card2";
import Card1 from "./Card1";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.refeiesParent}>
      <h1 className={styles.refeies}>Refeições</h1>
      <div className={styles.frameParent}>
        <div className={styles.cardParent}>
          <Card2
            dish="/dish@2x.png"
            torradasDeParma={`Salada Ravanello >`}
            text="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            text1="R$ 49,97"
            plusChecked={`{plusIconChecked}`}
          />
          <div className={styles.gradienteParent}>
            <div className={styles.gradiente} />
            <img
              className={styles.caretleftIcon}
              loading="lazy"
              alt=""
              src="/caretleft.svg"
            />
          </div>
        </div>
        <Card1
          dish="/dish-1@2x.png"
          torradasDeParma={`Spaguetti Gambe  >`}
          text="Massa fresca com camarões e pesto. "
          text1="R$ 79,97"
        />
        <Card1
          dish="/dish-2@2x.png"
          torradasDeParma={`Torradas de Parma >`}
          text="Presunto de parma e rúcula em um pão com fermentação natural."
          text1="R$ 25,97"
          propPadding="var(--padding-sm) var(--padding-mid) var(--padding-3xl) var(--padding-4xl)"
        />
        <img className={styles.frameChild} alt="" src="/group-5950.svg" />
        <div className={styles.card}>
          <div className={styles.sequenceController}>
            <img className={styles.dishIcon} alt="" src="/dish-3@2x.png" />
          </div>
          <h2 className={styles.torradasDeParma}>{`Salada Molla  >`}</h2>
          <div className={styles.text}>
            <div
              className={styles.dataMerger}
            >{`Massa fresca com camarões e pesto. `}</div>
          </div>
          <div className={styles.variableHolder}>
            <div className={styles.text1}>
              <div className={styles.dataTransformer}>R$ 79,97</div>
            </div>
          </div>
          <div className={styles.filterChain}>
            <div className={styles.decisionMaker}>
              <div className={styles.outputModifier}>
                <div className={styles.stepper}>
                  <input className={styles.functionExecutor} type="checkbox" />
                  <div className={styles.heading}>
                    <b className={styles.resultSorter}>01</b>
                  </div>
                  <div className={styles.filterStack}>
                    <img className={styles.plusIcon} alt="" src="/plus-3.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.incluir}>incluir</div>
              </div>
            </div>
          </div>
          <img className={styles.inputValidatorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
