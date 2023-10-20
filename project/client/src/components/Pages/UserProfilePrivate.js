// UserProfileV2.js
import { useState, useEffect } from 'react';
import useAxiosJWT from '../../hooks/useAxiosJWT';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

import { Button, Container, Row, Col, Card, CardBody, CardImg, CardFooter, CardTitle, CardSubtitle, CardText } from 'reactstrap';



function UserProfilePrivate() {
    
    const axiosJWT = useAxiosJWT();
    const [user, setUser] = useState({});
    const [listings, setListings] = useState([]);
    const [avi, setAvi] = useState('');



    useEffect(() => {
        getListings();
        
            },[]);
        
            const getListings = async () => {
        
                try {
            
                  var response = await  axiosJWT.get('/users/profile');
            
                  console.log(response.data)

                  const avatar = await axios.get(`/images/avatar/${response.data.user.avatar}`);
                
                  setAvi(avatar.data.url);
                  setUser(response.data.user);
            
                  var list = response?.data?.listings;
            
                  if (list[0]) {
                    for (let i in list) {
            
                        var img = await axios.get(`/images/thumbnail/${list[i].id}`);
                        list[i].thumbnail = img.data.url;
                      }
                      setListings(list);
                  }
        
            
                } catch (err) {
                  console.log(err);
                }
              }

    return (
        <div className='col-10 offset-1'>
            <div className='row m-5'></div>
            <div className='row my-5'>

                <div className='col-2 col-lg-1'>
                    <img src={avi} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle w-100" />
                </div>
                <div className='col-1 text-start'>

                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                        <Link to="/editprofile">
                            <Button color="primary">Edit Profile</Button>
                        </Link>
                </div>
            </div>
            <div className='row m-5'></div>

                <Row>
                <h4>Selling</h4>
    </Row>
    <Row>

{listings.map(listing => (
<Col md="2" className="my-2 p-1" key={listing.id}>
    <Link to={`/products/${listing.id}`}>
        <Card className='border-0 rounded-0'>
            <img className='border-0 rounded-0' top width="100%" src={listing.thumbnail} alt="listing image" />
        </Card>
        <Row className='px-3 fs-5'>
            ${listing.price}
        </Row>
    </Link>
</Col>
))}


</Row>
       
        </div>
    );
}

export default UserProfilePrivate;
