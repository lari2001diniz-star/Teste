import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Menu from './componentes/Menu'
import Produto from './pages/Produto'
import ListaProdutos from './pages/ListaProdutos'

function App() {
 return (
  <div> 
    <Menu />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/sobre" element={<Sobre />} />
 <Route path="/contato" element={<Contato />} />
 <Route path="/produto/:id" element={<Produto />} />
 <Route path="/produtos" element={<ListaProdutos />} />
 </Routes>
 </div>
 )
}
export default App


