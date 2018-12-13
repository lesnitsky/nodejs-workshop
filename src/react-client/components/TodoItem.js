import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({
  isDone, content, id, onTodoToggle, onTodoRemoved,
}) => (
  <div className="todo-item">
    <input type="checkbox" checked={isDone} onChange={() => onTodoToggle(id)} />
    <p>{content}</p>
    <button className="delete-btn" onClick={() => onTodoRemoved(id)}>
      Delete
    </button>

    <style jsx>{`
      .todo-item {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

TodoItem.propTypes = {
  isDone: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemoved: PropTypes.func.isRequired,
};
