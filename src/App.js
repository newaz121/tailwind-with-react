import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Hello world</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
