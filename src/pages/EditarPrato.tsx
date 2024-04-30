import { FunctionComponent } from "react";
import Component from "../components/Component";
import FrameComponent3 from "../components/FrameComponent3";
import IncluirButton from "../components/IncluirButton";
import Footer1 from "../components/Footer1";
import styles from "./EditarPrato.module.css";

const EditarPrato: FunctionComponent = () => {
  return (
    <div className={styles.editarPrato}>
      <Component
        backButtonMarginLeft="-1px"
        buttonHeight="26px"
        receiptIconLineHeight="160%"
      />
      <main className={styles.editarPratoInner}>
        <section className={styles.frameParent}>
          <FrameComponent3 editarPrato="Editar prato" />
          <IncluirButton />
        </section>
      </main>
      <Footer1 />
    </div>
  );
};

export default EditarPrato;
