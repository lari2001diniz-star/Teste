import { useParams, Link } from 'react-router-dom'
function Produto() {
 const { id } = useParams()
 return (
 <div className="p-4">
 <h1>Produto: {id}</h1>
 <p>Detalhes do produto {id}...</p>
 <Link to="/produtos"
 className="text-blue-500">
 Voltar
 </Link>
 </div>
 )
}

export default Produto