import { Check } from "phosphor-react";
import styles from "./InputCheck.module.css";

interface InputCheckProps {
  checked: boolean;
  onClick: () => void;
}

export default function InputCheck({ checked, onClick }: InputCheckProps) {
  if(checked) {
    return (
      <div onClick={onClick} className={styles.checked}>
        <Check />
      </div>
    )
  }
  
  return <div onClick={onClick} className={styles.check}></div>
}
