import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormDetail from './components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FormDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
