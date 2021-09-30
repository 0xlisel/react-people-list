import React from 'react';
import './App.css';

class App extends React.Component{

  render(){
    return <PersonList />;
  }
};

const people = [
  {
    img: 44,
    name: "Landon",
    job: "Software Developer"
  },
  {
    img: 42,
    name: "Oliver",
    job: "Data Entry Clerk"
  },
  {
    img: 34,
    name: "Donovan",
    job: "Graphic Designer"
  },
  {
    img: 11,
    name: "Toby",
    job: "Network Engineer"
  }
];

class PersonList extends React.Component{


  render(){
    return (
      <section>
        <Person details={people[0]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Person>
        <Person details={people[1]}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Person>
        <Person details={people[2]}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Person>
        <Person details={people[3]}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Person>
      </section>
    );
  }
};

class Person extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showAbout: false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout(){
    let newState = this.state.showAbout === false ? true : false;
    this.setState({showAbout: newState});
  }

  render(){

    const { img, name, job } = this.props.details;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    const description = this.props.children;

    return (
      <div className="person" onClick={this.toggleAbout} title="Click to see more">
        <img src={url} alt={`${name}'s_photo`} />
        <h4>
          {name}
        </h4>
        <h4>
          {job}
        </h4>
        <p style={{display: this.state.showAbout ? 'block' : 'none'}}>
          {description}
        </p>
      </div>
    );
  }
};

export default App;