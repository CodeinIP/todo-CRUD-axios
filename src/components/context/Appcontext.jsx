import axios from "axios";
import { createContext, useState } from "react";

export const Appcontext = createContext();
export const AppcontextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getTodos = () => {
    setLoading(true);
    axios
      .get("https://rct-restaurant-app-api.herokuapp.com/todos")
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };
  const addTodo = ({ todo, status = false }) => {
    // console.log(todo)
    axios
      .post("https://rct-restaurant-app-api.herokuapp.com/todos", {
        todo,
        status
      })
      .then(() => getTodos());
  };
  const deleteTodo = ({ id }) => {
    console.log(id);
    axios
      .delete(`https://rct-restaurant-app-api.herokuapp.com/todos/${id}`)
      .then(() => getTodos());
  };
  const updateTodo = ({ id, newstatus }) => {
    console.log(id, newstatus);
    axios
      .patch(`https://rct-restaurant-app-api.herokuapp.com/todos/${id}`, {
        status: newstatus
      })
      .then(() => getTodos());
  };
  return (
    <Appcontext.Provider
      value={{
        todos,
        loading,
        error,
        getTodos,
        addTodo,
        deleteTodo,
        updateTodo
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
