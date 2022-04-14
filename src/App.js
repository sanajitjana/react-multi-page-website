import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./Pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route
            path="/react-multi-page-website/home"
            exact
            component={() => <Home />}
          />
          <Route
            path="/react-multi-page-website/about"
            exact
            component={() => <About />}
          />
          <Route
            path="/react-multi-page-website/contact"
            exact
            component={() => <Contact />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
