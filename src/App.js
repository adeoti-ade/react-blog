import './App.css';
import Navbar from './NavBar';

function App() {
  const title = "Welcome to the new Blog";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>
          { title }
        </h1>
      </div>
    </div>
  );
}

export default App;
