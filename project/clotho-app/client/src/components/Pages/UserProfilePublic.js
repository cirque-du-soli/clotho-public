import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Button, Container, Row, Col, Card, CardBody, CardImg, CardFooter, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import userIcon from '../../assets/images/avatar.png';


function UserProfilePublic() {

    const navigate = useNavigate();
    const { username } = useParams();


    const [user, setUser] = useState({});
    const [listings, setListings] = useState([]);

    useEffect(() => {
        getListings();

    }, []);

    const getListings = async () => {

        try {

            var response = await axios.get('/users/seller/' + username);

            console.log(response.data)

            setUser(response.data.user);

            var list = response.data.listings;

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
        <div className='col-10 offset-1'>
            <div className='row m-5'></div>
            <div className='row my-5'>

                <div className='col-2 col-md-1'>
                    <img src={userIcon} alt={`${user.username}'s avatar`} className="img-fluid rounded-circle" width={50} />
                </div>
                <div className='col-1 text-start'>

                    <h2>{user.username}</h2>

                </div>
            </div>
            <div className='row m-5'></div>


            {user && listings[0] ? (
                <Row>
                    {listings.map(listing => (
                        <Col md="2" className="my-2 p-1" key={listing.id}>
                            <Card className='border-0 rounded-0'>
                                <img className='border-0 rounded-0' top width="100%" src={listing.thumbnail} alt="lisiting image" />

                            </Card>
                            <Row className='px-3 fs-5'>
                                {/* <CardTitle tag="h5"> */}
                                ${listing.price}
                                {/* </CardTitle> */}
                            </Row>
                        </Col>
                    ))}
                </Row>

            ) : (
                <div>
                {user.username ? (
            <h4>{username} isn't selling anything yet.</h4>
                ) : (
                    <h4>Not found.</h4>
                )}
</div>
            )}

        </div>
    );
}

export default UserProfilePublic;
