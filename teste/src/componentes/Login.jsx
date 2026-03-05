import {useState} from 'react'
function Login() {
    const [logado, setLogado] = useState(false)
    return (
        <div>
            {/* 2. Operador Ternário */}
            {logado ? "Bem-vindo!" : "Faça login "}
            {/* 3. Botão para alterar */}
            <button onClick={() => setLogado(!logado)}>
            Alterar </button>
        </div>
    )
}
 export default Login;