import React from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import marketboard from "./Images/marketboard.jpg";
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useState } from "react"

function Welcome({ currentUser, setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    setFormData({
                        username: "",
                        password: "",
                    });
                });
                navigate("/home")
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }

        });
    }

    let navigate = useNavigate();

    function handleClick() {
        navigate('/login')
    }

    return (
        <div className="Welcome">
            <header className="Welcome-header">
                <Container>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="" />
                        <Card.Body>
                            <Card.Title>
                                Your online place to find the things you need!
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                    type="username" 
                                    placeholder="Username" 
                                    value={formData.username}
                                    onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="secondary" type="submit">Login</Button>
                    </Form>
                </Container>
            </header>
        </div>
    )
}

export default Welcome
