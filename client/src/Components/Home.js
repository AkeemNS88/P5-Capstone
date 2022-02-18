import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import React from 'react';


function Home() {


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



    return (
        <div className="Welcome">
            <header className="Welcome-header">
                <Container style={{ paddingTop: "50px", boxSizing: "content-box" }}>
                    <div class="card text-white mb-3" style={{ width: "540px;" }}>
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img
                                    width="cover"
                                    height="cover"
                                    src="/buying.jpg"
                                    class="img-fluid rounded-start"
                                    alt="Responsive" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">For all your buying needs</h5>
                                    <Button onClick={handleBuyer} variant="secondary" type="submit">Buying</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container style={{ boxSizing: "content-box"}}>
                    <div class="card text-white mb-3" style={{ width: "540px;" }}>
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img
                                    width="cover"
                                    height="cover"
                                    src="/selling.jpg"
                                    class="img-fluid"
                                    alt="Responsive" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Sellers Corner</h5>
                                    <Button onClick={handleSeller} variant="secondary" type="submit">Selling</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container style={{ boxSizing: "content-box"}}>
                    <div class="card text-white mb-3" style={{ width: "540px;" }}>
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img
                                    width="cover"
                                    height="cover"
                                    src="/offering.JPG"
                                    class="img-fluid"
                                    alt="Responsive" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Professionals of Service</h5>
                                    <Button onClick={handleOffer} variant="secondary" type="submit">Service Offering</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container style={{ boxSizing: "content-box"}}>
                    <div class="card text-white mb-3" style={{ width: "540px;" }}>
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img
                                    width="cover"
                                    height="cover"
                                    src="/requesting.png"
                                    class="img-fluid"
                                    alt="Responsive" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Help! I need a pro!</h5>
                                    <Button onClick={handleRequest} variant="secondary" type="submit">Requesting Service</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </div >
    )
}

export default Home

