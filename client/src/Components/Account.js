import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col, Nav } from 'react-bootstrap';

function Account({ currentUser, setCurrentUser, allPosts }) {

    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        avatar: "",
    });
    
    
    
        
        const renderTitles = currentUser.posts.map((post =>
                    <Nav.Link href={`/account/${post.id}`}>{post.title}</Nav.Link>
                    ))

        // const renderAllTitles = allPosts.map((post) => {
        //         <Nav.Link href={`/account/${post.id}`}>{post.title}</Nav.Link>

        
        
        


        // const admin = currentUser.admin
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
        
    
    function handleChangeUsername() {
        
        const userCreds = { ...formData };
        
        fetch("/update", {
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

    function handleChangeEmail() {
        
        const userCreds = { ...formData };
        
        fetch("/update", {
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
                            email: "",
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
                                    <h3>Avatar: <img 
                                    height="150px" 
                                    width="150px" 
                                    className="avatar-photo"
                                    src={currentUser.avatar}/></h3>
                                    <h3>Username: {currentUser.username}</h3>
                                    <h3>Email: {currentUser.email}</h3>
                                </div>
                            </Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label htmlFor="avatar">Change Avatar:</Form.Label>
                                        <Form.Control
                                            id="avatar-input"
                                            type="text"
                                            name="avatar"
                                            value={formData.avatar}
                                            onChange={handleChange}
                                            />
                                        <Button
                                        type="submit"
                                        className="mt-2"
                                        variant="success"
                                    >Edit</Button>
                                    </Form.Group>
                                </Form>
                                <Form onSubmit={handleChangeUsername}>
                                <Row>
                                <Col md>
                                    <Form.Group>
                                        <Form.Label htmlFor="username">Change Username:</Form.Label>
                                            <Form.Control
                                                id="username-input"
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                            />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        className="mt-2"
                                        variant="success"
                                    >Edit</Button>
                                </Col>
                                </Row>
                                </Form>
                                <Form onSubmit={handleChangeEmail}>
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