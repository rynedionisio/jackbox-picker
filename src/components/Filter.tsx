import React from 'react';
import Types from '../types';

import Form from 'react-bootstrap/Form';

const Filter: React.FC<Types.FilterInterface> = (
  { onShowImagesChange,
    onPlayersChange,
    onJbGamesChange,
    jbGames }
  ) => {

  function handleShowImagesChange(event: any) {
    onShowImagesChange(event.target.checked);
  }


  function handlePlayersChange(event: any) {
    onPlayersChange(event.target.value);
  }
  

  function handleJbGamesChange(event: any) {
    onJbGamesChange(event.target);
  }

  const checkboxes = [
    {
      name: '1',
      key: 1,
      label: '1',
    },
    {
      name: '2',
      key: 2,
      label: '2',
    },
    {
      name: '3',
      key: 3,
      label: '3',
    },
    {
      name: '4',
      key: 4,
      label: '4',
    },
    {
      name: '5',
      key: 5,
      label: '5',
    },
    {
      name: '6',
      key: 6,
      label: '6',
    },
    {
      name: '22',
      key: 22,
      label: 'Drawful 2',
    },
];

  return (
    <Form>
      <p>Enter your filter criteria below. Clicking a game image will launch that pack in Steam.</p>
      Select your Jackbox Packs:
      <Form.Group>
        {
          checkboxes.map(item => (
            <Form.Check
              key={item.key}
              name={item.name}
              label={item.label}
              id={item.name}
              inline
              defaultChecked
              value={jbGames[item.name]}
              onChange={handleJbGamesChange}
            />
          ))
        }
      </Form.Group>
      <Form.Group controlId="players-input">
        <Form.Control
          onChange={handlePlayersChange}
          type="tel"
          placeholder="Number of players"
          aria-label="Number of players"
        />
      </Form.Group>
      <Form.Check 
        type="switch"
        id="show-images-switch"
        label="Show game images"
        onClick={handleShowImagesChange}
        defaultChecked
      />
    </Form>
  );
};

export default Filter;
