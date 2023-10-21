import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
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
import PageNotFound from './PageNotFound';

const ListingPage = () => {

  const navigate = useNavigate();
  const [listing, setListing] = useState();
  const [images, setImages] = useState([]);
  const [sellerAvi, setSellerAvi] = useState('');


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

      const avatar = await axios.get(`/images/avatar/${list.data.Seller.avatar}`);
      setSellerAvi(avatar.data.url);

    } catch (err) {
      console.log(err);
    }
  }




  if (!listing) {
    return (
      <PageNotFound />
    )
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
          <Row>
          <Card className="border-0">
            <CardBody>
              <CardTitle tag="h3" className="mb-5">{listing.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
              <h3 className="text-muted">${listing.price}</h3>
              </CardSubtitle>

                            <CardText>
                <p className="text-muted fs-5">Size {listing.Size.name}</p>
              </CardText>
              <CardText>
              <button className='btn border-dark fs-5'>Add to Cart</button>
              </CardText>
              <CardText>
                <p className="text-muted">{listing.Category.name}</p>
              </CardText>

              <CardText>
                <p className="text-muted">Gender: {listing.Gender.name}</p>
              </CardText>
              <CardText className='fs-5'>{listing.description}</CardText>

            </CardBody>
          </Card>
          </Row>
          <Row>
          <Card className="border-0">
            <CardBody>
              <div className='row my-5'>

                        <div className='col-3 col-lg-2'>
                            <img src={sellerAvi} alt={`${listing.Seller.username}'s avatar`} className="img-fluid rounded-circle w-100" />
                        </div>
                        <div className='col-8 text-start'>
                        <CardTitle tag="h5" className="mb-5">{listing.Seller.username}</CardTitle>


                            <Link to={`/${listing.Seller.username}`}></Link>
                        </div>
            </div>
            <div className='row my-2'>
              <div className='col'><button className='btn border-dark fs-5' onClick={() => navigate(`/${listing.Seller.username}`)}>Visit Shop</button></div>
              </div>

            </CardBody>
          </Card>
          </Row>
        </Col>
      </Row>

<div>

</div>


    </Container>
  );
};

export default ListingPage;
