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
    }
  ])

  return {
    subscribe,
    update,
    addTodo: (newTodo) => update((currentTodos) => [...currentTodos, newTodo]),
    deleteTodo: (todoId) => update((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    })
  }
}

export const todos = createTodoStore()
