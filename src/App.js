import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import News from './pages/News/News';
import About from './pages/About/About';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='news' element={<News />} />
          <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
