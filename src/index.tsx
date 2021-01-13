import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/index.less';
import Home from "pages/Home";
import Standard from 'pages/Standard';
import Contact from "components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" id="top">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/standard" exact>
            <Standard />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
