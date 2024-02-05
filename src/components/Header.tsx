import React from 'react';
import Image from 'react-bootstrap/Image'

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Header = () => {

  return (
    <header>
      <Container>
        <Row>
          <Col sm={3}>
            <Image src={require("../images/ydkjhead-small.png")} fluid alt={"You Don't Know Jack head"} />
          </Col>
          <Col>
            <h2>Jackbox pack selector</h2>
            <p>The good folks at Jackbox have created their much better looking (and more up-to-date) picker <Link to="https://www.jackboxgames.com/games">here</Link>. Check it out! I will no longer be updating this site as long as that one stays up. Took them long enough :)</p>
            <Link className="homeLink" to="/jackbox-picker">Home</Link><Link to="/jackbox-picker/about">About</Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
