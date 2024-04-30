import { FunctionComponent } from "react";
import styles from "./FormControl.module.css";

export type FormControlType = {
  email?: string;
  exemploExemploexePlacehol?: string;
};

const FormControl: FunctionComponent<FormControlType> = ({
  email,
  exemploExemploexePlacehol,
}) => {
  return (
    <div className={styles.formcontrol}>
      <div className={styles.email}>{email}</div>
      <div className={styles.selectionfield}>
        <input
          className={styles.exemploExemploexemplocomb}
          placeholder={exemploExemploexePlacehol}
          type="text"
        />
      </div>
    </div>
  );
};

export default FormControl;
