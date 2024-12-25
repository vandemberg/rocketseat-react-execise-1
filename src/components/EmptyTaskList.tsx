import { BookBookmark } from "phosphor-react"
import styles from "./EmptyTaskList.module.css";

export default function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <BookBookmark />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
