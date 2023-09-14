import { ListaProdutos } from "../compoentes/ListaProdutos";
import { Link } from "react-router-dom";
import classes from "./Produtos.module.css"
import {AiFillEdit as Editar} from "react-icons/ai"

export default function Produtos(){
    return(
        <div>
            <h1>Componentes Produtos</h1>
            <p>Onde os produtos nascem</p>
            
            <table className={classes.estilo}>
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
                        <tr key={indice} className={classes.tableLine}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <Link to={`/editar/produtos/${produto.id}`}></Link>
                            </td>

                        </tr>                        
                    ))}
                </tbody>
                <tfoot className={classes.tableFooter}>
                    <tr>
                        <td colSpan={3}>Produtos</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}