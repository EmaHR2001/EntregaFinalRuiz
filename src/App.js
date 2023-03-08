import Navbar from './components/Navbar/Navbar.js';
import MainContent from './components/MainContent/MainContent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <MainContent title={"Más Vendidos"} />
    </div>
  );
}

export default App;
