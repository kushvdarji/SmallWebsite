import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./App.css";
function Cardi() {
  return (
    <div className='card-style' >
      <Card style={{ width: '28rem',marginLeft:"5px"}}>
      <Card.Img variant="top" src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=612x612&w=0&h=x8h70-SXuizg3dcqN4oVe9idppdt8FUVeBFemfaMU7w=' />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          In Any Case You Want To Know About Our Company You May Contact Us
        </Card.Text>
        <Link to="/login/home/call"> <Button variant="primary" style={{marginTop:"15px"}}>Call Us</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}
export default Cardi;