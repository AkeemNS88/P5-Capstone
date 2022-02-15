import React, { useEffect, useState } from 'react';
import { Container, Card, Nav, Button } from 'react-bootstrap';

function Buying({ posts, setPosts, currentUser, setCurrentUser, addNewPost }) {
    
    useEffect(() => fetch(`/categories/1`)
        .then(resp => resp.json())
        .then(buyingData => {
            setPosts(buyingData.posts)
        }), [])

        
        
        const renderTitles = posts.map((post =>
            <div>
                <Card className="mb-3" style={{ color: "#000" }}>
                    <Nav.Link href={`/buying/${post.id}`}>{post.title}</Nav.Link>
                </Card>        
            </div>
            ))
            
            
            return (
                <Container>
                    <h1>Buying Requests</h1>
                        <Card className="mb-3" style={{ color: "#000" }}>
                            <Card.Body>
                                <Card.Title>{renderTitles}</Card.Title>
                            </Card.Body>
                        </Card>            
                </Container>
    )
}

export default Buying;


// save for later?

// function handleNewPost() {
    //     fetch("/create", {
        //         method: "POST",
        //         headers: {
            //             'Content-Type': 'application/json', 'Accept': 'application/json'
            //         },
            //         body: JSON.stringify({ user_id: currentUser.id, title: "default", body: "placeholder"}),
            //     })
            //     .then(resp => resp.json())
            //     .then(newPost => addNewPost(newPost))
            // }
            
            // const handleClick = () => {
                //     handleNewPost()
                // }
                
// button                
                /* <Button
                    onClick={handleClick} 
                    type="submit"
                    className="mt-2"
                    variant="success"
                    >
                    New Post
                </Button> */