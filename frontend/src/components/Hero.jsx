import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { LinkContainer } from 'react-router-bootstrap'
const Hero = () =>
{
    return (
        <>
            <Container>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>MERN AUTHENTICATION</Card.Title>
                        <Card.Text>
                            This is a boilerplate for MERN authentication that stores a JWT in
                            an HTTP-Only cookie. It also uses Redux Toolkit and the React
                            Bootstrap library
                        </Card.Text>
                        <div>
                            <LinkContainer to={'/login'}>
                                <Button variant="primary" className='me-3'>Sign In</Button>
                            </LinkContainer>
                            <LinkContainer to={'/register'}>
                                <Button variant="secondary" >Sign Up</Button>
                            </LinkContainer>
                        </div>
                    </Card.Body>

                </Card>
            </Container>
        </>
    )
}

export default Hero