import './App.css';
import FirstComponent from './components/page1';
import Layout from './components/layout';
import CopyToClipBoard from './components/page2';
import PicComp from './components/page3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstComponent />} />
          <Route path="page1" element={<FirstComponent />} />
          <Route path="page2" element={<CopyToClipBoard />} />
          <Route path="page3" element={<PicComp />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
