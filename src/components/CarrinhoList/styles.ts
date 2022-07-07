import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  padding: 1rem;
  border-top: 1px solid var(--divisor);
  border-bottom: 1px solid var(--divisor);
  
  li {
    display: flex;
    align-items: center;
    
    img {
      border: 1px solid #000;
      margin-right: 1.5rem;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      
      span {
        font-weight: 600;
      }
      
      .faded {
        color: #aaaaaa;
        font-size: 0.95rem;
      }
    }
    
    & + li {
    margin-top: 1.5rem;
  }
  }
`