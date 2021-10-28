import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  // useState will always return an array with two values that represent two states. You can save these values into constants, optionally via array destructuring as in this example.
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // In the above useState call, the first value is the initial value passed to useState, in this case "false". The second value is a function that allows you to change that value. This is because you dont change it by assigning a new value to it, but by calling the function.
  // This is because when this function is called, it will evaluate, but then it will also reevaulate the component function, and update what is rendered on the screen.
  // This allows you to pick up the latest state value and possible render something different depending on the state value.
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* when using and operator in an expression, if both are truthy, the second value is returned. Thus the below can be used in place of the ternary operator. */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;

// The name of the function should start with a capital character.
