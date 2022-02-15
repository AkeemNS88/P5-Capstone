import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';


function AccountPostViewer(){
    const [post, setPost] = useState({})
    const [displayPost, setDisplayPost] = useState({})
    // const [editToggle, setEditToggle] = useState(false)
    
    const {id} = useParams();
    
    
    
    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(post => setPost(post))
    }, [])
    
    const [formData, setFormData] = useState({
        title: post.title,
        content: post.content,
    })
    function handleChange(event) {
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    
    function handleUpdatePost(updatePost) {
        let filteredPosts = post.map(post => {
            if (post.id === updatePost.id) {
                return updatePost
            }
            return post
        })
        setPost(filteredPosts)
    }


    function handlePostPatch(event) {
        event.preventDefault()
        const options = {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: formData.title,
                body: formData.body
            })
        }
        fetch(`/posts/${post.id}`, options)
        .then(res => res.json())
        .then(updatedPost => {
            handleUpdatePost(updatedPost)
            setDisplayPost(updatedPost)
        })
    }

    let navigate = useNavigate();
        
        function handleDeletePost(){
            fetch(`/posts/${post.id}`, {
                method: "DELETE"
            })
            navigate("/account")
        }

    return (
        
        <Container>
            <Card className="mb-3" style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>
                        <h1>{post.title}</h1>
                    </Card.Title>
                    <p>{post.content}</p>
                </Card.Body>
            </Card>
        
        
        
        
        <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Body>
                <Card.Title>
                    <Form onSubmit={handlePostPatch}>
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
                        <Row>
                        
                        <Button
                            type="submit"
                            className="mt-2"
                            variant="success"
                            value="Save"
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={handleDeletePost}
                            type="submit"
                            className="mt-2"
                            variant="success"
                            >Delete</Button>
                        </Row>
                        </Form>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Container>
        
    )
}

export default AccountPostViewer;