import { useContext, useEffect } from "react";
import { Appcontext } from "./context/Appcontext";
import "../styles.css";
import { useNavigate } from "react-router-dom";
export const Todolist = () => {
  const navigate = useNavigate();
  const {
    todos,
    loading,
    error,
    deleteTodo,
    updateTodo,
    getTodos
  } = useContext(Appcontext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todoListDiv">
      {todos.length === 0 && (
        <div className="emptyTodos">
          <h4>Please add some tasks</h4>
        </div>
      )}
      {loading && (
        <div className="loadingDiv">
          <h4>...loading your todos. Please wait.</h4>
        </div>
      )}
      {error && (
        <div className="errorDiv">
          <h4>Something went wrong. Try again after some time.</h4>
        </div>
      )}
      {todos?.map((ele) => (
        <div key={ele.id} className="todoItemDiv">
          <button
            className="editBtn"
            onClick={() => navigate(`/edit/${ele.id}`)}
          >
            <img
              src="https://imgs.search.brave.com/ayCtR7NFIPiJS88MHD0FiI0GsJF_w_wv59ZnZySWlhE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/OW1yWV8yNXNsaW1L/U0ZUWGctS09nSGFI/YSZwaWQ9QXBp"
              width="20px"
              alt=""
            />
          </button>
          <button
            className="statusBtn"
            onClick={() => updateTodo({ id: ele.id, newstatus: !ele.status })}
          >
            {ele.status ? "Done" : "Not done"}
          </button>
          <p className={ele.status ? "taskDone" : null}>{ele.todo}</p>
          <button
            className="deleteBtn"
            onClick={() => deleteTodo({ id: ele.id })}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
