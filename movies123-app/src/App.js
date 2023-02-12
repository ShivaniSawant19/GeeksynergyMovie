
import './App.css';
import CompanyInfoPage from './pages/CompanyInfoPage'; 
import MoviesPage from './pages/MovieListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<SignupPage />}></Route>
    <Route exact path='/login' element={<LoginPage />}></Route>
    <Route exact path='/movies' element={<MoviesPage />}></Route>
    <Route exact path='/companyinfo' element={<CompanyInfoPage />}></Route>
    </Routes>
    </BrowserRouter>
<br />
    <CompanyInfoPage />
    
    </div>
  );
}

export default App;


// const response = await fetch(
//   'https://hoblist.com/api/movieList',
//   {
//     method: 'GET',
//     body: JSON.stringify({
//       category: 'movies',
//       language: 'kannada',
//       genre: 'all',
//       sort: 'voting'
//     })
//   }
// );
// const data = await response.json();
// setMovies(data);