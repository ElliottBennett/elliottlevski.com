import React from 'react'
import Nav from '../components/navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Park from '../assets/handwriting/Park.png'



export default function video() {
  return (
    <div className='video'>
                <Nav/>
                <Container>
                    <Row className='mt-4 d-flex justify-content-center'>
                        <img className='video-subtitle' src={Park}/>
                    </Row>
                    <Row>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/n_wZz6aXJBA?si=7Az6n04F0EwmStZ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/CXIKsmMIfgc?si=Rn7MzbhnjaVOnZFW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LN8e5axSFVY?si=i3HQvSGKISJdY8wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pv12jDAqBsY?si=-J_xCOf00szJ0dsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FaE8x_gp3RI?si=5GKO4-ULXBVgrsYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/vW3KT0o-9Vc?si=MmImcAJOGQ9qLdup" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vv_85LaVlhk?si=bebsLsXu_nk1PMXy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/u8tILZnBWb0?si=mb0dd_YMWfIucO6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Container>
        video</div>
  )
}
