import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { 
  Checklist,
  Check,
  Navigation,
  Header,
  Tables,
} from './components';
import './App.css';

class App extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenuClicked = () => {
    this.setState(previousState => ( {
      menuOpen: !previousState.menuOpen,
    }));
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation
            toggleMenu={this.toggleMenuClicked}
            isOpen={this.state.menuOpen} />
          <Header toggleMenu={this.toggleMenuClicked} />
          <Route exact={true} path='/' component={Tables}/>
          <Route path='/checks' component={Checklist}/>
          <Route path='/check/:checkId' component={Check}/>
        </div>
      </Router>
    );
  }
}

export default App;
