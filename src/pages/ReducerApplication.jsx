import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

export default function ReducerApplication() {
  const initialValue = { counter: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "additional":
        return { counter: state.counter + 1 };
      case "subtraction":
        return { counter: state.counter - 1 };
      case "multiplication":
        return { counter: state.counter * 2 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <br />
      <br />
      <p>output-value: {state.counter}</p>
      <button onClick={() => dispatch({ type: "additional" })}>additional</button>
      <button onClick={() => dispatch({ type: "subtraction" })}>subtraction</button>
      <button onClick={() => dispatch({ type: "multiplication" })}>multiplication</button>
      <Outlet />
    </div>
  );
}
