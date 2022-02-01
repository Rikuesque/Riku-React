import {InvertButton} from './Components/Components';
import {Navigation} from './Components/Components';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div className="appContainer">
      <Navigation />
      <HomePage />
      <InvertButton />
    </div>
  );
}

export default App;
