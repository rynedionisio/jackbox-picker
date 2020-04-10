import React from 'react';
import Types from '../types';

const Emoji: React.FC<Types.EmojiInterface> = (
  { label, symbol }
  ) => {
  
    return (
      <span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
    );
  };
  
  export default Emoji;
  