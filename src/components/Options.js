import { useState } from 'react';
import { sendMessage } from '../socketApi';
import { useVote } from '../contexts/VoteContext';

function Options() {
  const { options } = useVote();
  const [selectedOption, setSelectedOption] = useState('javascript');

  const handleSelect = ({ target }) => setSelectedOption(target.value);

  const handleSubmit = () => {
    sendMessage('new-vote', selectedOption);
  };

  const total = Object.keys(options).reduce((previous, key) => previous + options[key], 0);

  // console.log(Object.values(options));
  // Object.values(options).map((item) => (total = total + item));
  // console.log('re-render', total);

  const getPercent = (key) => {
    return ((options[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
  };

  return (
    <div id="options">
      <pre>{JSON.stringify(options, null, 2)}</pre>

      <h1>Total: {total}</h1>

      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="javascript"
          onChange={handleSelect}
          checked={selectedOption === 'javascript'}
        />
        JavaScript ({getPercent('javascript')} %)
      </label>
      <progress id="file" value={options['javascript']} max={total} />

      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="go"
          onChange={handleSelect}
          checked={selectedOption === 'go'}
        />
        GO ({getPercent('go')} %)
      </label>
      <progress id="file" value={options['go']} max={total} />

      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="php"
          onChange={handleSelect}
          checked={selectedOption === 'php'}
        />
        PHP ({getPercent('php')} %)
      </label>
      <progress id="file" value={options['php']} max={total} />

      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="c"
          onChange={handleSelect}
          checked={selectedOption === 'c'}
        />
        C ({getPercent('c')} %)
      </label>
      <progress id="file" value={options['c']} max={total} />

      <br />
      <br />
      <div>
        <button onClick={handleSubmit}>Vote</button>
      </div>
    </div>
  );
}

export default Options;
