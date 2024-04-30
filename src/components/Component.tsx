import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  /** Style props */
  backButtonMarginLeft?: CSSProperties["marginLeft"];
  buttonHeight?: CSSProperties["height"];
  receiptIconLineHeight?: CSSProperties["lineHeight"];
};

const Component: FunctionComponent<ComponentType> = ({
  backButtonMarginLeft,
  buttonHeight,
  receiptIconLineHeight,
}) => {
  const component2Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: backButtonMarginLeft,
    };
  }, [backButtonMarginLeft]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: buttonHeight,
    };
  }, [buttonHeight]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: receiptIconLineHeight,
    };
  }, [receiptIconLineHeight]);

  return (
    <header className={styles.component2} style={component2Style}>
      <div className={styles.backButtonParent}>
        <div className={styles.backButton}>
          <div className={styles.polygonParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/polygon-1.svg"
            />
            <div className={styles.adminLabel}>
              <h2 className={styles.foodExplorer}>food explorer</h2>
              <div className={styles.searchResultLabel}>
                <div className={styles.admin}>admin</div>
              </div>
            </div>
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
        <div className={styles.textWrapper} style={groupDivStyle}>
          <div className={styles.text} style={textStyle}>
            Meus favoritos
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <img className={styles.receiptIcon} alt="" src="/receipt.svg" />
        <div className={styles.meuPedido0}>Novo prato</div>
      </button>
      <div className={styles.footerInfoContainer}>
        <img
          className={styles.signoutIcon}
          loading="lazy"
          alt=""
          src="/signout.svg"
        />
      </div>
    </header>
  );
};

export default Component;
