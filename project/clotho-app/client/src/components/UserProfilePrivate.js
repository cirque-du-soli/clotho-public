// UserProfileV2.js
import React, { useState, useEffect } from 'react';
import useAxiosJWT from '../../hooks/useAxiosJWT';
import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function UserProfilePrivate() {
    const axiosJWT = useAxiosJWT();
    const [user, setUser] = useState({});
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch user profile
        axiosJWT.get(`/api/users/profile`)
            .then(response => {
                setUser(response?.data?.user);
                setListings(response?.data?.listings)
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });


    }, []);

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <img src={user.avatar} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle" />
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                </Col>
                <Col md={8}>
                    <h3>My Listings</h3>
                    {listings.map(listing => (
                        <Card key={listing.id}>
                            <CardBody>
                                <CardTitle tag="h5">{listing.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">${(listing.price / 100).toFixed(2)}</CardSubtitle>
                                <CardText>{listing.description}</CardText>
                            </CardBody>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfilePrivate;
