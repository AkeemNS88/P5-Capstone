import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function RequestPostViewer({ currentUser }){
    const [post, setPost] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(p => setPost(p))
    }, [])

    const name = currentUser.username
    const avatar = currentUser.avatar;
   
    return (
        <Container style={{ paddingTop: "50px", boxSizing: "content-box"}}>
            <div class="card mb-3" style={{ width: "540px;" }}>
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src={avatar} width="150px" height="150px" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{post.title}</h5>
                            <p>{post.content}</p>
                            <p class="card-text"><small class="text-muted">Posted by Service Requester {name}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default RequestPostViewer;