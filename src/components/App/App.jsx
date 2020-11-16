import React from 'react';
import '../Books/Books';
import Books from '../Books/Books';
import Favorites from "../Favorites/Favorites";
import CardPage from '../RouterPages/CardPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path="/" exact component={Books}/>
            <Route path="/favorites"  component={Favorites}/>
            <Route path="/:id" component={CardPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
