import { Task } from "@/db/test";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card isBlurred={true}>
      <CardHeader>
        <h4 className="text-md">{task.title}</h4>
      </CardHeader>
      <Divider />
      <CardBody>{task.category}</CardBody>
    </Card>
  );
}
