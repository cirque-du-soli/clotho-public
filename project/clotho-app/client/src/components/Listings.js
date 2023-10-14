import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Listings() {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    // Fetch listings
    axios.get('/api/listings/')
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching listings:', error);
      });

    // Fetch categories
    axios.get('/api/attr/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    // Fetch sizes
    axios.get('/api/attr/sizes')
      .then(response => {
        setSizes(response.data);
      })
      .catch(error => {
        console.error('Error fetching sizes:', error);
      });

  }, []);


  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Filter listings based on search term and selected filters
  const filteredListings = listings.filter(listing => {
    return listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (!selectedSize || listing.size === selectedSize) &&
           (!selectedCategory || listing.category === selectedCategory);
  });
  
  // ... Inside the render:
  return (
    <div>
      <input 
          type="text" 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          placeholder="Search listings..."
      />
      
      <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
          <option value="">One Size</option>
          <option value="">Unknown</option>
          <option value="">XXS</option>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
          <option value="">2X</option>
          <option value="">3X</option>
          <option value="">4X</option>
          <option value="">5X</option>
          <option value="">6X</option>
            <option value="">00</option>
            <option value="">0</option>
            <option value="">2</option>
            <option value="">4</option>
            <option value="">6</option>
            <option value="">8</option>
            <option value="">10</option>
            <option value="">12</option>
            <option value="">14</option>
            <option value="">16</option>
            <option value="">18</option>
            <option value="">20</option>
            <option value="">22</option>
            <option value="">24</option>
            <option value="">26</option>
            <option value="">28</option>
            <option value="">23</option>
            <option value="">25</option>
            <option value="">27</option>
            <option value="">29</option>
            <option value="">30</option>
            <option value="">31</option>
            <option value="">32</option>
            <option value="">33</option>
            <option value="">34</option>
            <option value="">35</option>
            <option value="">36</option>
            <option value="">37</option>
            <option value="">38</option>
            <option value="">39</option>
            <option value="">40</option>
            <option value="">41</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
            <option value="">46</option>
            <option value="">47</option>
            <option value="">48</option>
            <option value="">49</option>
                <option value="">4.5</option>
                <option value="">5.5</option>
                <option value="">6.5</option>
                <option value="">5</option>
                <option value="">7</option>
                <option value="">7.5</option>
                <option value="">8.5</option>
                <option value="">9</option>
                <option value="">9.5</option>
                <option value="">10.5</option>
                <option value="">11</option>
                <option value="">11.5</option>
                <option value="">12.5</option>
                <option value="">13</option>
                <option value="">13.5</option>
                <option value="">14.5</option>
                <option value="">15</option>
                <option value="">15.5</option>
          {sizes.map(size => <option key={size.id} value={size.name}>{size.name}</option>)}
      </select>
  
      <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
        <option value="">Tops</option>
        <option value="">Bottoms</option>
        <option value="">Bags</option>
        <option value="">Shoes</option>
        <option value="">Outerwear</option>
        <option value="">Accessories</option>
        <option value="">Dresses</option>
        <option value="">Jeans</option>
        <option value="">Other</option>
          {categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
      </select>
    
      <div className="listings-container">
          {filteredListings.map(listing => (
              <div key={listing.id} className="listing-card">
                  <img src={listing.img} alt={listing.title} onClick={() => {/* Redirect to listing */}} />
                  <div>{listing.title}</div>
                  <div>${(listing.price / 100).toFixed(2)}</div>
                  <div>{listing.size}</div>
                  <div>Seller: {listing.seller}</div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default Listings;
