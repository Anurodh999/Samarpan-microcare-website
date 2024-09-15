import React from 'react';
import Ellipse from "../icons/Ellipse.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
    return (
      <>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Ellipse} />
      <Card.Body>
        <Card.Title>Nigan Gerolad</Card.Title>
        <Card.Text>
        Project Leader
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
      
    </Card>
    </>
    );
};

export default Profile;