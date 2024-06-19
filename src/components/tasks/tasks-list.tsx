import { tasks } from "@/db/test";
import { Divider } from "@nextui-org/react";
import TaskCard from "./task-card";

export default function TasksList() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Tasks</h1>
      <Divider />
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task}></TaskCard>;
      })}
    </div>
  );
}
