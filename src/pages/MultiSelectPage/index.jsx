import { List } from './components/List';
import './style.css';
import {useState} from "react";

export const MultiSelectPage = () => {

  const [cislo, setCislo] = useState(0); 
  
  const nastavPocet = (noveCislo) => {
    setCislo(noveCislo)
  };

  return (
    <div className="container">
      <h1>Výběr více položek</h1>
      <h2>Zvoleno položek: {cislo}</h2>
      <List zmenaOznacenychPolozek={nastavPocet}/>
    </div>
  );
};
