import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

function Account({ currentUser, setCurrentUser }) {

    // const [userData, setUserData] = useState({});
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    });
    
    // useEffect(() => {
    //     fetch ("/me")
    //         .then(res => res.json())
    //         .then(data => setUserData(data))
    //     }, [])
        
        
        const renderTitles = currentUser.posts.map((post =>
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>           
            </div>
            ))
        

        function handleChange(e){
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };
        
        let navigate = useNavigate();
        
        function handleDelAccount(){
            fetch("/delete", {
                method: "DELETE"
            })
            navigate("/")
        }
        
    function handleSubmit() {
        
        const userCreds = { ...formData };
        
        fetch("/fetch", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
            .then((res) => {
                if (res.ok) {
                    res.json()
                    .then((user) => {
                        setCurrentUser(user)
                        setFormData({
                            username: "",
                            email:"",
                        });
                    });
                } else {
                    res.json()
                    .then((errors) => {
                        console.error(errors);
                    });
                }
            });
    }

        return (
            <Container>
                <div>
                    <div>
                        <h1>My Account</h1>
                    </div>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Body>
                            <Card.Title>
                                <div>
                                    <h3>Username: {currentUser.username}</h3>
                                    <h3>Email: {currentUser.email}</h3>
                                </div>
                            </Card.Title>
                                <Form onSubmit={handleSubmit}>
                                <Row>
                                <Col md>
                                    <Form.Group>
                                        <Form.Label htmlFor="username">Change Username:</Form.Label>
                                            <Form.Control
                                                id="username-singup-input"
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                            />
                                    </Form.Group>
                                    <Button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="mt-2"
                                        variant="success"
                                    >Edit</Button>
                                </Col>
                                </Row>
                                <Row>
                                <Col md>
                                    <Form.Group>
                                        <Form.Label htmlFor="email">Change Email:</Form.Label>
                                            <Form.Control
                                                id="email-signup-input"
                                                type="text"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                    </Form.Group>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="mt-2"
                                    variant="success"
                                >Edit</Button>
                                </Col>
                                </Row>
                                </Form>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Row>
                        <Col md>
                        <Card.Body>
                            <Card.Title>
                        <h3>Delete Account</h3>
                            </Card.Title>
                        <p>Got what you need and don't need your account anylonger? Feel free to delete your account and sign-up again in the future.</p>
                        <Button
                            onClick={handleDelAccount}
                            type="submit"
                            className="mt-2"
                            variant="success"
                            >DELETE</Button>
                        </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                    <br />
                    <div>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Body>
                            <Card.Title>
                                Post History
                            </Card.Title>
                            {renderTitles}
                        </Card.Body>
                    </Card>        
                    </div>
                </div>
            </Container>
        )
}

export default Account;