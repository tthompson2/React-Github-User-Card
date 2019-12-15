import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserCard from "../components/UserCard";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
       dataSet : [],
       followerDataset: []
    }
  }

  componentDidMount() {

    axios
       .get("https://api.github.com/users/tthompson2")

       .then(response => {
            console.log(response.data);

            this.setState({
              dataSet : response.data
            })
       })

       .catch(error => {

           console.log(error);
       })

       axios
       .get("https://api.github.com/users/tthompson2/followers")

       .then(response => {
            console.log(response.data);

            this.setState({
              dataSet : response.data
            })
       })

       .catch(error => {

           console.log(error);
       })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here is my information:
        </p>
         <UserCard 
          dataSet = {this.state.dataSet}
         />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }

}
export default App;
