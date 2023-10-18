import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';

const ListingPage = () => {
  const [listing, setListing] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/listings/${id}`);

        setListing(response.data);
      } catch (error) {
        console.error('Something went wrong:', error);
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div>Lisiting not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardImg top width="100%" src={`https://s3-bucket-url/${listing.thumbnail}`} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{listing.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">By {listing.Seller.username}</CardSubtitle>
              <CardText>{listing.description}</CardText>
              <CardText>
                <small className="text-muted">Price: ${listing.price}</small>
              </CardText>
              <CardText>
                <small className="text-muted">Category: {listing.Category.name}</small>
              </CardText>
              <CardText>
                <small className="text-muted">Size: {listing.Size.name}</small>
              </CardText>
              <CardText>
                <small className="text-muted">Gender: {listing.Gender.name}</small>
              </CardText>
              <Button>Add to Cart</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingPage;
