import {
    BrowserRouter as Router,
    Routes,
    Route,   
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import HomePage from './Pages/Home';
  import MainPage from './Pages/Main';
  import QuestionPage from './Pages/Question';
  import ProfilePage from './Pages/Profile';
  import './Pages/pages.css'
  import Navigation from './Components/Shared/Navigation';
  //import { createBrowserHistory } from 'history';

  function App() {
    //const history = createBrowserHistory();

    return (
      // <Router history={ history }>
      <Router>
        <Navigation />
        <div>
          <Routes>
           
            <Route path="/" exact element={<HomePage />} />
            <Route path="/Profile" exact element={<ProfilePage />} />
            <Route path="/Main" exact element={<MainPage />} />   
            <Route path="/Question" exact element={<QuestionPage />} />          
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  