import { useState } from "react";
import { Link } from "react-router-dom";
export default function InserirProduto(){
    document.title = 'Inserir Produto';

    const [produtoId, setProdutoId] = useState(0);
    const [produto, setProduto] = useState({
        id: 0,
        nome: "",
        desc: "",
        preco: 0.0,
        img: ""
    })


    return(
        <div>
            <h1>Inserir Produto</h1>
<div>
    <form action="">
        <fieldset>
            <legend>Cadastrar Produto</legend>
            <div>
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" value={produto.nome}/>

            </div>
            <div>
            <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" value={produto.desc}/>
            </div>
            <div>
            <label htmlFor="idPreco">Preço</label>
                <input type="number" name="preco" id="idPreco" value={produto.preco}/>
            </div>
            <div>
            <label htmlFor="idImg">Imagem</label>
                <input type="img" name="img" id="idImg" value={produto.img}/>
            </div>
        </fieldset>
    </form>
</div>

        </div>
    )
}
