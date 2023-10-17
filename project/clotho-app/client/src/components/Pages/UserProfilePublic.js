import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Button, Container, Row, Col, Card, CardBody, CardImg, CardFooter, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';


function UserProfilePublic() {

    const navigate = useNavigate();
    const { username } = useParams();

    // navigate to private view if loaded by seller
    if (sessionStorage.getItem('username') && sessionStorage.getItem('username') == username) {
        navigate('/test/profile'); //TODO change later
    }
    const [user, setUser] = useState({});
    const [listings, setListings] = useState([]);

    useEffect(() => {
getListings();

    },[]);

    const getListings = async () => {

        try {
    
          var response = await  axios.get('/users/seller/' + username);
    
          console.log(response.data)

          setUser(response?.data?.user);
    
          var list = response?.data?.listings;
    
          if (list[0]) {
            for (let i in list) {
    
                var img = await axios.get(`/admin/listingimages/thumbnail/${list[i].id}`);
                list[i].thumbnail = img.data.url;
              }
              setListings(list);
          }

    
        } catch (err) {
          console.log(err);
        }
      }
                                                                                                                                                                                             
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <img src={user.avatar} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle" />
                    <h2>{user.username}</h2>
                </Col>
              
            </Row>
            <Row>
 
      {listings.map(listing => (
        <Col md="4" key={listing.id}>
          <Card>
            <CardImg top width="100%" src={listing.thumbnail} alt="lisiting image" />
            <CardFooter>
              {/* <CardTitle tag="h5"> */}
              ${(listing.price / 100).toFixed(2)}
              {/* </CardTitle> */}
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    );
}

export default UserProfilePublic;
