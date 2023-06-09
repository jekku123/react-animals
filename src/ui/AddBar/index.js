import { useInput } from '../../hooks/useInput';
import './styles/index.css';

const AddBar = ({ addCard, location }) => {
  const [input, handleInput, clearInput] = useInput();

  return (
    <div className='addbar'>
      <input
        name='add'
        onChange={handleInput}
        value={input}
        placeholder={`Insert ${location}..`}
      />
      <button
        className='btn add-btn'
        onClick={() => {
          addCard(input, location);
          clearInput();
        }}
      >
        ADD
      </button>
    </div>
  );
};

// For App function component
/*
const AddBar = ({ addCard }) => {
  const [input, handleInput, clearInput] = useInput();

  return (
    <div className='addbar'>
      <input name='add' onChange={handleInput} value={input} />
      <button
        className='btn add-btn'
        onClick={() => {
          addCard(input);
          clearInput();
        }}
      >
        ADD
      </button>
    </div>
  );
};
*/

export default AddBar;
