import { supabase } from "./supabase";

// --- category API ---

export async function readCats() {
  const { data, error } = await supabase.from("category").select("*");

  if (error) {
    throw new Error("There was an error fetching category from the API");
  }

  return data;
}

// --- Todos API ---

export async function readTodos() {
  const { data, error } = await supabase.from("todos").select("*, category(*)");

  if (error) {
    throw new Error("There was an error fetching todos from the API");
  }

  return data;
}

export async function addTodo({ title, categoryId }) {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed: false, categoryId }])
    .select("*, category(*)")
    .single();

  if (error) {
    throw new Error("There was an error adding the todo");
  }

  return data;
}

export async function deleteTodo(id) {
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    throw new Error("There was an error deleting the todo"());
  }
}

export async function toggleTodo({ id, completed }) {
  const { data, error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id)
    .select("*, category(*)")
    .single();

  if (error) {
    throw new Error("There was an error updating the todo status");
  }

  return data;
}

export async function editTodo({ title, categoryId, id }) {
  const { data, error } = await supabase
    .from("todos")
    .update({ title, categoryId, id })
    .eq("id", id)
    .select("*, category(*)")
    .single();

  if (error) {
    throw new Error("There was an error editing the todo");
  }

  return data;
}
