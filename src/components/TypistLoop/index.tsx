import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import './style.less';

interface Props {
  words: string[];
}

const TypistLoop: React.FC<Props> = ({ words }) => {
  const [typing, setTyping] = useState(true);
  const doneTyping = () => {
    setTyping(false);
  };
  useEffect(() => {
    setTyping(true);
  }, [typing]);

  return (
    <div className="TypistLoop">
      {typing ? (
        <Typist
          cursor={{
            show: true,
            blink: true,
            hideWhenDone: true,
            hideWhenDoneDelay: 1000,
          }}
          onTypingDone={doneTyping}>
          <Typist.Delay ms={1000} />
          {words.map((word: string) => (
            <div>
              <p className="text">{` ${word}`}</p>
              <Typist.Backspace count={word.length} delay={1500} />
              <Typist.Delay ms={1000} />
            </div>
          ))}
        </Typist>
      ) : (
        ''
      )}
    </div>
  );
};

export default TypistLoop;
