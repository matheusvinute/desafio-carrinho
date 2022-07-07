import styled from "styled-components";

export const Container = styled.div`
  background: var(--forma);
  border-radius: 0.6rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  
  .header {
    font-size: 0.9rem;
    padding: 0.5rem 10rem;
    letter-spacing: -0.10rem;
  }
  
  .finalizar-compra {
    display: flex;
    justify-content: center;
    
    button {
    background: var(--button);
    border: 0;
    width: 90%;
    padding: 1rem;
    color: var(--forma);
    font-weight: 600;
    font-size: 1.2rem;
    
    cursor: pointer;
    border-radius: 0.6rem;
    }
  }
  
  .total {
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    border-top: 1px solid var(--divisor);
    padding: 1.8rem;
    text-align: center;
    
    .total-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      
      p,span {
      font-weight: 800;
      font-size: 1.5rem;
      }
    }
    
    .congratulations {
      display: inline;
      background-color: #c7ffa6;
      color: #1f7a03;
      padding: 0.3rem 1rem;
      border-radius: 1rem;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
  
  main .product-list {
    height: 450px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  }
`