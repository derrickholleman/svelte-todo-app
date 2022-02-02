import { writable } from "svelte/store";

function createTodoStore(key, todosArr) {
  const { subscribe, set, update } = writable(todosArr);

  return {
    subscribe,
    addTodo: (newTodo) => update((currentTodos) => [newTodo, ...currentTodos]),
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
    useLocalStorage: () => {
      // get todos from local storage
      const todosJSON = localStorage.getItem(key);
      if (todosJSON) {
        // set the store with todos fetched from local storage
        set(JSON.parse(todosJSON));
      }
      // take the stored todos and update local storage
      subscribe((storedTodos) => {
        localStorage.setItem(key, JSON.stringify(storedTodos));
      });
    },
  };
}

// params are local storage key and default data
export const todos = createTodoStore("todos", [
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
