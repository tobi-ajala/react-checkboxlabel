import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox';

const items = [ //items array
  'One',
  'Two',
  'Three',
];

class Application extends Component {
  componentWillMount = () => { //create a Set before the Application is mounted
    this.selectedCheckboxes = new Set(); //create a new selectedCheckboxes property and assign a new set
  }
  toggleCheckbox = label => { //toggleCheckbox function takes the label parameters
    if (this.selectedCheckboxes.has(label)) { //reference the set and check if a specific checkbox label is in that set
        this.selectedCheckboxes.delete(label); //delete the label if it's already in the set
    } else {
        this.selectedCheckboxes.has(label); //otherwise add it to the set
    }
  }
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault(); //prevent default behaviour of a forms submit event

    for (const checkbox of this.selectedCheckboxes) { //for..of iterates through the this.selectedCheckboxes set & logs every item from that set
      console.log(checkbox, 'is selected');
    }
  }

  //label calls the label from the items array
  //everytime checkbox is checked/unchecked this.toggleCheckbox is called
  //the key property is used to uniquely id each instance of the dynamic items
  createCheckbox = label => (
    <Checkbox label={ label } handleCheckboxChange={ this.toggleCheckbox } key={ label } />
  )

  createCheckbox = () => ( //createCheckbox function iterates over items array and call this.createCheckbox function
    items.map(this.createCheckbox) //for each item in the array
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="container">
          <form onSubmit={this.handleFormSubmit}> //call handleFormSubmit function when submit is happens
            {this.createCheckbox()} //creates three instances of the Checkbox component dynamically
            <button type="submit">Submit</button> //creating button element of type 'Submit' that submits the form on click
          </form>
        </div>

      </div>
    );
  }
}

export default App;
