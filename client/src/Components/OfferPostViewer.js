import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function OfferPostViewer(){
    const [post, setPost] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(p => setPost(p))
    }, [])
    return (
        <Container>
            <Card.Body>
                <Card.Title>
                    <h1>{post.title}</h1>
                </Card.Title>
                <p>{post.content}</p>
            </Card.Body>
        </Container>
    )
}

export default OfferPostViewer;