const BASE_URL = "http://localhost:5001/todos";

export async function getTodos() {
  try {
    const todosRes = await fetch(BASE_URL);
    return await todosRes.json();
  } catch (err) {
    console.error(err);
  }
}
