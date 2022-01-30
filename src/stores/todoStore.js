import { writable } from "svelte/store";
export const todos = writable([
  {
    id: 1,
    text: "Cut the grass",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Study coding",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Wash the dishes",
    isCompleted: true,
  },
]);
