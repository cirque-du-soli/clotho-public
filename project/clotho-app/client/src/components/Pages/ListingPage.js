import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
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
  const [listing, setListing] = useState();
  const [images, setImages] = useState([]);

  const { id } = useParams();

  useEffect(() => {


    getListing();

  }, [id]);


  const getListing = async () => {

    try {

      var list = await axios.get(`/listings/${id}`);

      console.log(list.data);

      setListing(list.data);

      var imgs = await axios.get(`/images/${id}`);
   
 
      setImages(imgs.data);

    } catch (err) {
      console.log(err);
    }
  }




  if (!listing) {
    return <div>Lisiting not found</div>;
  }

  return (
    <Container>
      <Row>
      <Col md="6">
      <Row>

{images.map(img => (
    <Col md="12" className="my-2 p-1" key={img.id}>
        <Card className='border-0 rounded-0'>
            <img className='border-0 rounded-0' top width="100%" src={img.url} alt="lisiting image" />

        </Card>

    </Col>
))}
</Row>
      </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{listing.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
              By <Link to={`/${listing.Seller.username}`}>{listing.Seller.username}</Link>
              </CardSubtitle>
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

<div>

</div>


    </Container>
  );
};

export default ListingPage;
