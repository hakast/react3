import React, {Component} from 'react';
import Home from './components/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Clients from './components/clients/Clients';
import Calendar from './components/services/Calendar';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, HashRouter, Route, Link, Switch} from 'react-router-dom';
import './styles/style.scss';

class App extends Component {

  render() {
    return (
      <div>

      <HashRouter>
        <div>
          <ul  className="menu">
            <li>
            <Link to="/home">
              <span className="reactText">React & Redux</span>
              <span className="forts_hakan">med Håkan</span>
            </Link>
            </li>
            <li><Link className="link" to="/about">Om</Link></li>
            <li><Link className="link" to="/services">Tjänster</Link></li>
            <li><Link className="link" to="/projects">Projekt</Link></li>
            <li><Link className="link" to="/clients">Klienter</Link></li>
            <li><Link className="link" to="/contact">Kontakt/Kommentarer</Link></li>
          </ul>

          <Switch>
          {/* <Route exact={true} path="/" /> */}
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/clients" component={Clients} />
          <Route path="/contact" component={Contact} />
          {/* Extra paths withput menu link */}
          <Route path="/calendar" component={Calendar} />
          <Route path="*" component={Home} />
        </Switch>
        </div>
    </HashRouter>
  </div>
)
}
};

export default App;
