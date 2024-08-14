import { Button, Container, Card, CardGroup, Image } from "react-bootstrap"

function Home() {
    return (
        <Container className="border border-dark mt-3 p-2 rounded-4 bg-primary-subtle">
                <h2 className="m-3 p-5 text-center">Welcome to an Amazing Shopping Experience</h2>
                <Image src="src/assets/welcome-image.jpg" rounded fluid/>
                <div className="d-grid gap-3 p-5">
                    <Button variant="primary" className="shadow-lg" size="lg">Shop Now</Button>
                </div>
                <CardGroup>
                    <Card border="primary" className="m-2 rounded">
                        <Card.Body>
                            <Card.Title>Upcoming Promo</Card.Title>
                            <Card.Text>
                                Until August 20th, Buy One get One Free
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" className="m-2 rounded">
                        <Card.Body>
                            <Card.Title>Featured Product</Card.Title>
                            <Card.Text>
                                BRAND NEW: Assorted Colored T-Shirts
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>


                
            
                

        </Container>
    )
}

export default Home