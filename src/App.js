import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import { Route } from "react-router-dom";
import Blog from './Components/Blog';
import Main from './Components/Main';
import Payment from './Components/Payment';
import Art from './Components/Art';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Route exact path="/" component={Main} />
              <Route path="/blog" component={Blog} />
              <Route path="/payment" component={Payment} />
              <Route path="/art" component={Art} />
              <Footer />
          </div>
      </div>
    );
  }
}

export default App;
