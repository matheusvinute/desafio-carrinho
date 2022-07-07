import { useEffect, useState } from "react";

import { CarrinhoList } from "../CarrinhoList";
import { api } from "../../services/api"

import { Container } from "./styles";


interface CarrinhoProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sellingPrice: number;
}


export function CarrinhoBaixo() {
  const[products, setProducts] = useState<CarrinhoProps[]>([])
  let total = 0;

  useEffect(() => {  
    api.get("baixo")
    .then(response => setProducts(response.data.items))
    .catch((error) => console.log("erro " + error))
  }, [])

  console.log(products.map(product => (
    total += product.sellingPrice
  )))


  return (
    <>
      <Container>
        <header className="header">
          <h1>Meu carrinho</h1>
        </header>
        <main>
          <div className="product-list">
            {products.map(product => {
              return(
                <CarrinhoList key={product.id} name={product.name} price={product.price} sellingPrice={product.sellingPrice} imageUrl={product.imageUrl} />
              )
            })}
          </div>
          <section className="total">
            <div className="total-info">
              <p>Total</p>
              <span>R$ {(total/100).toFixed(2)}</span>
            </div>
            {(total/100) >= 10 && <p className="congratulations"> Parabéns, sua compra tem frete grátis!</p>
            }
          </section>
          <section className="finalizar-compra">
            <button type="submit">
              Finalizar compra
            </button>
          </section>
        </main>
      </Container>
    </>
  );
}