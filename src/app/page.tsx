import OptionsBar from "@/components/options-bar";
import TasksList from "@/components/tasks/tasks-list";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-1 border rounded border-red-500">
        <OptionsBar />
      </div>
      <div className="col-span-3">
        <TasksList />
      </div>
    </div>
  );
}
