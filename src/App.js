import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  return (
      <>
        <div className='container p-5'>
          {/* <Form /> */}
          <div className='row'>
            <div className='col-3'>
              <Sidebar />
            </div>
            <div className='col-9'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/news' element={<News />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
