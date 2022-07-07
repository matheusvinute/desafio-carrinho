import { Container } from "./styles";

interface CarrinhoListProps {
  name: string;
  price: number;
  imageUrl: string;
  sellingPrice: number;
}

export function CarrinhoList(props: CarrinhoListProps){
  return (
    <>
      <Container>
          <li>
            <img src={props.imageUrl} alt={props.name} height="110px" width="110px"/>
            <div className="product-info">
              <h3>{props.name}</h3>
              <span className="faded">R$ {(props.price/100).toFixed(2)}</span>
              <span>R${(props.sellingPrice/100).toFixed(2)}</span>
            </div>
          </li>
      </Container>
    </>
  );
}