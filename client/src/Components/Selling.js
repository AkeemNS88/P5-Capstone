import React, { useEffect, useState } from 'react';
import { Container, Card, Nav } from 'react-bootstrap';

function Selling({ posts, setPosts }) {
    
    useEffect(() => fetch(`/categories/2`)
        .then(resp => resp.json())
        .then(sellingData => {
            setPosts(sellingData.posts)
        }), [])

        
        const renderTitles = posts.map((post =>
            <div>
                <Card className="mb-3" style={{ color: "#000" }}>
                    <Nav.Link href={`/selling/${post.id}`}>{post.title}</Nav.Link>
                </Card>        
            </div>
            ))
        

    return (
        <Container>
            <h1>Selling Requests</h1>
            <Card className="mb-3" style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>{renderTitles}</Card.Title>
                    </Card.Body>
            </Card>            
        </Container>
    )
}

export default Selling;