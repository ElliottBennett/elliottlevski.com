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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dtj8QrMJT08?si=UFT7ybwMBle1Kbej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tXJpvItfXjA?si=Nsdo19VpmPj53hDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nMjUfx_rRmg?si=M-RxmDnh0qI8iaQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3Jg2JvMwtNI?si=uMS7JPY6ya60FH5V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                         </Col>
                    </Row>
                    <Row className='mt-4 d-flex justify-content-center'>
                        <h2 className='d-flex justify-content-center'>Music</h2>
                    </Row>
                    <Row>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-Kj6ayLKpT0?si=LudPN3iXC2eazOKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       </Col>
                        <Col lg={6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eKLTm7Xrpmg?si=xoC1UTDd6ZsPVZql" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </Col>
                        <Col lg={8}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/prCBBqRO95s?si=YCuT1PXTojNrwHaX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       </Col>
                     
                    </Row>
                </Container>
        video</div>
  )
}
