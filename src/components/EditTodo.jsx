import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState({});
  const handleInput = (e) => {
    const { value, type, checked } = e.target;
    if (type === "checkbox") {
      setNewTodo({ ...newTodo, status: checked });
    } else {
      setNewTodo({ ...newTodo, todo: value });
    }
  };

  const updateTodo = (id, newTodo) => {
    // console.log(id, newTodo.todo, newTodo.status);
    axios
      .patch(`https://rct-restaurant-app-api.herokuapp.com/todos/${id}`, {
        todo: newTodo.todo,
        status: newTodo.status
      })
      .then((res) => {
        alert("Update Success");
        navigate("/");
      });
  };
  useEffect(() => {
    axios
      .get(`https://rct-restaurant-app-api.herokuapp.com/todos/${id}`)
      .then((res) => setNewTodo(res.data));
  }, [id]);
  return (
    <div>
      <div>
        <input
          value={newTodo?.todo}
          type="text"
          onChange={(e) => handleInput(e)}
        />
        <input
          value={newTodo?.status}
          type="checkbox"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <button onClick={() => updateTodo(id, newTodo)}>Update</button>
      </div>
      <div>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
