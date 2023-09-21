import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {RiDeleteBin2Fill as Excluir} from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Produtos() {


  const [counter, setCounter] = useState(0);
  document.title = "Lista de Produtos: " + counter;
//   useEffect(() => (
//      console.log("Este useEffects renderiza sempre que ocorre alguma atualização no componente!")
//   ));
// const [listaProdutosLocal, setListaProduosLocal] = useState([{}]);

//   useEffect(() => {
//     console.log("Esse useEffect renderiza apenas uma vez no carregamento do componente!");

//   },[]);

//   useEffect(() =>{
//     console.log("Este useEfect renderiza apenas se o objeto/elemento/componente e ou variável sofrer uma alteração. Devemos colocar o item a ser monitorado no array de dependências: []");

//   }, [counter2]);
  
  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

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
