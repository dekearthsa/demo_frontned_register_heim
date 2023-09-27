import './App.css';
import {Routes, Route} from 'react-router-dom';
import PageRegister from './view/PageRegister.js';


// const haddleRegister = async () => {
//     const status = await axios.post("http://localhost:9292/api/line/regsiter");
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/reigster/:userid" element={< PageRegister/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
