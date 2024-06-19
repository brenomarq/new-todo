export type Task = {
  id: number;
  title: string;
  category: string;
  priority: string;
  isCompleted: boolean;
};

export const tasks = [
  {
    id: 1,
    title: "Study Typescript for 1 hour",
    category: "coding",
    priority: "orange",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Do your homework",
    category: "school",
    priority: "red",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Make your lunch",
    category: "housework",
    priority: "yellow",
    isCompleted: false,
  },
];
