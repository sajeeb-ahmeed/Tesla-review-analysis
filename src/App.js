

import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Chart from './components/chart/Chart';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/Notfound';
import Reviews from './components/Reviews/Reviews';


export const ReviewContext = createContext();

function App() {
  const [review, setReview] = useState([])
  return (
    <div className="App">
      <ReviewContext.Provider value={[review, setReview]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Chart></Chart>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>

      </ReviewContext.Provider>

    </div>
  );
}

export default App;
