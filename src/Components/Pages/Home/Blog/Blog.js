import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import blogimg1 from '../../../images/blog/b-1.64c64476.png'
import blogimg2 from '../../../images/blog/b-2.83389c8c.png'
import blogimg3 from '../../../images/blog/b-3.f3e9c0bd.png'

const Blog = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-center my-4'>Latest News & Blog</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={blogimg1} />
                    <Card.Body>
                        <Card.Title>Hang on the beach with little sea turtles.</Card.Title>
                        <Card.Text>
                            I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our Sea...
                        </Card.Text>
                    </Card.Body>
                    <Button variant='dark'>Read More</Button>
                </Card>
                <Card className='px-3'>
                    <Card.Img variant="top" src={blogimg2} />
                    <Card.Body>
                        <Card.Title>In summer you can do anything you want.</Card.Title>
                        <Card.Text>
                            I am a self-proclaimed experience junkie. There is nothing I love more than going somewhere or doing something new...
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Button variant='dark'>Read More</Button>
                </Card>
                <Card>
                    <Card.Img variant="top" src={blogimg3} />
                    <Card.Body>
                        <Card.Title>Travel survival tips: airports & flights.</Card.Title>
                        <Card.Text>
                            I recently returned from a three-week trip to the Netherlands, United Kingdom, India, and Hong Kong. I was on 13 planes...
                        </Card.Text>
                    </Card.Body>
                    <Button variant='dark'>Read More</Button>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default Blog;