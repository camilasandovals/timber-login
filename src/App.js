import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Footer />

      </header>
    </div>
  );
}

export default App;
