import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Home from './Home'

const SignupForm = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setCurrentUser(user)
        setFormData({
          username: "",
          password: "",
          email: ""
        });
      });
      navigate("/home")
    }



  return (
    <>
    <Container>
    <Card className="mb-3" style={{ color: "#000" }}>
    <Card.Img src="/marketboard.jpg" />
      <Card.Body>
        <Card.Title>
          Your online place to find the things you need!
        </Card.Title>
      </Card.Body>
    </Card>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md>
      <Form.Group>
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control
          id="username-singup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </Form.Group>
        </Col>
        <Col md>
      <Form.Group>
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
        </Col>
        <Col md>
      <Form.Group>
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
        </Col>
      </Row>
      <Button
        type="submit"
        className="mt-2"
        variant="success"
      >
        Submit
      </Button>
    </Form>
      <Link to="/home" replace>
        Have an account already? Log in!
      </Link>
    </Container>
    </>
  );
};

export default SignupForm;