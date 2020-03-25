import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';


//Classes are for handling state

class App extends Component{
  constructor(){
    super(); // calls constructot method on component class. Gives access to this.state

    this.state = {
      docs: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  // LIFECYCLE METHODS


  // Arrow functions allow you to automatically set this
  //class method
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({docs: cat}));
  }

  handleClick1(){
    console.log('in');
  }


  render() {
    // filtering an array
    const {docs, searchField} = this.state;
    const filteredDocs  = docs.filter(
      doc => doc.name.toLowerCase().includes(searchField.toLowerCase())
    )



    return (
      <div className="App">
        <section className="cover">
          <SearchBox 
            placeholder="Search..."
            handleChange={this.handleChange}
          />
        </section>
        <CardList trumpisms={filteredDocs} />

        {/* Don't do this, with brackets, because it will be called on render */}
        <button style={{display: "none"}} onClick={this.handleClick1()}>Click 1</button> 

       
      </div>
    )
  }


}

export default App;
