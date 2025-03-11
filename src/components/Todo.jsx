import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Features/Todo/Todoslice';

const Todo = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="container">
        <table className='table'>
          <thead>
            <tr>
              <th>Todo List</th>
              <th className='text-end'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(item => (
              <tr key={item.id}>
                <td>
                  {editId === item.id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className='form-control'
                    />
                  ) : (
                    item.text
                  )}
                </td>
                <td className='text-end'>
                  {editId === item.id ? (
                    <button onClick={() => handleUpdate(item.id)} className='btn btn-info mx-1'>✔</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(item.id, item.text)} className='btn btn-success mx-1'>✏️</button>
                      <button onClick={() => dispatch(removeTodo(item.id))} className='btn btn-dark mx-1'>🗑️</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
