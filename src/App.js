import CatShow from "./components/catshow/Catshow";
import CatDb from "./components/crud/CatDb";
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CatShow/>} />
      <Route path="/catdb" element={<CatDb />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
