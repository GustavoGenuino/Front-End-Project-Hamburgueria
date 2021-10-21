import React, { useState, useRef} from "react"
import axios from 'axios'
import Burguer from "../../Template/burger.png"
import { useHistory } from "react-router-dom"
import {
  Container,
  Imagem,
  H1,
  P,
  Inputs,
  Button,
  Div2
  
  
} from "./styles"




const App = () => {
  const [pedidos, setPedidos] = useState([]);
  const order = useRef()
  const name = useRef()
const history = useHistory()


  async function AddOrders() {

    const { data: novosPedidos } = await axios.post("http://localhost:3002/pedidos", {
      order: order.current.value,
      clientName: name.current.value,
    })


    setPedidos([...pedidos, novosPedidos])

    history.push("/pedidos")

  }





  return (
    <Container>
      <Imagem alt="logo-code-burguer" src={Burguer} />

      <H1>Faça seu pedido!</H1>

      <Div2>
        <P>Pedidos</P>
        <Inputs ref={order} />

        <P>Nome do Cliente</P>
        <Inputs ref={name} />


        <Button  onClick={AddOrders}>Novo Pedido</Button>
      </Div2>




    </Container>
  )
}

export default App