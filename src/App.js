// For Package Import Statement
import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// For Files Import Statement
import Login from './components/login/login';
import mainboard from './mainboard';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }
  render() {
    var token = localStorage.getItem("token")
    if (!token) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={mainboard} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
