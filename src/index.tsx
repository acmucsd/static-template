import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page1 from "pages/page1/";
import Standard from 'pages/Standard';
import Contact from "components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <div className="pages">
              <Page1 />
            </div>
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
