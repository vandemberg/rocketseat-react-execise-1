import { Trash } from "phosphor-react";
import InputCheck from "../ui/InputCheck";
import styles from "./Task.module.css";
import { Task as ITask } from "../App";

interface TaskProps {
  task: ITask;
  onDelete: (task: ITask) => void;
  onToggle: (task: ITask) => void;
}

export default function Task({ task, onToggle, onDelete }: TaskProps) {
  return (
    <div className={task.completed ? styles.taskComplete : styles.task}>
      <InputCheck onClick={() => onToggle(task)} checked={task.completed} />
      
      <p>{task.title}</p>      
      
      <button onClick={() => onDelete(task)}><Trash /></button>
    </div>
  )
}
