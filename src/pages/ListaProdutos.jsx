import { Link } from 'react-router-dom'
const produtos = [
 { id: 1, nome: 'Teclado' },
 { id: 2, nome: 'Mouse' }
]
function ListaProdutos() {
 return (
 <div>
 {produtos.map(prod => (
 <Link key={prod.id} to={`/produto/${prod.id}`}>{prod.nome}</Link>
 ))}
 </div>
 )
}

export default ListaProdutos