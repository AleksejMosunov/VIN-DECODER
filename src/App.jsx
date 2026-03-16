import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Variables from './pages/Variables/Variables';
import VariableDetail from './pages/VariableDetail/VariableDetail';
import { useEffect } from 'react';
import { VinApi } from './api/vinApi';
import { useVinStore } from './store/useVinStore';
import About from './pages/About/About';
import MainLayout from './layouts/mainLayout';
import './App.css';

function App() {

  const { variablesList, setVariablesList, loading, setLoading } = useVinStore();

  useEffect(() => {
    if (variablesList.length === 0) {
      setLoading(true);
      VinApi.getAllVariables().then((data) => {
        setVariablesList(data);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/variables/:variableId" element={<VariableDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
