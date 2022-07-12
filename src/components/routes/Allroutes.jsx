import { Routes, Route } from "react-router-dom";
import { EditTodo } from "../EditTodo";
import { Todo } from "../Todo";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/edit/:id" element={<EditTodo />} />
    </Routes>
  );
};
