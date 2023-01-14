import {
    BrowserRouter as Router,
    Routes,
    Route,   
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import HomePage from './Pages/Home';
  import MainPage from './Pages/Main';
  import ProfilePage from './Pages/Profile';
  import './Pages/pages.css'
  //import { createBrowserHistory } from 'history';

  function App() {
    //const history = createBrowserHistory();

    return (
      // <Router history={ history }>
      <Router>
        <div>
          <Routes>
           
            <Route path="/" exact element={<HomePage />} />
            <Route path="/Profile" exact element={<MainPage />} />
            <Route path="/Main" exact element={<ProfilePage />} />         
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  