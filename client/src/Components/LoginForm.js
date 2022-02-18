import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        setCurrentUser(user)
        setFormData({
          username: "",
          password: "",
        });
      });
      navigate("/home")
  }

  return (
    <>
    <Container style={{ paddingTop: "50px", boxSizing: "content-box" }}>
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
          id="username-input"
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
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
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
        Login
      </Button>
    </Form>
    <Link to="/signup" replace>
        Don't have an account? Sign Up!
      </Link>
    </Container>
    </>
  );
}

export default LoginForm;

