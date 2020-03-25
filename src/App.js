import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import {Main} from './components/main/main.component.jsx';


//Classes are for handling state

class App extends Component{
  constructor(){
    super(); // calls constructot method on component class. Gives access to this.state

    this.state = {
      docs: [],
      searchField: '',
      displayMain: false,
      active: false
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  // LIFECYCLE METHODS


  // Arrow functions allow you to automatically set this
  //class method
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  showMain = () => {
    this.setState({displayMain: true});
    this.toggleClass();
  }

  toggleClass = (e) => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    console.log(this.state.active);
  }

  hideMain = () => {
    this.setState({displayMain: false});
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/ronaerc/json-files/docs')
      .then(response => response.json())
      .then(docs => this.setState({docs: docs}));
  }

  render() {
    // filtering an array
    const {docs, searchField} = this.state;
    const filteredDocs = docs.filter(
      doc => doc.cat.toLowerCase().includes(searchField.toLowerCase())
    )
    const displayMain = this.state.displayMain;
    let main;
    
    if (displayMain) {
      main = <Main id="" />  
    }

    return (

      <div className="App">
        <section className={this.state.displayMain ? "cover slided" : "cover" } onClick={this.hideMain}>
         
            <div className="block block--top">
              <h1>Football Docs To Watch</h1>
            </div>
            <div className="block block--bottom">
           
           
            </div>
       
        </section>
      
        <CardList docs={filteredDocs} showMain={this.showMain} displayMain={displayMain} isActive={this.active}/>
        
        {main}
        
      </div>
    )
  }


}

export default App;
