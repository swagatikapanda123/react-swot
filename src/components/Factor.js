import React from "react";
import './Factor.css';

export const Factor = ({ factor, onRemove }) => {
  return (
    <div>
      <li className="list-item">
        {factor}
        <input
          className="delete"
          type="submit"
          value="Remove"
          placeholder="remove"
          onClick={() => onRemove(factor)}
        />
      </li>
    </div>
  );
};


export default Factor;