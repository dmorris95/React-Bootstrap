import { Link } from "react-router-dom";
import { Container, Row, Col, Image, NavLink, Nav } from "react-bootstrap"

function NotFound() {
    return (
        <Container className="bg-danger-subtle rounded-4 p-4">
            <Row>
                <Col>
                    <h2 className="text-center m-3 p-1 bg-danger rounded-3 text-white">404 - Not Found</h2>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <Image src="./src/assets/navigation-error.jpg" roundedCircle fluid/>
                </Col>
                <Col className="d-flex align-items-center">
                    <Row>
                        <Col className="bg-danger text-white rounded-3 p-3">
                            <p>Sorry the page you are looking for is not available.</p>
                            <p>Try returning to the <Link as={NavLink} className="text-light" to="/">homepage</Link>.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    )
}

export default NotFound