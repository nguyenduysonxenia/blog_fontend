import './App.scss';
import Container from './components/Container/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
