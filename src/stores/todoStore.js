import { writable } from "svelte/store";

function createTodoStore() {
  const { subscribe, set, update } = writable([
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

  return {
    subscribe,
    addTodo: (newTodo) => update((currentTodos) => [...currentTodos, newTodo]),
    updateCompleted: (todoId, isCompleted) =>
      update((currentTodos) => {
        let copiedTodos = [...currentTodos];
        let checkedTodo = copiedTodos.find((todo) => todo.id === todoId);

        checkedTodo.isCompleted = !isCompleted;

        return copiedTodos;
      }),
    deleteTodo: (todoId) =>
      update((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== todoId);
      }),
    clearCompletedTodos: () =>
      update((currentTodos) => {
        // return only todos that are incomplete
        return currentTodos.filter((todo) => todo.isCompleted === false);
      }),
  };
}

export const todos = createTodoStore();
