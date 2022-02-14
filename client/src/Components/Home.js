import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import React from 'react';


function Home () {
    

    let navigate = useNavigate();

    function handleBuyer(e) {
        e.preventDefault()
        navigate("/buying");
    }
    function handleSeller(e) {
        e.preventDefault()
        navigate("/selling");
    }
    function handleOffer(e) {
        e.preventDefault()
        navigate("/offering");
    }
    function handleRequest(e) {
        e.preventDefault()
        navigate("/requesting");
    }

   

    return(
        <div className="Welcome">
            <header className="Welcome-header">
                <Row>
                <Col md>
                <Container>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="/buying.jpg" class="img-fluid" alt="Responsive image" />
                        <Card.Body>
                            <Card.Title>
                                For all your buying needs
                            </Card.Title>
                            <Button onClick={handleBuyer} variant="secondary" type="submit">Buying</Button>
                        </Card.Body>
                    </Card>
                </Container>
                </Col>
                <Col md>
                <Container>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="/selling.jpg" class="img-fluid" alt="Responsive image" />
                        <Card.Body>
                            <Card.Title>
                                Sellers Corner
                            </Card.Title>
                            <Button onClick={handleSeller} variant="secondary" type="submit">Selling</Button>
                        </Card.Body>
                    </Card>
                </Container>
                </Col>
                    </Row>
                    <Row>
                    <Col md>
                <Container>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="/offering.JPG" class="img-fluid" alt="Responsive image" />
                        <Card.Body>
                            <Card.Title>
                                Professionals of Service
                            </Card.Title>
                            <Button onClick={handleOffer} variant="secondary" type="submit">Service Offering</Button>
                        </Card.Body>
                    </Card>
                </Container>
                </Col>
                <Col>
                <Container>
                    <Card className="mb-3" style={{ color: "#000" }}>
                        <Card.Img src="/requesting.jpg" class="img-fluid" alt="Responsive image" />
                        <Card.Body>
                            <Card.Title>
                                Help! I need a pro!
                            </Card.Title>
                            <Button onClick={handleRequest} variant="secondary" type="submit">Requesting Service</Button>
                        </Card.Body>
                    </Card>
                </Container>
                </Col>
                </Row>
            </header>
        </div>
    )
}

export default Home

