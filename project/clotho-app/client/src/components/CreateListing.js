import React, { useState } from 'react';
import axios from 'axios';

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
    CardFooter,
    Table,
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    InputGroup,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Modal,
    NavbarToggler,
    ModalHeader
    
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

//   const handleImageChange = (e) => {
//     setFormData(prevState => ({ ...prevState, image: e.target.files[0] }));
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    const response = await axios.post('api/listings', form);
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" onChange={handleInputChange} required></textarea>
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} required />
        <select name="categoryId" onChange={handleInputChange}>
          {/* TODO: Fetch and list categories here */}
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          {/* ... */}
        </select>
        <select name="genderId" onChange={handleInputChange}>
          {/* TODO: Fetch and list genders here */}
          <option value="1">Male</option>
          <option value="2">Female</option>
          {/* ... */}
        </select>
        <select name="sizeId" onChange={handleInputChange}>
          {/* TODO: Fetch and list sizes here */}
          <option value="1">Small</option>
          <option value="2">Medium</option>
          <option value="3">Large</option>
          {/* ... */}
        </select>
        {/* <input type="file" name="image" onChange={handleImageChange} required /> */}
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;
