import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navigationbar({ setCurrentUser }) {

    let navigate = useNavigate();

    const handleLogout = () => {
        fetch ("/logout", {
            method: 'DELETE'
        })
        console.log("You are logged out")
        setCurrentUser(null)
        navigate("/")
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand><img src="/the_goods.png"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/account">My Account</Nav.Link>
                            <Nav.Link href="/new">New Post</Nav.Link>
                        </Nav>
                        <Button
                        onClick={handleLogout} 
                        type="submit"
                        className="mt-2"
                        variant="success"
                        >
                        Logout
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;