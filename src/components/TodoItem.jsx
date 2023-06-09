import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className="item">
      <div className="content" style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className="check-item"
        />
        <p className="text-item">{itemProp.title}</p>
        <button className="edit-btn" type="submit" onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button className="trash-btn" type="submit" onClick={() => delTodo(itemProp.id)}>
          <FaTrash />
        </button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
