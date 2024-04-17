import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Tasks from './Tasks';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/tasks" component={Tasks} />
      </Switch>
    </Router>
  );
};

export default App;
