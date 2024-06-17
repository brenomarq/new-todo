import { Card, CardBody } from "@nextui-org/react";

interface TaskCardProps {
  task: string;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card isBlurred={true}>
      <CardBody>{task}</CardBody>
    </Card>
  );
}
