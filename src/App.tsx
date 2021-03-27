import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Random from "./Pages/Random";
import About from "./Pages/About";
import Detail from "./Pages/Detail";

import "./Style/index.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/random" component={Random} />
              <Route path="/about" component={About} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
