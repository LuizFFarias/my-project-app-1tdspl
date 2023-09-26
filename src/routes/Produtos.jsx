import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir/ModalInserir";

export default function Produtos() {


  const {listaProdutoExterno, setListaProdutoExtero} = useState([{}]);
useEffect(() => {

  fetch("http://localhost: 5000/produtos",
  method: "GET",
  headers:{
    "Content-Type" : "application/json"
  }
  )
})

   



  document.title = "Lista de Produtos: ";




  const[opne, setOpen] = useState(false)

  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

      {open ?<ModalInserir open= {true} setOpen={setOpen}/> : ""}
      <button onClick={ () => setOpen = {true}}>OPEN-MODAL</button>

      <table className={classes.estilo}>
        <thead className={classes.tableHeaders}>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR</th>
          </tr>
        </thead> 

        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice} className={classes.tableLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td><img src={produto.img} alt={produto.desc} /></td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}> <Editar/></Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className={classes.tableFooter}>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
