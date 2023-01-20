import {
    BrowserRouter as Router,
    Routes,
    Route,   
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './Pages/pages.css'

  import Navigation from './Components/Shared/Navigation';
  import HomePage from './Pages/Home';
  import MainPage from './Pages/Main';
  import ProfilePage from './Pages/Profile';
  import NewQuestionPage from './Pages/NewQuestion';
  import TermsPage from './Pages/Terms';

  
  function App() {
    return (     
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
  