import { useEffect } from 'react';
import { connectSocket, subscribeToNewMessages } from '../socketApi';
import Question from './Question';
import Options from './Options';

import { useVote } from '../contexts/VoteContext';

function Container() {
  const { setOptions } = useVote();

  useEffect(() => {
    connectSocket();

    subscribeToNewMessages((data) => {
      setOptions(data);
    });
  }, [setOptions]);

  return (
    <div>
      <Question />
      <Options />
    </div>
  );
}

export default Container;
