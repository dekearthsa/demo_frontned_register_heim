import './App.css';
import {Routes, Route} from 'react-router-dom';
import PageRegister from './view/PageRegister.js';
import PageNotFound from './view/PageNotFound.js';
import PageReportAirFac from './view/PageReportAirFac';
import PageReportSolar from './view/PageReportSolar';

// const haddleRegister = async () => {
//     const status = await axios.post("http://localhost:9292/api/line/regsiter");
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="/reigster/:userid" element={< PageRegister/>}></Route>
          <Route path="/report/airfac/:lineID" element={<PageReportAirFac/>}></Route>
          <Route path="/report/solar/:lineID" element={<PageReportSolar/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
