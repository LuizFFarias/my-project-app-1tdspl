import { ListaProdutos } from "../compoentes/ListaProdutos";

export default function Produtos(){
    return(
        <div>
            <h1>Componentes Produtos</h1>
            <p>Onde os produtos nascem</p>
            
            <table style={{borderCollapse: "collapse", border: "2px solid #ffffff"}}>
                <thead>
                    <tr>
                        <th style={{border: "2px solid #fffff"}}>ID</th>
                        <th style={{border: "2px solid #fffff"}}>Nome</th>
                        <th style={{border: "2px solid #fffff"}}>Descricao</th>
                        <th style={{border: "2px solid #fffff"}}>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos.map((produto, indice)=>(
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>

                        </tr>                        
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Produtos</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}