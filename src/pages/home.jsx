import React from 'react'
import Nav from '../components/navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ElliottBennett from '../assets/handwriting/Elliott-Bennett.png'
import JourneymanFilmaker from '../assets/handwriting/Journeyman-Filmmaker.png'
import ElliottSunset from '../assets/elliott-home-bio.jpg'
import BioText from '../assets/handwriting/Intro-Text.png'

export default function home() {
  return (
    <div className='home'>
           <Nav/>
        <Container>
         
            <Row className='d-flex justify-content-center mt-4'>
                <Col lg={6}>
                <img className='handwriting' src={ElliottBennett}/>
                <div className=' d-flex justify-content-end'>
                <img className='handwriting-subtitle' src={JourneymanFilmaker}/>
                </div>
                </Col>

            </Row>
            <Row className='mt-4'>
                <Col lg={6}>
                <img className='image overlay ' src={BioText}/>
                <img className='image opaque' src={ElliottSunset} alt="Elliott wearing a hat in front of a mountain sunset"/>
                </Col>
            </Row>

           
        </Container>
    </div>
  )
}
