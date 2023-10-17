//TODO links to single listings, search filter layout + menu, display results eg "results for 'fancy shoes'", "no listings fournd"
//FIXME CLEAR FILTERS OPTION
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
//import { Input, FormGroup, Label, Button, Form, Col, Card, CardImg, CardBody, CardTitle, CardText, Container, Row } from 'reactstrap';
import {
  Container, Row, Col, InputGroup, InputGroupText, Input,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardBottom, CardFooter, CardTitle, Button, onKeyPress,
} from 'reactstrap';

function Listings() {

  const [search, setSearch] = useState('');
  const [listings, setListings] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [dropdownOpenSize, setDropdownOpenSize] = useState(false);
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
  
    getListings();

  }, [search, selectedSize, selectedCategory]);



  const getListings = async () => {

    try {

      var response = await axios.get(`/listings?search=${search}&size=${selectedSize}&category=${selectedCategory}&gender=${selectedGender}`);

      console.log(response.data)

      var list = response.data;

      for (let i in list) {


        var img = await axios.get(`/admin/listingimages/thumbnail/${list[i].id}`);
        list[i].thumbnail = img.data.url;
      }
      setListings(list);

    } catch (err) {
      console.log(err);
    }
  }


useEffect(() => {

  // Fetch categories
  axios.get('/attr/categories')
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });

  // Fetch sizes
  axios.get('/attr/sizes')
    .then(response => {
      setSizes(response.data);
    })
    .catch(error => {
      console.error('Error fetching sizes:', error);
    });

  // Fetch genders
  axios.get('/attr/genders')
    .then(response => {
      setGenders(response.data);
    })
    .catch(error => {
      console.error('Error fetching genders:', error);
    });

}, []);



// Filter listings based on search term and selected filters
const filteredListings = listings.filter(listing => {
  return listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedSize || listing.size === selectedSize) &&
    (!selectedCategory || listing.category === selectedCategory);
});

return (
  <Container>
    <Row className="mb-4">
      <Col md="8">
        <InputGroup>
          <Input
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          //  onKeyDown={e => {
          //     if (e.key === 'Enter') {
          //        fetchListings();
          //     } 
          //  }
          //  }
          />
          <InputGroupText addonType="append">🔍</InputGroupText>
        </InputGroup>
      </Col>
      <Col md="2">
        <Dropdown isOpen={dropdownOpenSize} toggle={() => setDropdownOpenSize(prevState => !prevState)}>
          <DropdownToggle caret>
            {selectedSize || "Size"}
          </DropdownToggle>
          <DropdownMenu>
            {sizes.map(size => <DropdownItem key={size.id} onClick={() => setSelectedSize(size.id)}>{size.name}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
      </Col>
      <Col md="2">
        <Dropdown isOpen={dropdownOpenCategory} toggle={() => setDropdownOpenCategory(prevState => !prevState)}>
          <DropdownToggle caret>
            {selectedCategory || "Category"}
          </DropdownToggle>
          <DropdownMenu>
            {categories.map(category => <DropdownItem key={category.id} onClick={() => setSelectedCategory(category.id)}>{category.name}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>

    <Row>
      {listings.map(listing => (
        <Col md="4" key={listing.id}>
          <Card>
            <CardImg top width="100%" src={listing.thumbnail} alt="lisiting image" />
            <CardFooter>
              {/* <CardTitle tag="h5"> */}
              ${listing.price}
              {/* </CardTitle> */}
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
}

export default Listings;
