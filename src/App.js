import './App.scss';
import NavbarHorizontal from './components/NavbarHorizontal';
import NavbarVertical from './components/NavbarVertical';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <div className="container-fluid app">
      <div className="row">
      <NavbarHorizontal />
      <div className="col-md-3 col-lg-2">
      <NavbarVertical  />
      </div>
      <div className="col-md-9 col-lg-10">
      <Main  />
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
