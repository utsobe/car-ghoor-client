import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login/Login';
import Home from './pages/HomePage/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import UpdateItem from './pages/UpdateItem/UpdateItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/update/:id' element={<UpdateItem></UpdateItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
