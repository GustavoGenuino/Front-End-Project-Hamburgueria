import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import Bag from "../../Template/page2.png"
import Lixo from "../../Template/18297 4.svg"

import {
  Container,
  Imagem,
  H1,
  Button,
  Div2,
  Pedido
} from "./styles"




const Page2 = () => {
  const [pedidos, setPedidos] = useState([]);
  const history = useHistory()
 

  useEffect(()=>{

async function pushPedidos(){

    const { data: novosPedidos } = await axios.get("http://localhost:3002/pedidos")
    setPedidos(novosPedidos)
}

pushPedidos()  

},[])
  
async  function deleteOrder(pedidoId) {

  await axios.delete(`http://localhost:3002/pedidos/${pedidoId}`)
    const orders = pedidos.filter(pedido => pedido.id !== pedidoId)
    setPedidos(orders)
  }

function goBack(){
  history.push("/")
}
  return (
    <Container>
      <Imagem alt="logo-code-burguer" src={Bag} />

      <H1>Pedidos</H1>

      <Div2>    

        <ul>
          {pedidos.map((pedido) => (
            <Pedido key={pedido.id}>
              <p className="order">{pedido.order}</p>  <p>{pedido.clientName}</p>
              <button onClick={() => deleteOrder(pedido.id)}><img alt="lata-de-lixo" src={Lixo} /></button>
            </Pedido>
          ))}
        </ul>

        <Button onClick={goBack} >Voltar</Button>


      </Div2>




    </Container>
  )
}

export default Page2