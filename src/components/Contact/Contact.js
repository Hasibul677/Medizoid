import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Contact.css'


const Contact = () => {
    return (
        <div>
           <div className='contactInfo' style={{backgroundImage:`url('/images/contact/1.jpg')`}}>
               <h1 className='display-1 fw-bold contactTitle ms-5'>Contact Us</h1>
           </div>
           <Container>
           <Row>
               <Col xm-={12} lg={8}>
                   <img className='contactIimg mt-5 rounded' src="/images/contact/2.jpg" alt="" />
               </Col>
               <Col xm={12} md={6} lg={4}>
                   <Card className='mt-5 p-4 bg-dark'>
                       <h2 className='text-white text-center'>Ask Your Question</h2>
                       <hr className='text-white mb-5' />
                       <div>
                           <input className='w-100 rounded mb-3 form-control' type="email" placeholder='Email'/>
                       </div>
                       <div>
                           <input className='w-100 rounded mb-3 form-control' type="text" placeholder='Subject'/>
                       </div>
                       <div>
                           <textarea className='w-100 h-75 rounded mb-3 form-control py-3' type="text" placeholder='Message'/>
                       </div>
                       <button className='btn btn-danger w-50'>Send Message</button>
                       <hr className='text-white mb-3' />
                       <div>
                           <button className='me-3'><a href="https://facebook.com/" target='blank'><i className="fa-2x text-info fab fa-facebook-square"></i></a></button>

                           <button className='me-3'><a href="https://twitter.com/" target='blank'><i className="fa-2x text-info fab fa-twitter"></i></a></button>
                           <button><a href="https://www.instagram.com/" target='blank'><i className="fa-2x text-info fab fa-instagram-square"></i></a></button>
                       </div>
                   </Card>
               </Col>
           </Row>
           </Container>
        </div>
    );
};

export default Contact;