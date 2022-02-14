import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setCurrentUser(user)
        setFormData({
          username: "",
          password: "",
        });
      });
      navigate("/home")
  }

  return (
    <>
    <Container>
    <Card className="mb-3" style={{ color: "#000" }}>
    <Card.Img src="/marketboard.jpg" />
      <Card.Body>
        <Card.Title>
          Your online place to find the things you need!
        </Card.Title>
      </Card.Body>
    </Card>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md>
      <Form.Group>
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </Form.Group>
        </Col>
        <Col md>
      <Form.Group>
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
        </Col>
      </Row>
      <Button
        onClick={handleSubmit}
        type="submit"
        className="mt-2"
        variant="success"
      >
        Submit
      </Button>
    </Form>
    <Link to="/signup" replace>
        Don't have an account? Sign Up!
      </Link>
    </Container>
    </>
  );
}

export default LoginForm;

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

// const LoginForm = ({setCurrentUser}) => {

//     let navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""      
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     function handleSubmit(e) {
//         e.preventDefault();

//         const userCreds = { ...formData };

//         fetch("/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userCreds),
//         })
//         .then((res) => {
//             if (res.ok) {
//                 res.json().then((user) => {
//                     setCurrentUser(user)
//                     setFormData({
//                         username: "",
//                         password: ""
//                     });
//                 });
//                 navigate("/home")
//             } else {
//                 res.json().then((errors) => {
//                     console.error(errors);
//                 });
//             }
//         });
//     }

//     return (
//         <div className="welcome">
//             <h1 className="welcome">Sign-up</h1>
//             <Container>
//             <Form>
//                 <Row>
//                     <Col md>
//                         <Form.Group controlId="formUsername">
//                             <Form.Label>Username</Form.Label>
//                                 <Form.Control 
//                                     type="username" 
//                                     placeholder="Username" 
//                                     onChange={handleChange}
//                                     />
//                         </Form.Group>
//                     </Col>
//                         <Col md>
//                             <Form.Group controlId="formPassword">
//                                 <Form.Label>Password</Form.Label>
//                                     <Form.Control 
//                                     type="password" 
//                                     placeholder="Password"
//                                     onChange={handleChange} 
//                                     />
//                             </Form.Group>
//                     </Col>
//                 </Row>
//                     <div className="d-grid gap-2">
//                         <br />
//                         <Button onSubmit={handleSubmit} variant="secondary" type="submit">Login</Button>
//                     </div>
//             </Form>
//             </Container>
//         </div>
//     );
// };

// export default LoginForm;