import React, { ReactElement, useRef, useState } from 'react';
import { DiceRollerClient } from './DiceRollerClient';
import './_diceRoller.scss';

const DiceRoller = (): ReactElement => {
  const diceRollerClient = useRef(new DiceRollerClient());
  const diceRollerInput = useRef(null);
  const [input, setInput] = useState('');
  const [roll, setRoll] = useState<number | null>(null);

  const onSubmit = e => {
    e.preventDefault();
    const response = diceRollerClient.current.roll(input);
    setRoll(response);
    setInput('');
  };

  return (
    <div className='dice-roller-component'>
      <form
        autocomplete="off"
        className="dice-roller-component-form"
        onSubmit={onSubmit}>
        <fieldset>
          <input
            className="dice-roller-component-input"
            onChange={e => setInput(e.target.value)}
            ref={diceRollerInput}
            type="text"
            value={input}/>
          <p>
            Roll:
            {' '}
            <span className="dice-roller-component-roll">
              {roll}
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export { DiceRoller };
