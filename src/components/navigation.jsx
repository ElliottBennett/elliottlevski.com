import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chaplin from '../assets/elliott-chaplin.jpg'
import HomeWriting from '../assets/handwriting/Home.png'
import ArtWriting from '../assets/handwriting/Art.png'
import VideoWriting from "../assets/handwriting/Video.png"
import LiveWriting from '../assets/handwriting/Live.png'


export default function navigation() {
  return (
    <div className='navigation'>    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Row>
        <Col lg={2}>
        <img className='image icon' src={Chaplin} alt="Elliott's face next to a drawing of Charlie Chaplin"/>
        </Col>
        <Col lg={10} className='d-flex align-items-end '>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <img className='handwriting-nav' src={HomeWriting} />
              </Nav.Link>
              <Nav.Link href="/video">
                 <img className='handwriting-nav' src={VideoWriting} />
              </Nav.Link>
              <Nav.Link href="/performance">
                <img className='handwriting-nav' src={LiveWriting} />
              </Nav.Link>
              <Nav.Link href="/art">
              <img className='handwriting-nav' src={ArtWriting} />
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Col>


      </Row>

    </Container>
  </Navbar></div>
  )
}




