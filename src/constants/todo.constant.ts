import { TodoListType } from "@/types/todo.type";

// Initialize todoList data
export const initialTodoList: TodoListType[] = [
  { type: "Fruit", name: "Apple" },
  { type: "Vegetable", name: "Broccoli" },
  { type: "Vegetable", name: "Mushroom" },
  { type: "Fruit", name: "Banana" },
  { type: "Vegetable", name: "Tomato" },
  { type: "Fruit", name: "Orange" },
  { type: "Fruit", name: "Mango" },
  { type: "Fruit", name: "Pineapple" },
  { type: "Vegetable", name: "Cucumber" },
  { type: "Fruit", name: "Watermelon" },
  { type: "Vegetable", name: "Carrot" },
];

export const EXPIRE_TIME = 5000;

export enum TodoItemType {
  VEGETABLE = "Vegetable",
  FRUIT = "Fruit",
}
