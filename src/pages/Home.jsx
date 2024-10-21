import { useEffect, useState } from "react";

export default function app() {

    const [lista, setlista] = useState([]);

    useEffect(() => {
        constreceberListaProdutos = async ()=> {
            const resposta = await fetch('htts://fakestoreapi.com/products');
            const dados = await resposta.json();
            setlista(dados);

        }
        receberListaProdutos();
    },[]);
     return (
        <>
        <h1>Lista de Produtos</h1>
        <ul>
            {lista.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>produto.description</p>
                    <p>preço:{produto.price} </p>
                    <img src={produto.image} alt={produto.title} width= {100} />
                </li>
            ))}
        </ul>
     </>
   );   
}