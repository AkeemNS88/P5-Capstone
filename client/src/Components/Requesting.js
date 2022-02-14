import React, { useEffect, useState } from 'react';
import { Container, Card, Nav } from 'react-bootstrap';

function Requesting({ posts, setPosts }) {
    
    useEffect(() => fetch(`/categories/3`)
        .then(resp => resp.json())
        .then(categoryData => {
            setPosts(categoryData.posts)
        }), [])

        
        const renderTitles = posts.map((post =>
            <div>
                <Card className="mb-3" style={{ color: "#000" }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>    
                </Card>        
            </div>
            ))
        

    return (
        <Container>
            <h1>Service Requests</h1>
            <Card className="mb-3" style={{ color: "#000" }}>
                <Card.Body>
                    <Card.Title>{renderTitles}</Card.Title>
                    </Card.Body>
            </Card>            
        </Container>
    )
}

export default Requesting;