//functional compnent. No access to state because no access to constructor or lifecycle methods. Used to just render html

import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}
  />
)