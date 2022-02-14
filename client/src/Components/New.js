import React, { useState, useEffect } from "react";
import { Container, Col, Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function New() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category_id: 0,
    });

    useEffect(() => fetch(`/categories`)
        .then(resp => resp.json())
        .then(categoryData => {
            console.log(categoryData)
        }), [])

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

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
            .then((r) => r.json())
            .then((user) => {
                console.log(user);
                setFormData({
                    title: "",
                    content: "",
                    category_id: ""
                });
            });
        navigate("/home")
    }

    return (
        <Container>
            <Card className="mb-3" style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Col md>
                                <Form.Group>
                                    <Form.Label htmlFor="title">Title</Form.Label>
                                    <Form.Control
                                        id="title-input"
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <div class="form-group">
                                    <label for="FormControlTextarea">Content</label>
                                    <textarea 
                                    class="form-control" 
                                    id="FormControlTextarea" 
                                    rows="3"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}></textarea>
                                </div>
                            </Col>
                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                className="mt-2"
                                variant="success"
                            >
                                Submit
                            </Button>
                            <div>
                                <br />
                                <select onChange={handleChange} class="form-control" id="categories" name="category_id">
                                    <option value={0} >--Select Category--</option>
                                    <option value={1} >Buying</option>
                                    <option value={2} >Selling</option>
                                    <option value={3} >Requesting</option>
                                    <option value={4} >Offering</option>
                                </select>
                            </div>
                        </Form>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default New;