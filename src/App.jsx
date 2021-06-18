import './App.css';
import styles from "./App.module.scss"
import FilmProvider from './context/FilmProvider/FilmProvider';
import Routes from './containers/Routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav/Nav';

function App() {
  return (
    <FilmProvider>
      <Router>
      <Nav/>
      <Routes/>
      </Router>
    </FilmProvider>
  );
}

export default App;
