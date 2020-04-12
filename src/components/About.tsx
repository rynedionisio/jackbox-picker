  
import React from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const About = () => {

  return (
    <Row>
      <Col>
        <section>
          <h3>Column explanations</h3>
          <p>Some columns don't appear on mobile. Drawful 2 is sold separately from any of the packs.</p>

          <h5>Length</h5>
          <p>About how many minutes it takes to play a game</p>

          <h5>Longer timers?</h5>
          <p>Allows extended timers, which is useful when streaming games</p>

          <h5>Family friendly?</h5>
          <p>Either is family friendly by default, or has options to make it so</p>

          <h5>Audience?</h5>
          <p>Allows people outside the main game to join and play along</p>

          <h5>Drawing involved?</h5>
          <p>Involves drawing pictures on your screen, some games allow you to turn off drawing</p>

          <h3>About</h3>
          <p>This site is unofficial and not affiliated with Jackbox Games. Made in React by <a href="http://www.twitter.com/ryne_ee" rel="noopener noreferrer" target="_blank">@ryne_ee</a>.</p>
        </section>
      </Col>
    </Row>
  );
};

export default About;
