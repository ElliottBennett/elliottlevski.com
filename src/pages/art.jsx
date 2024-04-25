import React from 'react'
import Nav from '../components/navigation'

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';
import Drawing1 from '../assets/drawings/drawing1.jpeg'
import Drawing2 from '../assets/drawings/drawing2.jpeg'
import Drawing3 from '../assets/drawings/drawing3.jpeg'
import Drawing4 from '../assets/drawings/drawing1.jpeg'
import Drawing5 from '../assets/drawings/drawing2.jpeg'
import Drawing6 from '../assets/drawings/drawing3.jpeg'



export default function art() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='art'>
      <Nav/>

      <Container>
          <Row className='d-flex justify-content-center'>
            <Col lg={6}>


            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className='image' src={Drawing1}  alt="..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className='image' src={Drawing2}  alt="..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className='image' src={Drawing3}  alt="..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className='image' src={Drawing4}  alt="..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className='image' src={Drawing5}  alt="..."/>
              </Carousel.Item>
              <Carousel.Item>
                <img className='image' src={Drawing6}  alt="..."/>
              </Carousel.Item>
              </Carousel>




            <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">


    </div>
    <div className="carousel-item">
      <img src={Drawing2} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Drawing3}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
      </Col>
          </Row>
      </Container>


    </div>
  )
}
