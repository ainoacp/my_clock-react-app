import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import HomePage from './components/pages/HomePage/Homepage';
import DigitalClockPage from './components/pages/DigitalClockPage/DigitalClockPage';
import CountdownPage from './components/pages/CountdownPage/CountdownPage';
import StopwatchPage from './components/pages/StopwatchPage/StopwatchPage';


function App() {
  return (
    <Router>
      <div className='App-header'>
        <Header></Header>
      </div>
      <div className='App-main'>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/digital-clock' element={<DigitalClockPage></DigitalClockPage>} />
          <Route path='/countdown' element={<CountdownPage></CountdownPage>} />
          <Route path='/stopwatch' element={<StopwatchPage></StopwatchPage>} />
      </Routes>
      </div>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
