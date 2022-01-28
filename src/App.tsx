import InvertButton from './Components/InvertButton';
import Navigation from './Components/Navigation';
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
