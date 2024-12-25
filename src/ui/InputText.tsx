import styles from "./InputText.module.css";

export default function InputText(props: React.InputHTMLAttributes<HTMLInputElement>) {
  
  return <input className={styles.button}  {...props} />
}
