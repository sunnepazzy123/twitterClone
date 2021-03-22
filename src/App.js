
import './App.css';
import SideBars from "./components/SideBars"
import Feeds from "./components/Feeds"
import Widget from './components/Widget';

function App() {
  //BEM
  return (
    <div className="app">
      {/* SideBar */}
      <SideBars />

      {/* Feeds */}
      <Feeds />


      {/* Widgets */}
      <Widget />
    </div>
  );
}

export default App;
