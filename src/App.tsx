import { FormEvent, useMemo, useState } from "react";
import Button from "./ui/Button";
import InputText from "./ui/InputText";
import Task from "./components/Task";

import "./assets/global.css";
import Header from "./components/Header";
import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import Badge from "./ui/Badge";
import EmptyTaskList from "./components/EmptyTaskList";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");

  function handleFormSubmit(event: FormEvent): void {
    event.preventDefault();

    const newTask: Task = {
      id: Math.random(),
      title: title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
  }

  function handleTaskDelete(task: Task): void {
    const taskId: number = task.id;
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleTaskToggle(task: Task): void {
    const taskId: number = task.id;
    
    setTasks(tasks.map((t) => {
      if (t.id === taskId) {
        return {
          ...t,
          completed: !t.completed,
        };
      }
      
      return t;
    }));
  }

  const createdTasks: number = useMemo(() => {
    return tasks.length;
  }, [tasks]);
  
  const completedTasks: number = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);
  
  function completeBadgeText(): string {
    if(completedTasks === 0 || createdTasks === 0) {
      return '0';
    }
    
    return `${completedTasks} de ${createdTasks}`;
  }
  
  return (
    <>
      <Header />

      <main className={styles.container}>
        <form onSubmit={handleFormSubmit}>
          <InputText
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required
          />

          <Button type="submit">
            <span>Criar</span>
            <PlusCircle />
          </Button>
        </form>

        <section className={styles.sectionTasks}>
          <header>
            <p>
              Tarefas criadas <Badge text={String(createdTasks)} />
            </p>
            <p>
              Concluídas <Badge text={completeBadgeText()} />
            </p>
          </header>

          <div className={styles.bar}></div>

          {tasks.length === 0 ? (
            <EmptyTaskList />
          ) : (
            tasks.map((task) => (
              <Task
                onDelete={handleTaskDelete}
                onToggle={handleTaskToggle}
                key={task.id}
                task={task}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default App;
