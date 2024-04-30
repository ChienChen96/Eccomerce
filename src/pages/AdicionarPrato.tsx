import { FunctionComponent } from "react";
import Component from "../components/Component";
import IncludeButton from "../components/IncludeButton";
import Footer1 from "../components/Footer1";
import styles from "./AdicionarPrato.module.css";

const AdicionarPrato: FunctionComponent = () => {
  return (
    <div className={styles.adicionarPrato}>
      <Component
        backButtonMarginLeft="-1px"
        buttonHeight="26px"
        receiptIconLineHeight="160%"
      />
      <main className={styles.includeButtonWrapper}>
        <IncludeButton />
      </main>
      <Footer1 />
    </div>
  );
};

export default AdicionarPrato;
