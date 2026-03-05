import { useState } from 'react'
function Contador() {
    const [count, setCount] = useState(0)
    return (
        //Onde desenvolvemos o que vai aparecer//
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() =>
                setCount(count + 1)}>
                    Clique aqui
            </button>
        </div>
    )
}

export default Contador;
<Contador></Contador>