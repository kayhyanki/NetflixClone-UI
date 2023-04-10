import './App.css';
import './normalize.css';

import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
       <Billboard/>
       <div className='App-bars'>
      <Navigation />
      <Titles />
      <Footer />
      </div>
    </div>
  );
}

export default App;
