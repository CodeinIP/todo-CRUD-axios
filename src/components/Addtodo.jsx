import { useContext, useState } from "react";
import { Appcontext } from "./context/Appcontext";
import { Todo } from "./Todo";

import "../styles.css";
export const Addtodo = () => {
  const { addTodo } = useContext(Appcontext);
  const [text, setText] = useState("");
  return (
    <div className="addTodoDiv">
      <input
        type="text"
        value={text}
        placeholder="Add something.."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo({ todo: text });
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
