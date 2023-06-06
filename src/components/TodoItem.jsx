const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className="item">
    <div className="content">
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="submit" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
  </li>
);
export default TodoItem;
