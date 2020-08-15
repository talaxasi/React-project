import React from 'react';
import '../Books/Books';
import Books from '../Books/Books';
import Favorites from "../Favorites/Favorites";
import RouterCard from '../RouterPages/RouterCard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path="/" exact component={Books}/>
            <Route path="/:id" component={RouterCard}/>
            <Route path="/favorites"  component={Favorites}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
