// import logo from './logo.svg';
import './App.css';
import Donate from './components/Donate';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';

function App() {
  return (
    <>
<div className="home">
  <Home/>
</div>
     <div className="App">
      
      <Donate />
    </div>
    </>
   
  );
}

export default App;
