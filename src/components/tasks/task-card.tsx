import { Task } from "@/db/test";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card>
      <CardHeader>{task.title}</CardHeader>
      <Divider />
      <CardBody>{task.category}</CardBody>
    </Card>
  );
}
// export default function TaskCard({ task }: TaskCardProps) {
//   return (
//     <Card isBlurred={true}>
//       <CardBody>{task}</CardBody>
//     </Card>
//   );
// }
