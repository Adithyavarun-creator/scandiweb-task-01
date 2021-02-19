import './App.css';
import Imageslide from './components/Imageslide';
import {slideimage} from './components/Slideimage';

function App() {
  return (
    <div className="App">
      <Imageslide slides={slideimage}/>
    </div>
  );
}

export default App;
