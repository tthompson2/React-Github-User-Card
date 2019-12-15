import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

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
            console.log(response);

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
            Here is my information
        </p>
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
