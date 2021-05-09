import React from 'react'
import Types from '../types'

import Form from 'react-bootstrap/Form'

const Filter: React.FC<Types.FilterInterface> = ({
  onShowImagesChange,
  onPlayersChange,
  onJbGamesChange,
  jbGames,
  filterChecks,
  onFilterChecksChange,
  handleCheckUncheckOnClick,
}) => {
  function handleShowImagesChange(event: any) {
    onShowImagesChange(event.target.checked)
  }

  function handlePlayersChange(event: any) {
    onPlayersChange(event.target.value)
  }

  function handleJbGamesChange(event: any) {
    onJbGamesChange(event.target)
  }

  function handleFilterChecksChange(event: any) {
    onFilterChecksChange(event.target)
  }

  const packCheckboxes = [
    {
      name: '1',
      label: '1',
    },
    {
      name: '2',

      label: '2',
    },
    {
      name: '3',

      label: '3',
    },
    {
      name: '4',

      label: '4',
    },
    {
      name: '5',

      label: '5',
    },
    {
      name: '6',

      label: '6',
    },
    {
      name: '7',

      label: '7',
    },
    {
      name: 'drawful2',

      label: 'Drawful 2',
    },
  ]

  const filterCheckboxes = [
    {
      name: 'extended_timers',
      label: 'Longer timers',
    },
    {
      name: 'family_mode',
      label: 'Family friendly',
    },
    {
      name: 'audience',
      label: 'Audience',
    },
    {
      name: 'drawing',
      label: 'Drawing involved',
    },
  ]

  return (
    <div id='selection-area'>
      <p>
        Enter your filter criteria below. Clicking a game image will launch that
        pack in Steam.
      </p>
      Select your Jackbox Packs:
      <Form.Group>
        {packCheckboxes.map((item) => (
          <Form.Check
            key={item.name}
            name={item.name}
            label={item.label}
            id={item.name}
            inline
            value={jbGames[item.name]}
            onChange={handleJbGamesChange}
            checked={jbGames[item.name]}
          />
        ))}
        <button onClick={handleCheckUncheckOnClick}>un/check all</button>
      </Form.Group>
      <Form.Group controlId='players-input'>
        <Form.Control
          onChange={handlePlayersChange}
          type='tel'
          placeholder='Number of players'
          aria-label='Number of players'
        />
      </Form.Group>
      Hide games that don't have:
      <Form.Group>
        {filterCheckboxes.map((item) => (
          <Form.Check
            key={item.name}
            name={item.name}
            label={item.label}
            id={item.name}
            inline
            value={filterChecks[item.name]}
            onChange={handleFilterChecksChange}
          />
        ))}
      </Form.Group>
      <Form.Check
        type='switch'
        id='show-images-switch'
        label='Show game images'
        onClick={handleShowImagesChange}
        defaultChecked
      />
    </div>
  )
}

export default Filter
