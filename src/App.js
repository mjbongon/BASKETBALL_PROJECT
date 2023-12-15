import Navbar from './Navbar';
import Teams from './components/Teams';
import Players from './components/Players';
import Standings from './components/Standings';
import Home from './components/Home';

function App() {
  let components
  switch (window.location.pathname) {
    case "/":
      components = <Home />
      break;
  
    case "/teams":
      components = <Teams />
      break;
    case "/players":
      components = <Players />
      break;
  
    case "/standings":
      components = <Standings />
      break;
  }
  return (
  <>
    <Navbar />
    <div className='container'>{components}</div>
  </>
  )
}

export default App;
