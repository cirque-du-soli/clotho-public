// UserProfile.js


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAxiosJWT } from "../hooks/useAxiosJWT";
// import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

// function UserProfile({ match }) {
//     const [user, setUser] = useState({});
//     const [listings, setListings] = useState([]);
//     const axiosJWT = useAxiosJWT();

//     useEffect(() => {
//         // Get user profile
//         axiosJWT.get(`/api/admin/users/${match.params.id}`)
//             .then(response => {
//                 setUser(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching user:', error);
//             });

//         // Get user listings
//         axiosJWT.get(`/api/admin/listings/seller/${match.params.id}`)
//             .then(response => {
//                 setListings(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching listings:', error);
//             });
//     }, [match.params.id, axiosJWT]);

//     const isOwner = user.id === axiosJWT.userId;
//     const isAdmin = axiosJWT.isAdmin;

//     return (
//         <Container>
//             <Row>
//                 <Col md={4}>
//                     <img src={user.avatar} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle" />
//                     <h2>{user.username}</h2>
//                     <p>{user.email}</p>
//                     {(isOwner || isAdmin) && <Button color="primary">Edit Profile</Button>}
//                     <Button color="info" onClick={() => {/* Follow Logic */}}>Follow</Button>
//                     <Button color="warning" onClick={() => {/* Navigate to Messaging Component */}}>Message</Button>
//                 </Col>
//                 <Col md={8}>
//                     <h3>Listings by {user.username}</h3>
//                     {listings.map(listing => (
//                         <Card key={listing.id}>
//                             <CardBody>
//                                 <CardTitle tag="h5">{listing.title}</CardTitle>
//                                 <CardSubtitle tag="h6" className="mb-2 text-muted">${(listing.price / 100).toFixed(2)}</CardSubtitle>
//                                 <CardText>{listing.description}</CardText>
//                             </CardBody>
//                         </Card>
//                     ))}
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default UserProfile;
