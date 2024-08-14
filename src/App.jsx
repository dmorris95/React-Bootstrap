import Home from "./assets/Home";
import { Route, Routes} from 'react-router-dom';
import NotFound from "./assets/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    
  )
}

export default App
