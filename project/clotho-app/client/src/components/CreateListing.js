// CreateListing.js
import React, { useState } from 'react';
import axios from 'axios'; 
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Container
} from "reactstrap";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    categoryId: '',
    genderId: '',
    sizeId: '',
    image: null
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prevState => ({ ...prevState, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    const response = await axios.post('/listings', form);
    console.log(response.data);
  };

  return (
    <Container>
      <Card>
        <CardHeader>Create New Listing</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" placeholder="Title" onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" placeholder="Description" onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="number" name="price" id="price" placeholder="Price" onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="categoryId">Category</Label>
              <Input type="select" name="categoryId" id="categoryId" onChange={handleInputChange}>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                {/* ... */}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="genderId">Gender</Label>
              <Input type="select" name="genderId" id="genderId" onChange={handleInputChange}>
                <option value="1">Male</option>
                <option value="2">Female</option>
                {/* ... */}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="sizeId">Size</Label>
              <Input type="select" name="sizeId" id="sizeId" onChange={handleInputChange}>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
                {/* ... */}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="file" name="image" id="image" onChange={handleImageChange} required />
            </FormGroup>
            <Button color="primary" type="submit">Create Listing</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CreateListing;
