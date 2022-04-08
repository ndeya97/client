import React, { Component } from "react"; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:4545/medias")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }


    render() {
      return (
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notre app est en maintenance Retrouvez bientôt vos films et séries ici !
            </a>
          </header> */}

          <div className='App-component'>  
          Notre app est en maintenance Retrouvez bientôt vos films et séries ici !

            <img src={logo} className="App-logo" alt="logo" />

                       <p className="App-intro"> Ici Démarrer le service média pour afficher {this.state.apiResponse}</p>

          </div>
        </div>
      );
    }  
}

export default App;
