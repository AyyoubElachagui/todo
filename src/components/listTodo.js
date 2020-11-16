import React from "react";

const listTodo = (props) => {
  return (
    <div className="border p-3 bg-light   ">
      <ul className="list-group">
        {props.list.length > 0 ? (
          props.list.map((todos) => (
            <li className="list-group-item active mb-2" key={todos.id}>
              {todos.todo}
              <button
                onClick={() => {
                  props.IdTodo(todos.id);
                }}
                type="button"
                className="btn btn-danger float-right"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>
          ))
        ) : (
          <p className="center">Write something here</p>
        )}
      </ul>
    </div>
  );
};

export default listTodo;
