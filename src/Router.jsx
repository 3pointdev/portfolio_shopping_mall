import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Index from './Pages/index';

/**
 * 실제 페이지에 표시되는 컴포넌트(페이지마다 최상단 Root 컴포넌트)
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

//TODO::

export default function Routers(props) {

  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Footer/>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}