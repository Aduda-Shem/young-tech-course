import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/blog">
            <Blog></Blog>
          </Route>

          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
        </Switch>

        <Route exact path="/about">
            <About></About>
          </Route>

        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
