import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ElliottBennett from "../assets/handwriting/Elliott-Bennett.png"

export default function footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col className='m-4' lg={4} md={4}>
                    <img className='image' src={ElliottBennett} alt="Elliott Bennett written in Elliott's handwriting"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
