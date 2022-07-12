import { Route, Routes } from "react-router-dom";
import { EditTodo } from "../EditTodo";

export const Allroutes = () => {
  <Routes>
    <Route path="/:id" element={<EditTodo />} />
  </Routes>;
};
