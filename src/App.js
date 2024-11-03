import './App.css';
import Home from './components/HomePage/Home';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

// Register GSAP ScrollTo Plugin
gsap.registerPlugin(ScrollToPlugin);
function App() {
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
