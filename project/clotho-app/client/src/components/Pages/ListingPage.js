
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Button, Container, Row, Col, Card, CardBody, CardImg, CardFooter, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

function ListingPage() {

    const navigate = useNavigate();
    const { id } = useParams();  // assuming 'id' is the parameter for listing

    const [listing, setListing] = useState({});
    const [listingImages, setListingImages] = useState([]);

    useEffect(() => {
        getListing();
    }, []);

    const getListing = async () => {
        try {
            const response = await axios.get(`/admin/listings/${id}`);
            console.log(response.data);
            
            setListing(response.data);

            const imagesResponse = await axios.get(`/admin/listingimages/${id}`); // Adjust the API endpoint if necessary
            setListingImages(imagesResponse.data);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2>{listing.title}</h2>
                </Col>
            </Row>
            <Row>
                {listingImages.map(image => (
                    <Col md="4" key={image.id}>
                        <Card>
                            <CardImg top width="100%" src={image.url} alt="Listing image" /> {/* Change 'image.url' if the structure is different */}
                            <CardFooter>
                                <CardTitle tag="h5">
                                    {listing.description}
                                </CardTitle>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListingPage;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardText,
//   Button
// } from 'reactstrap';

// const ListingPage = ({ match }) => {
//   const [listing, setListing] = useState(null);

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/listings/${match.params.id}`); //FIXME
//                 // const response = await axios.get(`http://localhost:3001/api/listings/${6}`);

//         setListing(response.data);
//       } catch (error) {
//         console.error('Something went wrong:', error);
//       }
//     };

//     fetchListing();
//   // }, [1]);
//   }, [match.params.id]);


//   if (!listing) {
//     return <div>Lisiting not found</div>;
//   }

//   return (
//     <Container>
//       <Row>
//         <Col md="6">
//           <Card>
//             <CardImg top width="100%" src={`https://s3-bucket-url/${listing.thumbnail}`} alt="Card image cap" />
//             <CardBody>
//               <CardTitle tag="h5">{listing.title}</CardTitle>
//               <CardSubtitle tag="h6" className="mb-2 text-muted">By {listing.Seller.username}</CardSubtitle>
//               <CardText>{listing.description}</CardText>
//               <CardText>
//                 <small className="text-muted">Price: ${listing.price}</small>
//               </CardText>
//               <CardText>
//                 <small className="text-muted">Category: {listing.Category.name}</small>
//               </CardText>
//               <CardText>
//                 <small className="text-muted">Size: {listing.Size.name}</small>
//               </CardText>
//               <CardText>
//                 <small className="text-muted">Gender: {listing.Gender.name}</small>
//               </CardText>
//               <Button>Add to Cart</Button>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ListingPage;
