import {
    BrowserRouter as Router,
    Routes,
    Route,   
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import HomePage from './Pages/Home';
  import MainPage from './Pages/Main';
  import ProfilePage from './Pages/Profile';
  import NewQuestionPage from './Pages/NewQuestion';
  import TermsPage from './Pages/Terms';
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
            <Route path="/New" exact element={<NewQuestionPage />} />    
            <Route path="/Terms" exact element={<TermsPage />} />    

          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
  