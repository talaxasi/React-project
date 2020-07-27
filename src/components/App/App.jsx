import React from 'react';
import './AppPure.css';
import '../Books/Books';
import Books from '../Books/Books';
import Favorites from "../Favorites/Favorites";
import RouterCard from '../RouterPages/RouterCard';
import './AppPure.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path="/" exact component={Books}/>
            <Route path="/books" exact component={Books}/>
            <Route path="/books/:id" component={RouterCard}/>
            <Route path="/favorites" exact component={Favorites}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
