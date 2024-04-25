import React from 'react'
import Nav from '../components/navigation'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function performance() {
  return (
    <div className='performance'>
        <Nav/>
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col lg={12}>
                <iframe width="1000" height="562.5" src="https://www.youtube.com/embed/0acYaamuKzE?si=kt_1gNSlI1MCl_gX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
