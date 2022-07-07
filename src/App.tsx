import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Carrinho } from './components/Carrinho';
import { CarrinhoBaixo } from "./components/CarrinhoBaixo"

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Carrinho/> } />
        <Route path="/abaixo-de-dez" element={<CarrinhoBaixo/>} />
      </Routes>
    </BrowserRouter>
  );
}